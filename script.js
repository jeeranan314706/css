window.onload = function(){
    var img = document.getElementById(" Game POP1");
    var count = document.getElementById("score");
    var score = 0;
    var audio = new Audio("pm1..mp3");

    img.addEventListener('mousedown', function(){
        increaseScore();
        img.src = 'POP2.jpg';
    });

    img.addEventListener('mouseup', function(){
        img.src = 'POP1.jpg';
    });

    function increaseScore(){
        score++;
        count.innerHTML = score;
    }
}