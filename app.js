// Play drum by keyboard press
window.addEventListener('keydown' , playDrum);
function playDrum(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
};

// Remove .playing class after transition action over
const keys = document.querySelectorAll('.key');
keys.forEach( key => key.addEventListener('transitionend' , removePlayingClass ) );
function removePlayingClass(e)
{
    //if( e.propertyName != 'transform' ) return;
    this.classList.remove('playing');
}


// Play music by mouse click
keys.forEach( key => key.addEventListener('click' , playByMouse ) );
function playByMouse(e)
{
    const keyCode = this.getAttribute('data-key');
	const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
	audio.currentTime = 0;
	audio.play();
	const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    key.classList.add('playing');
}
