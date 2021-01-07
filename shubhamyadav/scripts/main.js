let myImage = document.querySelector('img');

myImage.onmousewheel = function(){
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/g9.png'){
        myImage.setAttribute('src', 'images/pcphone.jpg');
    }
    else{
        myImage.setAttribute('src','images/g9.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUsername (){
    let myName = prompt('Please enter your name:');
    localStorage.setItem('name', myName);
    if (!myName){
        setUsername();
    }
    
else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, '+ ${myName};
}
myButton.onclick = function(){
    setUsername();
}