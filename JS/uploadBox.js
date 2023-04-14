document.getElementById("dropContainer").ondragover = document.getElementById("dropContainer").ondragenter = function(evt) {
	evt.preventDefault();
};

document.getElementById("dropContainer").ondrop = function(evt) {
  document.getElementById("txt-files").files = evt.dataTransfer.files;
  evt.preventDefault();

  const dT = new DataTransfer();
  dT.items.add(evt.dataTransfer.files[0]);
  //dT.items.add(evt.dataTransfer.files[3]);
  document.getElementById("txt-files").files = dT.files;

  evt.preventDefault();  
	var file = $('#txt-files')[0].files[0].name;
	$('#uploadText').text(file);
};



$('#txt-files').change(function() {
	var i = $(this).prev('label').clone();
	var file = $('#txt-files')[0].files[0].name;
	$(this).prev('label').text(file);
	 console.log(file);
});