
import * as scripts from '/JS/scripts.js';
import * as uploadBox from '/JS/uploadBox.js';

async function pdfToPng(pdfFile) {
    // Load the PDF file using https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.min.js
    const pdfData = new Uint8Array(await pdfFile.arrayBuffer());
    const pdf = await pdfjsLib.getDocument(pdfData).promise;

    // Render the first page of the PDF file as a PNG image
    const page = await pdf.getPage(1);
    const viewport = page.getViewport({ scale: 5.0 });
    const canvas = document.createElement('canvas');
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const context = canvas.getContext('2d');
    await page.render({ canvasContext: context, viewport: viewport }).promise;

    // Convert the canvas to a Blob object
    const pngBlob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));

    // Create a download link for the PNG file
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(pngBlob);
    downloadLink.download = pdfFile.name.replace(/\.pdf$/i, '.png');

    // Trigger a click event on the download link to download the PNG file
    downloadLink.dispatchEvent(new MouseEvent('click'));
}



const pdfFileInput = document.getElementById('fileInput');
const frmConvert = document.querySelector('.frm-convert');
frmConvert.addEventListener('submit', async (event) => {
    event.preventDefault();
    const pdfFile = fileInput.files[0];
    try {
        await pdfToPng(pdfFile);
    } catch (error) {
        console.error('PDF to PNG conversion error:', error);
    }
});


import * as pdfWorkers from 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.min.js';