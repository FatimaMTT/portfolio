//HOME PAGE
// Show Demo Reel Breakdown Function
function ShowDemoReelFunction() {
	"use strict";
    var x = document.getElementById("animation-reel-breakdown");
    
    if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//ABOUT PAGE


// WORK PAGE
var AnimationDivs = document.getElementsByClassName("animation");
var MotionGraphicsDivs = document.getElementsByClassName("motion-graphics");
var LiveActionDivs = document.getElementsByClassName("live-action");
var AnimaticDivs = document.getElementsByClassName("animatics");

// Show all videos:
function AllVideosFunction() {
	for (var a = 0; a < AnimationDivs.length; a++){
        AnimationDivs[a].style.display = "block";
	}
	
	for (var b = 0; b < MotionGraphicsDivs.length; b++){
        MotionGraphicsDivs[b].style.display = "block";
	}
	
	for (var c = 0; c < LiveActionDivs.length; c++){
        LiveActionDivs[c].style.display = "block";
	}
	
	for (var d = 0; d < AnimaticDivs.length; d++){
        AnimaticDivs[d].style.display = "block";
	}
	
	document.getElementById("all-button").style.backgroundColor = "#FFF";
	document.getElementById("animation-button").style.backgroundColor = "transparent";
	document.getElementById("motion-graphics-button").style.backgroundColor = "transparent";
	document.getElementById("live-action-button").style.backgroundColor = "transparent";
	document.getElementById("animatics-button").style.backgroundColor = "transparent";
}

// Show only animation videos:
function AnimationVideosFunction() {  
	for (var e = 0; e < AnimationDivs.length; e++){
        AnimationDivs[e].style.display = "block";
	}
	
    for (var f = 0; f < MotionGraphicsDivs.length; f++){
        MotionGraphicsDivs[f].style.display = "none";
	}
	
	for (var g = 0; g < LiveActionDivs.length; g++){
        LiveActionDivs[g].style.display = "none";
	}
	
	for (var h = 0; h < AnimaticDivs.length; h++){
        AnimaticDivs[h].style.display = "none";
	}
	
	document.getElementById("all-button").style.backgroundColor = "transparent";
	document.getElementById("animation-button").style.backgroundColor = "#FFF";
	document.getElementById("motion-graphics-button").style.backgroundColor = "transparent";
	document.getElementById("live-action-button").style.backgroundColor = "transparent";
	document.getElementById("animatics-button").style.backgroundColor = "transparent";
}
 
// Show only motion graphics videos:
function MotionGraphicsVideosFunction() {
	for(var i = 0; i < MotionGraphicsDivs.length; i++){
        MotionGraphicsDivs[i].style.display = "block";
	}
	
    for (var j = 0; j < AnimationDivs.length; j++){
        AnimationDivs[j].style.display = "none";
	}
	
	for (var k = 0; k < LiveActionDivs.length; k++){
        LiveActionDivs[k].style.display = "none";
	}
	
	for (var l = 0; l < AnimaticDivs.length; l++){
        AnimaticDivs[l].style.display = "none";
	}
	
	//highlight motion graphics videos button
	document.getElementById("all-button").style.backgroundColor = "transparent";
	document.getElementById("animation-button").style.backgroundColor = "transparent";
	document.getElementById("motion-graphics-button").style.backgroundColor = "#FFF";
	document.getElementById("live-action-button").style.backgroundColor = "transparent";
	document.getElementById("animatics-button").style.backgroundColor = "transparent";
}

// Show only live action videos:
function LiveActionVideosFunction() {
	for (var m = 0; m < LiveActionDivs.length; m++){
        LiveActionDivs[m].style.display = "block";
	}
	
    for (var n = 0; n < AnimationDivs.length; n++){
        AnimationDivs[n].style.display = "none";
	}
	
	for (var p = 0; p < MotionGraphicsDivs.length; p++){
        MotionGraphicsDivs[p].style.display = "none";
	}
	
	for (var q = 0; q < AnimaticDivs.length; q++){
        AnimaticDivs[q].style.display = "none";
	}
	
	//highlight live action videos button
	document.getElementById("all-button").style.backgroundColor = "transparent";
	document.getElementById("animation-button").style.backgroundColor = "transparent";
	document.getElementById("motion-graphics-button").style.backgroundColor = "transparent";
	document.getElementById("live-action-button").style.backgroundColor = "#FFF";
	document.getElementById("animatics-button").style.backgroundColor = "transparent";
}

//Show Only animatics
function AnimaticsFunction() {
	for (var r = 0; r < AnimaticDivs.length; r++){
        AnimaticDivs[r].style.display = "block";
	}
	
	for (var s = 0; s < AnimationDivs.length; s++){
        AnimationDivs[s].style.display = "none";
	}
	
	for (var t = 0; t < MotionGraphicsDivs.length; t++){
        MotionGraphicsDivs[t].style.display = "none";
	}
	
	for (var u = 0; u < LiveActionDivs.length; u++){
        LiveActionDivs[u].style.display = "none";
	}
	
	//highlight animatics button
	document.getElementById("all-button").style.backgroundColor = "transparent";
	document.getElementById("animation-button").style.backgroundColor = "transparent";
	document.getElementById("motion-graphics-button").style.backgroundColor = "transparent";
	document.getElementById("live-action-button").style.backgroundColor = "transparent";
	document.getElementById("animatics-button").style.backgroundColor = "#FFF";
}

//Open modal with video when clicking each image

//Dog Project Animatic
// Get the modal
var modal11 = document.getElementById('modal_11');
// Get the video div and caption and insert it inside the modal
var DogProjectAnimaticImg = document.getElementById('Dog-Project-Animatic-Img');
DogProjectAnimaticImg.onclick = function(){
  modal11.style.display = "block";
} 
// Get the <span> element that closes the modal
var span11 = document.getElementById("close_11");
// When the user clicks on <span> (x), close the modal
span11.onclick = function() { 
  modal11.style.display = "none";
}

//Dog Walk Cycle
var modal10 = document.getElementById('modal_10');
var DogWalkCycleImg = document.getElementById('Dog-Walk-Cycle-Img');
DogWalkCycleImg.onclick = function(){
  modal10.style.display = "block";
} 
var span10 = document.getElementById("close_10");
span10.onclick = function() { 
  modal10.style.display = "none";
}

//Livestock Farming
var modal09 = document.getElementById('modal_09');
var LivestockFarmingImg = document.getElementById('Livestock-Farming-Img');
LivestockFarmingImg.onclick = function(){
  modal09.style.display = "block";
} 
var span09= document.getElementById("close_09");
span09.onclick = function() { 
  modal09.style.display = "none";
}

//Unique
var modal08 = document.getElementById('modal_08');
var UniqueImg = document.getElementById('Unique-Img');
UniqueImg.onclick = function(){
  modal08.style.display = "block";
} 
var span08 = document.getElementById("close_08");
span08.onclick = function() { 
  modal08.style.display = "none";
}

//Computer Animation Final
var modal07 = document.getElementById('modal_07');
var ComputerAnimationFinalImg = document.getElementById('Computer-Animation-Final-Img');
ComputerAnimationFinalImg.onclick = function(){
  modal07.style.display = "block";
} 
var span07 = document.getElementById("close_07");
span07.onclick = function() { 
  modal07.style.display = "none";
}

//Haunted Room
var modal06 = document.getElementById('modal_06');
var HauntedRoomImg = document.getElementById('Haunted-Room-Img');
HauntedRoomImg.onclick = function(){
  modal06.style.display = "block";
} 
var span06 = document.getElementById("close_06");
span06.onclick = function() { 
  modal06.style.display = "none";
}

//Pearl Divers
var modal05 = document.getElementById('modal_05');
var PearlDiversImg = document.getElementById('Pearl-Divers-Img');
PearlDiversImg.onclick = function(){
  modal05.style.display = "block";
} 
var span05 = document.getElementById("close_05");
span05.onclick = function() { 
  modal05.style.display = "none";
}

//2D Walk Cycle
var modal04 = document.getElementById('modal_04');
var DWalkCycleImg = document.getElementById('2D-Walk-Cycle-Img');
DWalkCycleImg.onclick = function(){
  modal04.style.display = "block";
} 
var span04 = document.getElementById("close_04");
span04.onclick = function() { 
  modal04.style.display = "none";
}

//Making People Smile
var modal03 = document.getElementById('modal_03');
var MakingPeopleSmileImg = document.getElementById('Making-People-Smile-Img');
MakingPeopleSmileImg.onclick = function(){
  modal03.style.display = "block";
} 
var span03 = document.getElementById("close_03");
span03.onclick = function() { 
  modal03.style.display = "none";
}

//Long Shot
var modal02 = document.getElementById('modal_02');
var LongShotImg = document.getElementById('Long-Shot-Img');
LongShotImg.onclick = function(){
  modal02.style.display = "block";
} 
var span02 = document.getElementById("close_02");
span02.onclick = function() { 
  modal02.style.display = "none";
} 

//Stop It
var modal01 = document.getElementById('modal_01');
var StopItImg = document.getElementById('Stop-It-Img');
StopItImg.onclick = function(){
  modal01.style.display = "block";
} 
var span01 = document.getElementById("close_01");
span01.onclick = function() { 
  modal01.style.display = "none";
} 

//El Movimiento del Sol
var modal00 = document.getElementById('modal_00');
var MovimientoDelSolImg = document.getElementById('Movimiento-Del-Sol-Img');
MovimientoDelSolImg.onclick = function(){
  modal00.style.display = "block";
} 
var span00 = document.getElementById("close_00");
span00.onclick = function() { 
  modal00.style.display = "none";
} 

//Back To Top Button
	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function () {scrollFunction()};

	function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			document.getElementById("top-button").style.display = "block";
		} else {
			document.getElementById("top-button").style.display = "none";
		}
	}

	// When the user clicks on the button, scroll to the top of the document
	function topFunction() {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}