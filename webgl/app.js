

export function createCanvas({ width = 1920, height = 1080 }) {
	const canvas = document.createElement('canvas');
	canvas.width = width;
	canvas.height = height;
	return canvas;
}

export function getGL(canvas) {
	return canvas.getContext('webgl')
}

export function createShader(gl, type, source) {
	const shader = gl.createShader(type); // 创建着色器对象

	gl.shaderSource(shader, source); // 提供数据源

	gl.compileShader(shader); // 编译 -> 生成着色器

	const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

	if (success) return shader;

	console.log(gl.getShaderInfoLog(shader))
	gl.deleteShader(shader)
}

export function createProgram(gl, vertexSource, fragmentSource) {
	const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexSource)
	const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentSource)

	const shaderProgram = gl.createProgram()
	gl.attachShader(shaderProgram, vertexShader)
	gl.attachShader(shaderProgram, fragmentShader)
	gl.linkProgram(shaderProgram)

	if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
		console.error('Unable to initialize the shader program:', gl.getProgramInfoLog(shaderProgram))
		return null
	}

	return shaderProgram;
}

export const vertexShaderSource = `
	// 一个属性变量，将会从缓冲中获取数据
	// attribute vec4 a_position;
	attribute vec2 a_position;
 
  uniform vec2 u_resolution;
 
  void main() {
    // 从像素坐标转换到 0.0 到 1.0
    vec2 zeroToOne = a_position / u_resolution;
 
    // 再把 0->1 转换 0->2
    vec2 zeroToTwo = zeroToOne * 2.0;
 
    // 把 0->2 转换到 -1->+1 (裁剪空间)
    vec2 clipSpace = zeroToTwo - 1.0;
		
		// 翻转y轴
    gl_Position = vec4((clipSpace * vec2(1, -1)), 0, 1);
  }
`

export const fragmentShaderSource = `
 // 片断着色器没有默认精度，所以我们需要设置一个精度
// mediump是一个不错的默认值，代表“medium precision”（中等精度）
precision mediump float;

void main () {
	// gl_FragColor 是一个片段着色器主要设置的变量
	gl_FragColor = vec4(0.3, 0.2, 0.5, 1); // 返回 y u v alpha
}
`

export function createApp(canvas) {

	const mount = (target) => {
		const app = document.querySelector(target)
		app.appendChild(canvas);
		const gl = getGL(canvas);
		// look up where the vertex data needs to go.
		const program = createProgram(gl, vertexShaderSource, fragmentShaderSource);
		const positionAttributeLocation = gl.getAttribLocation(program, 'a_position') // 0

		const positionBuffer = gl.createBuffer();

		gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);


		const positions = [
			500, 200,
			100, 200,
			100, 500,
			100, 500,
			500, 200,
			500, 500,
		]

		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
		gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)

		// 清空画布
		gl.clearColor(0, 0, 0, 0,)
		gl.clear(gl.COLOR_BUFFER_BIT)

		gl.useProgram(program);// 告诉它用我们之前写好的着色程序（一个着色器对）
		// 设置全局变量， 分辨率
		const resolutionUniformLocation = gl.getUniformLocation(program, 'u_resolution')

		gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height)
		gl.enableVertexAttribArray(positionAttributeLocation) // 启用对应属性

		// 将绑定点绑定到缓冲数据（positionBuffer）
		gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)

		const size = 2 // 每次迭代运行提取两个单位数据
		const type = gl.FLOAT // 每个单位的数据都是32位的浮点型
		const normalize = false // 不需要归一化数据
		const stride = 0 // 0 = 移动单位数量 * 每个单位占用内存（sizeof(type)）

		const offest = 0;

		gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offest)

		const primitiveType = gl.TRIANGLES;
		const offset = 0;
		const count = 6;

		gl.drawArrays(primitiveType, offset, count)

	}

	return {
		mount
	}

}





// function main() {
// 	// Get A WebGL context
// 	var canvas = createCanvas({width: 1920, height: 1080});
// 	document.body.appendChild(canvas)
// 	var gl = canvas.getContext("webgl");
// 	if (!gl) {
// 		return;
// 	}

// 	// Get the strings for our GLSL shaders
// 	// var vertexShaderSource = document.querySelector("#vertex-shader-2d").text;
// 	// var fragmentShaderSource = document.querySelector("#fragment-shader-2d").text;

// 	// create GLSL shaders, upload the GLSL source, compile the shaders
// 	var vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
// 	var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

// 	// Link the two shaders into a program
// 	var program = createProgram(gl, vertexShader, fragmentShader);

// 	// look up where the vertex data needs to go.
// 	var positionAttributeLocation = gl.getAttribLocation(program, "a_position");

// 	// Create a buffer and put three 2d clip space points in it
// 	var positionBuffer = gl.createBuffer();

// 	// Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = positionBuffer)
// 	gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

// 	var positions = [
// 		0, 0,
// 		0, 0.5,
// 		0.7, 0,
// 	];
// 	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

// 	// code above this line is initialization code.
// 	// code below this line is rendering code.

// 	// webglUtils.resizeCanvasToDisplaySize(gl.canvas);

// 	// Tell WebGL how to convert from clip space to pixels
// 	gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

// 	// Clear the canvas
// 	gl.clearColor(0, 0, 0, 0);
// 	gl.clear(gl.COLOR_BUFFER_BIT);

// 	// Tell it to use our program (pair of shaders)
// 	gl.useProgram(program);

// 	// Turn on the attribute
// 	gl.enableVertexAttribArray(positionAttributeLocation);

// 	// Bind the position buffer.
// 	gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

// 	// Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
// 	var size = 2;          // 2 components per iteration
// 	var type = gl.FLOAT;   // the data is 32bit floats
// 	var normalize = false; // don't normalize the data
// 	var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
// 	var offset = 0;        // start at the beginning of the buffer
// 	gl.vertexAttribPointer(
// 		positionAttributeLocation, size, type, normalize, stride, offset);

// 	// draw
// 	var primitiveType = gl.TRIANGLES;
// 	var offset = 0;
// 	var count = 3;
// 	gl.drawArrays(primitiveType, offset, count);
// }

// main();

