const txtmin = document.getElementById("initial-minute");
const txtsec = document.getElementById("initial-second");
const btnStart = document.getElementById("btn-start");

btnStart.addEventListener('click',iniciarContador);


function iniciarContador(){
    let min = parseInt(txtmin.value);
    let sec = parseInt(txtsec.value);
    
    if(min>=0 && sec>=0){
        let separteDiv=document.getElementById("separated");
        let minuteDiv=document.getElementById("minute");
        let secondDiv=document.getElementById("second");
        separteDiv.style.display="block";
    
    
        minuteDiv.innerHTML=min;
        secondDiv.innerHTML=sec;
    }    
    else{
        alert("Por favor ingrese valores correctos")
    }
}


