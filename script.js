var elements=document.querySelectorAll(".items");
var c='x';
var arr_items="";
for(var element of elements){
    element.onclick=function(event){
        if(c=='x'){
            document.getElementById(event.target.id).innerHTML="x";
            c='o';
            document.getElementById("pointer").style.left="730px";
        }
        else{
            document.getElementById(event.target.id).innerHTML="o";
            c='x';
            document.getElementById("pointer").style.left="580px";
        }
        document.getElementById(event.target.id).style.pointerEvents="none";
        //////////////////////////////////////////
        if(document.getElementById(event.target.id).textContent==document.getElementById("item1").textContent && document.getElementById(event.target.id).textContent==document.getElementById("item2").textContent && document.getElementById(event.target.id).textContent==document.getElementById("item3").textContent){
            arr_items=document.getElementById("item1").textContent+document.getElementById("item2").textContent+document.getElementById("item3").textContent;
        }
        else if(document.getElementById(event.target.id).textContent==document.getElementById("item4").textContent && document.getElementById(event.target.id).textContent==document.getElementById("item5").textContent && document.getElementById(event.target.id).textContent==document.getElementById("item6").textContent){
            arr_items=document.getElementById("item4").textContent+document.getElementById("item5").textContent+document.getElementById("item6").textContent;
        }
        else if(document.getElementById(event.target.id).textContent==document.getElementById("item7").textContent && document.getElementById(event.target.id).textContent==document.getElementById("item8").textContent && document.getElementById(event.target.id).textContent==document.getElementById("item9").textContent){
            arr_items=document.getElementById("item7").textContent+document.getElementById("item8").textContent+document.getElementById("item9").textContent;
        }
        else if(document.getElementById(event.target.id).textContent==document.getElementById("item1").textContent && document.getElementById(event.target.id).textContent==document.getElementById("item4").textContent && document.getElementById(event.target.id).textContent==document.getElementById("item7").textContent){
            arr_items=document.getElementById("item1").textContent+document.getElementById("item4").textContent+document.getElementById("item7").textContent;
        }
        else if(document.getElementById(event.target.id).textContent==document.getElementById("item2").textContent && document.getElementById(event.target.id).textContent==document.getElementById("item5").textContent && document.getElementById(event.target.id).textContent==document.getElementById("item8").textContent){
            arr_items=document.getElementById("item2").textContent+document.getElementById("item5").textContent+document.getElementById("item8").textContent;
        }
        else if(document.getElementById(event.target.id).textContent==document.getElementById("item3").textContent && document.getElementById(event.target.id).textContent==document.getElementById("item6").textContent && document.getElementById(event.target.id).textContent==document.getElementById("item9").textContent){
            arr_items=document.getElementById("item3").textContent+document.getElementById("item6").textContent+document.getElementById("item9").textContent;
        }
        else if(document.getElementById("item1").textContent==document.getElementById("item5").textContent && document.getElementById("item1").textContent==document.getElementById("item9").textContent){
            arr_items=document.getElementById("item1").textContent+document.getElementById("item5").textContent+document.getElementById("item9").textContent;
        }
        else if(document.getElementById("item3").textContent==document.getElementById("item5").textContent && document.getElementById("item3").textContent==document.getElementById("item7").textContent){
            arr_items=document.getElementById("item3").textContent+document.getElementById("item5").textContent+document.getElementById("item7").textContent;
        }
        /////////////////////////////
        if(arr_items!=""){
            if(arr_items=="xxx"){
                document.getElementById("numberwins_x").innerHTML=parseInt(document.getElementById("numberwins_x").textContent)+1;
            }
            else{
                document.getElementById("numberwins_o").innerHTML=parseInt(document.getElementById("numberwins_o").textContent)+1;
            }
            document.getElementById("display_result").style.display="flex";
            arr_items="";
        }
    }
}
document.getElementById("btn_newgame").onclick=function(){
    document.getElementById("display_result").style.display="none";
    for (element of elements){
        element.innerHTML="";
        element.style.pointerEvents="visible";
    }
    c='x';
    document.getElementById("pointer").style.left="580px";
}