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
    window.open('https://youtube.com', '_blank')
}
function spotify(){
    window.open('https://spotify.com', '_blank')
}
function instagram(){
    window.open('https://instagram.com/nazzmusic', '_blank')
}
function facebook(){
    window.open('https://facebook.com', '_blank')
}
function twitter(){
    window.open('https://twitter.com', '_blank')
}
function phone(){
    window.open('https://forms.google.com', '_blank')
}
