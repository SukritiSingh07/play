console.log("Welcome to Spotify");
let songindex=0;
let audioElement= new Audio('songs/1.mp3');
let masterplay= document.getElementById('masterplay');
let myprogressbar= document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let songitem=Array.from(document.getElementsByClassName('songitem'));
let mastersongname=document.getElementById('msongname');

let songs=[
    {songName: "Stand by you", filePath:"songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Who says", filePath:"songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Mera Safar", filePath:"songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Dancing Monkey", filePath:"songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Calm Down", filePath:"songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Bones", filePath:"songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Rabba Meher Kari", filePath:"songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Aaloo Chatt", filePath:"songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Dance the night", filePath:"songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Tu Hai", filePath:"songs/10.mp3", coverPath: "covers/10.jpg"},
];

songitem.forEach((element,i) => {
    // console.log(element,i);
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songname')[0].innerText=songs[i].songName;
});

// audioElement.play();
//handle play pause
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;

    }
});
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
     console.log('timeupdate');
     //seek bar update
     progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
     myprogressbar.value=progress;
    
});

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;

})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        gif.style.opacity=1;
    });
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songindex+1}.mp3`;
        audioElement.currentTime=0;
        mastersongname.innerText=songs[songindex].songName;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songindex>9){
        songindex=0;
    }
    else{
        songindex=songindex-1;
    }
    audioElement.src= `songs/${songindex+1}.mp3`;
    audioElement.currentTime=0;
    mastersongname.innerText=songs[songindex].songName;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songindex>9){
        songindex=0;
    }
    else{
        songindex=songindex+1;
    }
    audioElement.src= `songs/${songindex+1}.mp3`;
    audioElement.currentTime=0;
    mastersongname.innerText=songs[songindex].songName;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})