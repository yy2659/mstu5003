// Takes URL String -> returns Audio object
// Think Alpaca, object is just another "thing"
function makeAudio(url) {
	var audio = new Audio(url);
	return audio;
}
// Takes Audio object
function playAudio(audioObject) {
	audioObject.play();
}
// Takes Audio object
function stopAudio(audioObject) {
	audioObject.pause();
	audioObject.currentTime = 0;
}
