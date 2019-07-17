function changeImage(){
	document.getElementById("display").src = "media/2.png";
	
}
function showHide(){
	var x = document.getElementById("addImage");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}
