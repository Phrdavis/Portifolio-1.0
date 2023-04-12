var count = 0;
var theme = 0;


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
    var ball = document.getElementById("ball");
    var ball1 = document.getElementById("ball1");
    var ball2 = document.getElementById("ball2");
    var ball3 = document.getElementById("ball3");
    if(count == 0){
        ball.style.backgroundColor = "#c59d19";
        ball1.style.backgroundColor = "#c59d19";
        ball2.style.backgroundColor = "#c59d19";
        ball3.style.backgroundColor = "#c59d19";

        ball.style.boxShadow = "0px 2px 50px 2px #c59d19"
        ball1.style.boxShadow = "0px 2px 50px 2px #c59d19"
        ball2.style.boxShadow = "0px 2px 50px 2px #c59d19"
        ball3.style.boxShadow = "0px 2px 50px 2px #c59d19"
        
        count = 1;
    }else{
        document.getElementById("ball").style.backgroundColor = "#B6BFA3";
        document.getElementById("ball1").style.backgroundColor = "#B6BFA3";
        document.getElementById("ball2").style.backgroundColor = "#B6BFA3";
        document.getElementById("ball3").style.backgroundColor = "#B6BFA3";

        ball.style.boxShadow = "0px 2px 50px 2px #B6BFA3"
        ball1.style.boxShadow = "0px 2px 50px 2px #B6BFA3"
        ball2.style.boxShadow = "0px 2px 50px 2px #B6BFA3"
        ball3.style.boxShadow = "0px 2px 50px 2px #B6BFA3"

        count = 0;
    }
}

function mode(event){
    var bot_on= document.getElementById("bot_on");
    var light_mode = document.getElementById("light_mode");
    var dark_mode = document.getElementById("dark_mode");
    var body = document.body;
    var page = document.getElementsByClassName("page")[0];
    var home = document.getElementById("homepage");
    var menu_hamb = document.getElementById("menu_hamb");
    var linha1 = document.getElementById("linha1");
    var linha2 = document.getElementById("linha2");
    var linha3 = document.getElementById("linha3");
    var nome = document.getElementById("nome");
    var funcs = document.getElementById("funcs");
    var me = document.getElementById("me");
    var mep = me.getElementsByTagName("p");
    var container = document.getElementsByClassName("container_atrib");

    if(theme == 1){
        bot_on.style.right = "2.3em";
        bot_on.style.left = "0em";
        bot_on.style.backgroundColor = "#484848";
        light_mode.style.visibility = "hidden";
        dark_mode.style.visibility = "visible";
        body.style.backgroundColor = "#484848";
        page.style.backgroundColor = "#FFFFFF";
        home.style.backgroundColor = "#F2EEE9";
        linha1.style.backgroundColor = "#000000";
        linha2.style.backgroundColor = "#000000";
        linha3.style.backgroundColor = "#000000";
        nome.style.color = "#594438";
        funcs.style.color = "#000000";
        me.style.backgroundColor = "#FFFFFF"
        me.style.boxShadow = "0px 2px 5px 2px #d3d3d3"
        me.style.color = "#000000"
        
        for(let i = 0; i < mep.length; i++){
            mep[i].style.color = "#000000"
        }

        for(let i = 0; i < container.length; i++){
            container[i].style.backgroundColor = "#FFFFFF"
        }

        theme = 0;
    }
    else{
        bot_on.style.right = "0em";
        bot_on.style.left = "2.3em";
        bot_on.style.backgroundColor = "#F2EEE9";
        light_mode.style.visibility = "visible";
        dark_mode.style.visibility = "hidden";
        body.style.backgroundColor = "#F2EEE9";
        page.style.backgroundColor = "#484848";
        home.style.backgroundColor = "#363636";
        linha1.style.backgroundColor = "#5f5f5f";
        linha2.style.backgroundColor = "#5f5f5f";
        linha3.style.backgroundColor = "#5f5f5f";
        nome.style.color = "#5c5c5c";
        funcs.style.color = "#000000";
        me.style.backgroundColor = "#5f5f5f"
        me.style.boxShadow = "0px 2px 5px 2px #414141"
        me.style.color = "#FFFFFF"

        for(let i = 0; i < mep.length; i++){
            mep[i].style.color = "#FFFFFF"
        }

        for(let i = 0; i < container.length; i++){
            container[i].style.backgroundColor = "#5f5f5f"
            container[i].style.color = "#FFFFFF"
        }

        theme = 1;
    }
}


