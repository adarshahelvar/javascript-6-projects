let btn  = document.getElementById('btnn');
let headding = document.getElementById('headding');

const clickHandler = ()=>{
    headding.innerHTML = 'You clicked';
    btn.style.visibility = 'hidden';
}
btn.addEventListener('click', clickHandler)