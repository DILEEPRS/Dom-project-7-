let inner = document.getElementsByTagName('a');

for (var i = 0; i < inner.length; i++) {


if(inner[i].innerText.includes("2.0"))

{
  
    inner[i].style.display = 'none';
}


}

document.querySelector('.main__form-input').disabled = false;

let btn = document.querySelector('.main__form-btn');
btn.disabled= false;


 btn.addEventListener('click', clickFnctn);

 function clickFnctn() {
     for (var i = 0; i < inner.length; i++){
     inner[i].style.display = 'inline' ;

     console.log(inner[i]);

     }
 }


