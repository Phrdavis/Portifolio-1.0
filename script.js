var count = 0;

function mouse_ball(event){
    var x = event.clientX;
    var y = event.clientY;
    var teste = document.getElementById("teste")
    var teste1 = document.getElementById("teste1")
    var teste2 = document.getElementById("teste2")
    var teste3 = document.getElementById("teste3")
    teste.style.top = `${y}px`;
    teste.style.left = `${x}px`;
    
    teste1.style.top = `${y}px`;
    teste1.style.left = `${x}px`;
    
    teste2.style.top = `${y}px`;
    teste2.style.left = `${x}px`;
    
    teste3.style.top = `${y}px`;
    teste3.style.left = `${x}px`;

}

function color_ball(event){
    if(count == 0){
        document.getElementById("teste").style.backgroundColor = "#c59d19"
        document.getElementById("teste1").style.backgroundColor = "#c59d19"
        document.getElementById("teste2").style.backgroundColor = "#c59d19"
        document.getElementById("teste3").style.backgroundColor = "#c59d19"
        count = 1
    }else{
        document.getElementById("teste").style.backgroundColor = "#B6BFA3"
        document.getElementById("teste1").style.backgroundColor = "#B6BFA3"
        document.getElementById("teste2").style.backgroundColor = "#B6BFA3"
        document.getElementById("teste3").style.backgroundColor = "#B6BFA3"
        count = 0
    }
}