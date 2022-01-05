const PDFImage = require("pdf-image").PDFImage;


const fs = require('fs');
const path = require('path');

function getFile(root) {
	fs.readdir(root, function (err, files) {

		files.forEach((file) => {
			const url = path.join(root, file)
			fs.stat(url, function (err, data) {
				if (data.isFile() && file.indexOf('pdf') > -1) {
					const pdfImage = new PDFImage(url, {
						convertOptions: {
							"-resize": "1920x1080",
							"-quality": "100"
						}
					});
					console.log(pdfImage)
					pdfImage.convertFile().then(function (imagePaths) {
						//  [ /tmp/slide-0.png, /tmp/slide-1.png ]
						console.log(imagePaths)
					});
				}
			})
		})
	})
}

getFile(__dirname)

// var pdfImage = new PDFImage("./slide.pdf");
// pdfImage.convertFile().then(function (imagePaths) {
// 	// [ /tmp/slide-0.png, /tmp/slide-1.png ]

// });