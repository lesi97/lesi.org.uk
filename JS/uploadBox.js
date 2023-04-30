document.getElementById("dropContainer").ondragover = document.getElementById("dropContainer").ondragenter = function (evt) {
	evt.preventDefault();
};

document.getElementById("dropContainer").ondrop = function (evt) {
	document.getElementById("fileInput").files = evt.dataTransfer.files;
	evt.preventDefault();

	const dT = new DataTransfer();
	dT.items.add(evt.dataTransfer.files[0]);
	//dT.items.add(evt.dataTransfer.files[3]);
	document.getElementById("fileInput").files = dT.files;

	evt.preventDefault();
	var file = $('#fileInput')[0].files[0].name;
	$('#uploadText').text(file);
};



$('#fileInput').change(function () {
	var i = $(this).prev('label').clone();
	var file = $('#fileInput')[0].files[0].name;
	$(this).prev('label').text(file);
	console.log(file);
});