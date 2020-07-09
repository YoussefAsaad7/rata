var elError = document.getElementById('errors');
var elSpeed = document.getElementById('speed');
var elField = document.getElementById('key-field');
var keys = document.getElementsByClassName('key');
var errorCount = 0;
var text = elField.innerText;
var count = 0;
var firstLetter = text[count];
var oldElement;
var speedx = 0;
var letters = text.split(' ');
var seconds = 0;
function incrementSeconds() {
 seconds++;
// if(count == text.length){
     elSpeed.innerText = Math.floor(letters.length/(seconds/60));
     speedx = Math.floor(letters.length/(seconds/60));
 //}
}
var cancel = setInterval(incrementSeconds, 1000);

confirm('Are You Ready ??');
var i;
for(i = 0; i < keys.length ; i++){
    if(firstLetter == keys[i].innerText.toLowerCase()){
        //put a border
        keys[i].parentElement.parentElement.classList.add('bor');
        oldElement = keys[i];
        break;
    }
}
function iError(){
    errorCount ++;
    elError.innerText = errorCount;
}
function removeBorder(){
    oldElement.parentElement.parentElement.classList.remove('bor');
}
function updateText(){
    var span = '<p style=\"color:white;background-color:#30a6f8;border-radius:5px;display:inline;\">';
    var eSpan = '</ p>';
    var temp = text.substring(0,count+1);
    var temp2 = text.substring(count+1,text.length);
    var temps = '';
    if(temp2.charCodeAt(0) == 32){
        temps = '&nbsp;';
    }
    elField.innerHTML = span + temp + eSpan + '<p style="margin-left:0;display:inline-block;">'+temps + temp2 + '</p>' ; 
 //   alert(span + temp + eSpan +  temp2  );
}
function check(e){

            if(String.fromCharCode(e.keyCode) == firstLetter){
            //   alert('true');
                removeBorder();
                updateText();
                count ++;
                firstLetter = text[count];
                for(var i =0; i < keys.length; i++){
                    if(firstLetter == keys[i].innerText.toLowerCase()){
                        keys[i].parentElement.parentElement.classList.add('bor');
                        oldElement = keys[i];
                        break;
                    }
                }
            }else{
                iError();
            }
    }
var isEnded = setInterval(function(){
    if(text.length == count){
        alert('Your Typing Speed is '+speedx +' WPM.!! \n Reload Page To Try Again.!!');
        cancel = '';
    }
},300);
document.body.addEventListener('keypress',function(e){
    check(e);
},false);