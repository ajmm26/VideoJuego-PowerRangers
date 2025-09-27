 const  contenedor = document.getElementById('div-game');
 const audio = document.createElement('audio');


export function playMusic(url='', volume=0.5) {
    audio.src= url; // Default music file
    audio.loop = true;
    audio.volume = volume;
    contenedor.appendChild(audio);
    audio.play().catch(error => {
        console.error('Error playing audio:', error);
    });

}

export function pauseMusic(){

  audio.pause();

}

export function stateMusic(){
  return audio.paused;
}