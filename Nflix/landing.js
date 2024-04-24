
elemento = document.getElementById('faqButton');
answer = document.querySelector('.faqAns')
isVisible = false;
elemento.addEventListener("click",function(){   
       if (isVisible) {
        answer.style.display='none';
        isVisible = false;
       } else {
        answer.style.display='block';
        isVisible = true;
       }
});
window.onload = function(){
    alert("Website has not been made for mobile systems");
}
