console.log('This site is developed by Coded Dreams http://codeddreams.epizy.com');
console.log('This site is developed by Coded Dreams http://codeddreams.epizy.com');
console.log('This site is developed by Coded Dreams http://codeddreams.epizy.com');
console.log('This site is developed by Coded Dreams http://codeddreams.epizy.com');
console.log('This site is developed by Coded Dreams http://codeddreams.epizy.com');

function one(){
    document.getElementById('nfb').style.filter = 'drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.9)';
}

function two(){
    document.getElementById('nfb').style.filter = 'none';
}

function three(){
    document.getElementById('song1').style.filter = 'drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.9)'
}

function four(){
    document.getElementById('song1').style.filter = 'none';
}

function five(){
    document.getElementById('song2').style.filter = 'drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.9)';
}

function six(){
    document.getElementById('song2').style.filter = 'none';
}

function seven(){
    document.getElementById('song3').style.filter = 'drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.9)';
}

function eight(){
    document.getElementById('song3').style.filter = 'none';
}


document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);

function youtube(){
    window.open('https://www.youtube.com/channel/UC8maW4itAzqQ9-ZgNCVfhSw', '_blank')
}
function spotify(){
    window.open('https://open.spotify.com/artist/7iEUKVcv42PUcIS696yadB', '_blank')
}
function instagram(){
    window.open('https://instagram.com/nazzmusic', '_blank')
}
function facebook(){
    window.open('https://www.facebook.com/profile.php?id=100011063224584', '_blank')
}
function twitter(){
    window.open('https://twitter.com/Nihar0051', '_blank')
}
function phone(){
    window.open('#')
}
