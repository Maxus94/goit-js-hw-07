const input = document.getElementById('name-input');
const span = document.getElementById('name-output');
input.addEventListener("input", inputHandler);
function inputHandler(){
    if (input.value.trim() ===''){
        span.innerText="Anonymous"    
    }else{
        span.innerText=input.value.trim()
    }    
}