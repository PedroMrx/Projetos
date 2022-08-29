'user strict' 

const sounds = {
    '9': 'boom.wav',
    '8': 'clap.wav',
    '7': 'hihat.wav',
    '6': 'kick.wav',
    '5': 'openhat.wav',
    '4': 'ride.wav',
    '3': 'snare.wav',
    '2': 'tink.wav',
    '1': 'tom.wav'
}

const createDiv = (text) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = text;
    div.id = text;
    document.getElementById('container').appendChild(div);
}


const show = (sounds) => {
    Object.keys(sounds).forEach(createDiv);
}
show(sounds);

const addEffect = (letter) => document.getElementById(letter).classList.add('active')

const removeEffect = (letter) => {
    const div = document.getElementById(letter);
    const removeActive = () => div.classList.remove('active');
    div.addEventListener('transitionend', removeActive);
}

const playDiv = (event) => {
   let letter = '';
    if(event.type === 'click') {            
    const letra = event.target.id;
   }else{
        letter = event.key.toUpperCase();
   }
   
   const isLetter = sounds.hasOwnProperty(letter);
   if(isLetter){
    addEffect(letter);
    playSound(letter);
    removeEffect(letter)
   }
   
}

const playSound = (letter) => {
    const audio =  new Audio(`./sound/${sounds[letter]}`);
    audio.play();
}

document.getElementById('container').addEventListener('click', playDiv );

window.addEventListener('keydown', playDiv);


































/*
<div class="key">b</div>
<div class="key">S</div>
<div class="key">D</div>*/