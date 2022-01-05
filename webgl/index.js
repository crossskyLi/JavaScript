import { createApp, createCanvas, vertexShaderSource, fragmentShaderSource } from './app'

const App = createApp().mount(
	{
		app: '#app',
		canvas: createCanvas({ width: 1920, height: 1080, }),
		vertexShaderSource,
		fragmentShaderSource,
	}
);

