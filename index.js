var count =document.getElementById("count");
    var water=document.getElementById("water");
    var percent=count.innerText;

    var interval;
    interval =setInterval(function(){
        percent++;
        count.innerHTML=percent;
        water.style.transform = " translate(0,"+(100-percent)+"%)"
        console.log(water.style.transform);
        if(count.innerHTML == 100){
            clearInterval(interval);
        }
    },60);

