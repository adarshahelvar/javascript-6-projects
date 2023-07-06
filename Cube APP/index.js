const btn = document.getElementById('btnn');
const btnHandler = ()=>{
    const nameValue = document.getElementById('name').value;
    const value = document.getElementById('cubeValue');
    cube = (nameValue*nameValue*nameValue)
    value.innerHTML = cube;
    document.getElementById('name').value =''
}
btn.addEventListener('click',btnHandler);
