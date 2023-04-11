var count = 0;

function mouse_ball(event){
    var x = event.clientX;
    var y = event.clientY;
    var ball = document.getElementById("ball")
    var ball1 = document.getElementById("ball1")
    var ball2 = document.getElementById("ball2")
    var ball3 = document.getElementById("ball3")
    ball.style.top = `${y}px`;
    ball.style.left = `${x}px`;
    
    ball1.style.top = `${y}px`;
    ball1.style.left = `${x}px`;
    
    ball2.style.top = `${y}px`;
    ball2.style.left = `${x}px`;
    
    ball3.style.top = `${y}px`;
    ball3.style.left = `${x}px`;


}

function color_ball(event){
    if(count == 0){
        document.getElementById("ball").style.backgroundColor = "#c59d19"
        document.getElementById("ball1").style.backgroundColor = "#c59d19"
        document.getElementById("ball2").style.backgroundColor = "#c59d19"
        document.getElementById("ball3").style.backgroundColor = "#c59d19"
        count = 1
    }else{
        document.getElementById("ball").style.backgroundColor = "#B6BFA3"
        document.getElementById("ball1").style.backgroundColor = "#B6BFA3"
        document.getElementById("ball2").style.backgroundColor = "#B6BFA3"
        document.getElementById("ball3").style.backgroundColor = "#B6BFA3"
        count = 0
    }
}