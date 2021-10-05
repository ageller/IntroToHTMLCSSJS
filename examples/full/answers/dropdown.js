//this is a simple javascript function to toggle the display on/off for the dropdown menu
function toggleDropdown(id){
	//grab the correct dropdown content element based on it's ID
	var drop = document.getElementById(id);

	//console.log is your best friend for debugging!
	console.log(id, drop, drop.style.display);

	//toggle the display style
	if (drop.style.display == "block" ){
		drop.style.display = "none";
	} else {
		drop.style.display = "block";
	}

}

//it might be cleaner to create a separate file for this (or to rename this file to something that suits both of these), but for this tutorial, I will simply put the function here.

function shrinkImage(id){
	var img = document.getElementById(id);
	
	console.log(id, img.style.width);

	img.style.width = "50%";

}
function resetImage(id){
	var img = document.getElementById(id);
	
	console.log(id, img.style.width);

	img.style.width = "95%";

}