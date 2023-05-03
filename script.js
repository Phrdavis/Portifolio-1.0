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
    console.log("uepa")
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
    var nav = document.getElementsByClassName("nav")[0];
    var me = document.getElementById("me");
    var mep = me.getElementsByTagName("p");
    var hobs = document.getElementsByClassName("hobs")[0];
    var container = document.getElementsByClassName("container_atrib");
    var comp = document.getElementsByClassName("comp");
    var skill_block = document.getElementsByClassName("skill_bloc");
    var sigla = document.getElementsByClassName("sigla");
    var tec_form = document.getElementsByClassName("tec_form");
    var proj_txt = document.getElementById("proj_txt");
    var info_proj = document.getElementsByClassName("info_proj");
    var btn_proj = document.getElementsByClassName("btn_proj");

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
        nav.style.backgroundColor = "#FEEFDC";
        nav.style.boxShadow = "0px 2px 5px 2px #d3d3d3";
        me.style.backgroundColor = "#FFFFFF";
        me.style.boxShadow = "0px 2px 5px 2px #d3d3d3";
        me.style.color = "#000000";
        
        for(let i = 0; i < mep.length; i++){
            mep[i].style.color = "#000000";
        }

        hobs.style.boxShadow = "0px 2px 5px 2px #d3d3d3";

        for(let i = 0; i < container.length; i++){
            container[i].style.backgroundColor = "#FFFFFF";
            container[i].style.color = "#000000";
            container[i].style.boxShadow = "0px 2px 5px 2px #d3d3d3";
        }

        for(let i = 0; i < comp.length; i++){
            comp[i].style.backgroundColor = "#FBF0E2";
            comp[i].style.color = "#B6BFA3";
        }

        for(let i = 0; i < skill_block.length; i++){
            skill_block[i].style.backgroundColor = "#FFFFFF";
            skill_block[i].style.color = "#000000";
            skill_block[i].style.boxShadow = "0px 2px 5px 2px #d3d3d3";
        }

        for(let i = 0; i < sigla.length; i++){
            sigla[i].style.backgroundColor = "#FFFFFF";
            sigla[i].style.color = "#B6BFA3";
            sigla[i].style.boxShadow = "0px 2px 5px 2px #d3d3d3";
        }

        for(let i = 0; i < tec_form.length; i++){
            tec_form[i].style.boxShadow = "0px 2px 5px 2px #d3d3d3";
        }
        
        proj_txt.style.color = "#727272"

        for(let i = 0; i < info_proj.length; i++){
            info_proj[i].style.backgroundColor = "#FFFFFF";
        }

        for(let i = 0; i < btn_proj.length; i++){
            btn_proj[i].style.boxShadow = "0px 2px 5px 2px #d3d3d3";
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
        nav.style.backgroundColor = "#747474";
        nav.style.boxShadow = "0px 2px 5px 0px #414141";
        me.style.backgroundColor = "#5f5f5f";
        me.style.boxShadow = "0px 2px 5px 0px #414141";
        me.style.color = "#FFFFFF";

        for(let i = 0; i < mep.length; i++){
            mep[i].style.color = "#FFFFFF";
        }

        hobs.style.boxShadow = "0px 2px 5px 0px #6a6a6a";

        for(let i = 0; i < container.length; i++){
            container[i].style.backgroundColor = "#5f5f5f";
            container[i].style.color = "#FFFFFF";
            container[i].style.boxShadow = "0px 2px 5px 0px #414141";
        }

        for(let i = 0; i < comp.length; i++){
            comp[i].style.backgroundColor = "#9b958e";
            comp[i].style.color = "#ace338";
        }

        for(let i = 0; i < skill_block.length; i++){
            skill_block[i].style.backgroundColor = "#898989";
            skill_block[i].style.color = "#FFFFFF";
            skill_block[i].style.boxShadow = "0px 2px 5px 0px #383636";
        }

        for(let i = 0; i < sigla.length; i++){
            sigla[i].style.backgroundColor = "#5a5a5a";
            sigla[i].style.color = "#ace338";
            sigla[i].style.boxShadow = "0px 2px 5px 0px #383636";
        }

        for(let i = 0; i < tec_form.length; i++){
            tec_form[i].style.boxShadow = "0px 2px 5px 0px #383636";
        }
        
        proj_txt.style.color = "#c7c5c5"

        for(let i = 0; i < info_proj.length; i++){
            info_proj[i].style.backgroundColor = "#5f5f5f";
        }

        for(let i = 0; i < btn_proj.length; i++){
            btn_proj[i].style.boxShadow = "0px 2px 5px 0px #383636";
        }

        theme = 1;
    }
}