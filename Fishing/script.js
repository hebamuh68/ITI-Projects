(function(){
    "use strict";

//================================ MOUSE MOVE ================================
    document.onmousemove = animateCircle
    
    function animateCircle (event)
    {
        var circle = document.createElement("div");
        circle.setAttribute("class",'circle');
        document.body.appendChild(circle);

        circle.style.left = event.clientX + 'px';
        circle.style.top = event.clientY + 'px';

        circle.style.transition = "all 0.5s linear 0s";

        circle.style.left = circle.offsetLeft - 20 + 'px';
        circle.style.top = circle.offsetTop - 20 + 'px';

        circle.style.width = '50px'
        circle.style.height = '50px'
        circle.style.borderWidth = '1px'
        circle.style.borderRadius = "30px"
        circle.style.opacity = 0;
    }

//================================ FISH MOVE ================================

    let x = 0;
    function moveFishL(y, fish){

        x += y;
        if (x >= 1000){
            x = 0;
        }
        let left = x + "px";
        document.getElementById(fish).style.left=left;
    }

    let z = 0;
    function moveFishR(y, fish){

        z -= y;
        if (z < -700){
            z = 0;
        }
        let right = z + "px";
        document.getElementById(fish).style.left=right;
    }
    setInterval(moveFishL,50, 10,"f1");
    setInterval(moveFishL,50, 6,"f2");
    setInterval(moveFishL,100, 7,"f3");
    setInterval(moveFishL,100, 8,"f4");
    setInterval(moveFishR,100, 8,"f5");
    setInterval(moveFishR,100, 8,"f6");
})();