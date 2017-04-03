var heading = document.querySelector('h1');
var concat = document.querySelector('h2');
var show = document.querySelector('h3');
var str1 = 'hello';
var str2 = ' and welcome.';

// conditional statements.
/*
var iceCream = 'vanila';
if (iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');
} else {
  alert('Awwww, but chocolate is my favorite...');
}
*/


heading.textContent = 'Changed by ';
concat.textContent = 'Javascript.';
// show.textContent = str1 + str2;

show.textContent = stringConcat(str1, str2);

function stringConcat(str1, str2){
  var result = str1+str2;
 // to write on console.
    console.log(result);
  return result;
}

/*
   // To set an alert on clicking over html page....
var click = document.querySelector('html');
click.onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/

var image = document.querySelector('img');
image.onclick = function(){
  var mySrc = image.getAttribute('src');
    if(mySrc === 'images/download.jpg') {
      image.setAttribute ('src','images/download2.jpg');
    } else {
      image.setAttribute ('src','images/download.jpg');
    }
}

// To set any name on cliclking the button.

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h4');
function setUserName()
{
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'My name is, ' + myName;
}
      if(!localStorage.getItem('name')) {
        setUserName();
      } else {
        var storedName = localStorage.getItem('name');
        myHeading.textContent = 'My name is , ' + storedName;
      }
      myButton.onclick = function() {
        setUserName();
      }
