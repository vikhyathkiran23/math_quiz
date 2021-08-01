function addUser(){
    var Player_1=document.getElementById("player_1_input_name").value;
    var Player_2=document.getElementById("player_2_input_name").value;
    localStorage.setItem("Player_1", Player_1);
    localStorage.setItem("Player_2", Player_2);
    window.location="quiz_game_page.html";
    
}