console.log("Welcome To Musicfy");

// Initialize the Variables
let SongIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById("masterplay");
let MyProgressBar = document.getElementById("MyProgressBar");
let gif= document.getElementById("gif");
let MasterSongName= document.getElementById("MasterSongName");
let SongItems= Array.from(document.getElementsByClassName('SongItem'));

let songs = [
    {SongName: "Bandeya Re Bandeya", filepath:"songs/1.mp3" ,coverpath:"covers/cover.jpeg" },
    {SongName: "Raabta", filepath:"songs/2.mp3" ,coverpath:"covers/2.jpeg"},
    {SongName: "Saware", filepath:"songs/3.mp3" ,coverpath:"covers/3.jpeg" },
    {SongName: "Closure", filepath:"songs/4.mp3" ,coverpath:"covers/3.jpeg" },
    {SongName: "Tareefan", filepath:"songs/5.mp3" ,coverpath:"covers/3.jpeg" },
    {SongName: "Tu Hai", filepath:"songs/6.mp3" ,coverpath:"covers/3.jpeg" }
]
SongItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("SongName")[0].innerText = songs[i].SongName;
});

//audioElement.play();

//Handle Play/Pause Click
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play() ;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1; 
    }
    else{
        audioElement.pause() ;
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0; 
    }
})


//Listen To Events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate')
    //Update Seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration )* 100 );

    MyProgressBar.value = progress;
})

MyProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime= MyProgressBar.value * audioElement.duration/100;

})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element)=>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })

}

Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        
        makeAllPlays();
        
        SongIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${SongIndex+1}.mp3`;
        MasterSongName.innerText = songs[SongIndex].SongName;
        audioElement.currentTime =0 ;
        audioElement.play();
        masterplay.classList.add('fa-pause-circle');
        masterplay.classList.remove('fa-play-circle');  
    })
    })

document.getElementById('next').addEventListener('click' ,()=>{
    if (SongIndex>=2){
        SongIndex=0;
    }
    else{
        SongIndex += 1;
    }
    audioElement.src = `songs/${SongIndex+1}.mp3`;
    MasterSongName.innerText = songs[SongIndex].SongName;
    audioElement.currentTime =0 ;
    audioElement.play();
    masterplay.classList.add('fa-pause-circle');
    masterplay.classList.remove('fa-play-circle');  
})  

document.getElementById('previous').addEventListener('click' ,()=>{
    if (SongIndex<=0){
        SongIndex = 0;
    }
    else{
        SongIndex -= 1;
    }
    audioElement.src = `songs/${SongIndex+1}.mp3`;
    MasterSongName.innerText = songs[SongIndex].SongName;
    audioElement.currentTime =0 ;
    audioElement.play();
    masterplay.classList.add('fa-pause-circle');
    masterplay.classList.remove('fa-play-circle');  
})    
