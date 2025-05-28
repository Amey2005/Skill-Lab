document.getElementById('loveForm').addEventListener('submit',function(e) {
    e.preventDefault();
    const yourName=document.getElementById('yourName').value.trim();
    const crushName=document.getElementById('crushName').value.trim();
    const result =document.getElementById('result');
    if(!yourName || !crushName){
        alert("plz fill the box eith name");
        return;
    }   
    const lovePercent =Math.floor(Math.random()*100);
    let message = '';
    if(lovePercent>=90){
        message='Match made in heaven!';
    } else if(lovePercent>=75){
        message="There is something working,plz keep on trying!";
    } else{
        message="you got saved,enjoy your life";
    }
    result.classList.remove('d-none');
    result.innerHTML=`${yourName} and ${crushName}=${lovePercent}%-${message}`;

});