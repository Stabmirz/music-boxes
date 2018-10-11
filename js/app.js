//select elements and creat variables
var keys = document.querySelectorAll(".key")  // Grab all Elements and put that in a Node-list
var notes = {                 //in the notes object we use the id's of the HTML elements to identify what audio element to play
    cKey: document.querySelector("#cAudio"),   //cKey is Element
    dKey: document.querySelector("#dAudio"),
    eKey: document.querySelector("#eAudio"),
    fKey: document.querySelector("#fAudio"),
    gKey: document.querySelector("#gAudio"),
    aKey: document.querySelector("#aAudio"),
    bKey: document.querySelector("#bAudio")
}




//define functions
function playNote(key) {    // 'key' holds the elements Id
    // console.log(key)
    notes[key].currentTime = 0
    notes[key].play()
}




//call functions add Event Listners
keys.forEach(function (key) {         //function(key) .."key" represents each element in my nodelist(array)
    key.addEventListener("click", function () {  //'click' represent the "event"
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