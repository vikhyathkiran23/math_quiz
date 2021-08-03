var Player_1=localStorage.getItem("Player_1");
var Player_2=localStorage.getItem("Player_2");
console.log(Player_1 + " " +Player_2)
var Score_1=0;
var Score_2=0;
var Questioner= "Player_1";
var Answerer="Player_2"
document.getElementById("Player_1_Name").innerHTML=Player_1 + ":";
document.getElementById("Player_2_Name").innerHTML=Player_2 + ":";
document.getElementById("Questioner").innerHTML=Player_1;
document.getElementById("Answerer").innerHTML=Player_2;
document.getElementById("player_1_score").innerHTML=Score_1;
document.getElementById("player_2_score").innerHTML=Score_2;

function send() {
    var Number_1 = document.getElementById("Number_1").value;
    var Number_2 = document.getElementById("Number_2").value;
    Actual_Answer = parseInt(Number_1) * parseInt(Number_2);
    Question_Number = "<h4 >" + Number_1 + " X " + Number_2 + "=" + "</h4><br>";
    Input_Box = "Answer : <input type='number' id='input_check_box'>";
    Check_Button= "<br><br><button class='btn btn-info' onclick='check()' >Check</button>";
    row=Question_Number + Input_Box + Check_Button;
    document.getElementById("output").innerHTML= row;
    console.log("Hello");
    document.getElementById("Number_1").value="";
    document.getElementById("Number_2").value="";
}

function check(){
    user_answer=document.getElementById("input_check_box").value;
    if(user_answer==Actual_Answer){
        if (Answerer=="Player_2") {
            Score_2=Score_2+1;
            document.getElementById("player_2_score").innerHTML=Score_2;         
        }
        else{
            Score_1=Score_1+1;
            document.getElementById("player_1_score").innerHTML=Score_1;
        }
    }
    if(Questioner=="Player_1"){
        Questioner="Player_2";
        document.getElementById("Questioner").innerHTML=Player_2;
    }
    else{
        Questioner="Player_1";
        document.getElementById("Questioner").innerHTML= Player_1;
    }
    if(Answerer=="Player_1"){
        Answerer="Player_2";
        document.getElementById("Answerer").innerHTML= Player_2;
    }
    else{
        Answerer="Player_1";
        document.getElementById("Answerer").innerHTML=Player_1;
    }
    document.getElementById("output").innerHTML=""
}
