const pdfFileInput = document.getElementById('pdfFileInput');
const frmConvert = document.querySelector('.frm-convert');

frmConvert.addEventListener('submit', async (event) => {
  event.preventDefault(); // prevent the form from submitting

  const pdfFile = pdfFileInput.files[0];
  try {
    await pdfToPng(pdfFile);
  } catch (error) {
    console.error('PDF to PNG conversion error:', error);
  }
});