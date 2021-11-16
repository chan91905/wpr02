function move_tank(str) {
    var step=19;
    switch(str) {
    case "down":
        var x = document.getElementById("tank").offsetTop;
        x = x + step;
        document.getElementById("tank").style["top"] =x+'px';
    break;

    case "up":
        var x = document.getElementById("tank").offsetTop;
        x = x - step;
        document.getElementById("tank").style["top"]=x+'px';
    break;

    case "left":
        var y = document.getElementById("tank").offsetLeft;
        y = y - step;
        document.getElementById("tank").style["left"]=y+'px';
    break;

    case "right":
        var y = document.getElementById("tank").offsetLeft;
        y = y + step;
        document.getElementById("tank").style["left"]=y+'px';
    break;
}

(function () {
    var x = y = 0;
    let xBoom = Math.floor(Math.random() * 10) * 19;
    let yBoom = Math.floor(Math.random() * 10) * 19;
    let tank = ("#tank");
    let boom = ("#boom");
    boom.css({
        "top": yBoom + "px",
        "left": xBoom + "px"
    })

    function checkBoom() {
        if (tank.css("top") == boom.css("top") &&
            tank.css("left") == boom.css("left")) {
            tank.css({
                "background": "url('explosion.png')",
                "border": "1px solid red",
                "width": "30px",
                "height": "30px"
            });
            boom.hide();
            setTimeout(restarGame, 1000)
        }
    }

    function restarGame() {
        location.reload()
    }
    ("#topBtn").click(function () {
        if (y > 0) {
            y -= 19
        } else y -= 0
        $("#tank").css("top", y + "px")
        checkBoom()
    })
    $("#bottomBtn").click(function () {
        if (y < $(".arena").innerHeight()-$("#tank").outerHeight()) {
            y += 19
        } else y += 0
        $("#tank").css("top", y + "px")
        checkBoom()
    })
    $("#leftBtn").click(function () {
        if (x > 0) {
            x -= 19
        } else x -= 0
        $("#tank").css("left", x + "px")
        checkBoom()
    })
    $("#rightBtn").click(function () {
        if (x < $(".arena").innerWidth()-$("#tank").outerWidth()) {
            x += 19
        } else x += 0
        $("#tank").css("left", x + "px")
        checkBoom()
    })
})