//select elements and creat variables
var keys = document.querySelectorAll(".key")
var notes = {
    cKey: document.querySelector("#cAudio"),
    dKey: document.querySelector("#dAudio"),
    eKey: document.querySelector("#eAudio"),
    fKey: document.querySelector("#fAudio"),
    gKey: document.querySelector("#gAudio"),
    aKey: document.querySelector("#aAudio"),
    bKey: document.querySelector("#bAudio")
}




//define functions
function playNote(key) {
    // console.log(key)
    notes[key].currentTime = 0
    notes[key].play()
}




//call functions add Event Listners
keys.forEach(function (key) {
    key.addEventListener("click", function () {
        playNote(key.id)
    })
})
document.addEventListener('keydown', function(event){
    if(event.key == "c"){
        playNote("cKey")
    }
    if(event.key == "d"){
        playNote("dKey")
    }
    if(event.key == "e"){
        playNote("eKey")
    }
    if(event.key == "f"){
        playNote("fKey")
    }
    if(event.key == "g"){
        playNote("gKey")
    }
    if(event.key == "a"){
        playNote("aKey")
    }
    if(event.key == "b"){
        playNote("bKey")
    }

})