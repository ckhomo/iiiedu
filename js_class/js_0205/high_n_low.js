//Global variables: total points, counts and player name.
let total = 0;
let count = 0;
let name = '';

//Show the main contents.
function displayMain() {
    //Name check!
    var player_name = document.getElementById('player_name').value;
    if (player_name == '') {
        alert('請輸入玩家姓名');
        return;
    } else name = player_name;
    var bar = document.getElementById('bar');
    bar.style.display = '';
    var content = document.getElementById('content');
    content.style.display = '';
}

//Do the math stuffs for runRand()
function winRate(str, num) {//Want to add: 偽隨機
    var rate = Math.floor(Math.random() * 71) + num;//0~70
    document.getElementById(`${str}`).innerHTML = rate;
}
function ptGet(str) {//1~100
    var pt = Math.floor(Math.random() * 100) + 1;
    document.getElementById(`${str}`).innerHTML = pt;
}

//
//This function triggered wehn you click the decision button.
function rateCheck(point, rate) {
    var pt = Number(point);
    var rt = Number(rate);
    if (Math.floor(Math.random() * 100) - rt <= 0) {
        total = total + pt;
        createLog(1, pt);
        count++;
    } else {
        total = total - pt;
        createLog(0, pt);
        count++;
    }
    document.getElementById('total').innerHTML = `${total}`;
    document.getElementById('count').innerHTML = `${count}`;
    drawProgress();
    endCheck();
}

//Generate random rates and points.
function runRand() {
    //Change rates when count accumulates.
    let k = 0;//Control winrate.
    if (count <= 5) {
        k = 30;//rate:30~100
    } else if (count <= 20) {
        k = 20;//rate:20~90
    } else if (count <= 40) {
        k = 15;//rate:15~85
    } else if (count <= 60) {
        k = 10;//rate:10~80
    } else if (count <= 80) {
        k = 5;//rate:5~75
    } else {
        k = 0;//rate:0~70
    }
    winRate('win_l', k);
    winRate('win_r', k);
    ptGet("pget_l");
    ptGet("pget_r");
}

//Start game button trigger this function.
function startGame() {
    // toggleCSS(1);
    total = 0;
    count = 0;
    document.getElementById('choice_lbtn').removeAttribute("disabled", "");
    document.getElementById('choice_rbtn').removeAttribute("disabled", "");
    document.getElementById('total').innerHTML = `${total}`;
    document.getElementById('count').innerHTML = `${count}`;
    document.getElementById('output').innerHTML = '';
    document.getElementById('endgame').innerHTML = '';
    $("#dynamic")
        .css("width", 0 + "%")
        .text("");
    runRand();
}

//Simply reset everything.
function resetGame() {
    total = 0;
    count = 0;
    document.getElementById('start_btn').removeAttribute("disabled", "");
    document.getElementById('choice_lbtn').setAttribute("disabled", "");
    document.getElementById('choice_rbtn').setAttribute("disabled", "");
    document.getElementById('pget_l').innerHTML = '';
    document.getElementById('win_l').innerHTML = '';
    document.getElementById('pget_r').innerHTML = '';
    document.getElementById('win_r').innerHTML = '';
    document.getElementById('output').innerHTML = '';
    document.getElementById('endgame').innerHTML = '';
    document.getElementById('total').innerHTML = `${total}`;
    document.getElementById('count').innerHTML = `${total}`;
    var bar = document.getElementById('bar');
    bar.style.display = 'none';
    var content = document.getElementById('content');
    content.style.display = 'none';
}
//Creat end-game log.
function createEnd() {
    var end = document.getElementById('endgame');
    var output = document.createElement('span');
    var br = document.createElement('br');
    let textnode = '';
    if (total < 0) {
        textnode = document.createTextNode("你已經用完積分！");
    } else if (total >= 1000) {
        textnode = document.createTextNode("恭喜你, 幸運兒!\n你已獲得1000分!");
    }
    output.appendChild(textnode);
    document.getElementById('endgame').appendChild(output);
    document.getElementById('endgame').appendChild(br);
    textnode = document.createTextNode("你將在5秒後跳轉...");
    document.getElementById('endgame').appendChild(textnode);
    document.getElementById('start_btn').setAttribute("disabled", "");
    document.getElementById('choice_lbtn').setAttribute("disabled", "");
    document.getElementById('choice_rbtn').setAttribute("disabled", "");
    setTimeout(resetGame, 5 * 1000);
}
//Check if the game ended.
function endCheck() {
    if (total < 0) {
        //alert("您已破產!");
        createEnd();
    } else if (total >= 1000) {
        //alert("恭喜你, 幸運兒!\n你已獲得1000分!");
        createEnd();
    } else runRand();

}

//Update progress-bar each time button clicked.
function drawProgress() {
    var current_progress = 0;
    current_progress = total / 10;
    if (total / 10 <= 20) {
        $("#dynamic")
            .css("background-color", "green");
    }
    else if (total / 10 <= 50) {
        $("#dynamic")
            .css("background-color", "yellowgreen");
    } else if (total / 10 <= 80) {
        $("#dynamic")
            .css("background-color", "orange");
    } else {
        $("#dynamic")
            .css("background-color", "red");
    }
    $("#dynamic")
        .css("width", current_progress + "%")
        .css("font-weight", "bolder")
        .css("font-size", "150%")
        .attr("aria-valuenow", current_progress)
        .text(current_progress + "% Complete");
    //Clear progress-bar if endgame.
    if (current_progress >= 100 || current_progress < 0) {
        $("#dynamic")
            .css("width", 0 + "%")
            .text("");
    }
}

//Append new <span> and <br> after clicked.
function createLog(ad, pt) {
    let time = new Date();
    let current_time = time.getMytime();
    var isRaise = '';
    var output = document.createElement('span');
    var br = document.createElement("br");
    // if (total < 0) {
    //     var textnode = document.createTextNode("你已經用完積分！");
    //     output.appendChild(textnode);
    //     document.getElementById('output').appendChild(output);
    //     document.getElementById('output').appendChild(br);
    // } else if (total > 1000) {
    //     var textnode = document.createTextNode("恭喜你！你突破了1000分！");
    //     output.appendChild(textnode);
    //     document.getElementById('output').appendChild(output);
    //     document.getElementById('output').appendChild(br);
    // } else {
    if (ad == 0) {
        isRaise = '下降';
    } else if (ad == 1) isRaise = '上升'
    var log = '[' + String(current_time) + ']' + `${name}` + isRaise + `${pt}` + '分';
    var textnode = document.createTextNode(`${log}`);
    output.appendChild(textnode);
    document.getElementById('output').appendChild(output);
    document.getElementById('output').appendChild(br);
    //}

}


//Enable <div ...class='choice'>
function toggleCSS(bool) {
    // $("div.choice").hover(function () {
    // if (bool == 1) {
    //     $(".choice:hover div")
    //     .css("background-color", 'lightgreen')
    //     .css("cursor", 'pointer')
    //     .attr("onclick", "rateCheck(document.getElementById('pget_l').innerHTML,document.getElementById('win_l').innerHTML)");
    // } else if (bool == 0) {
    //     $(".choice:hover div")
    //     .css("background-color", 'lightgreen')
    //     .css("cursor", 'pointer')
    //     .attr("onclick", "");
    // }
    // });
}

//Self-defined time for log creation.
Date.prototype.getMytime = function () {
    var hour = this.getHours();
    var minu = this.getMinutes();
    var sec = this.getSeconds();
    var tstr = String(hour) + ':' + String(minu) + ':' + String(sec);
    return tstr;
}

//jQuery methods on the progress bar:
//Source:https://codepen.io/gustitammam/pen/RRXGdj
// $(function () {
//     var current_progress = 0;
//     var interval = setInterval(function () {
//         current_progress = total / 10;
//         if (total / 10 <= 20) {
//             $("#dynamic")
//                 .css("background-color", "green");
//         }
//         else if (total / 10 <= 50) {
//             $("#dynamic")
//                 .css("background-color", "yellowgreen");
//         } else if (total / 10 <= 80) {
//             $("#dynamic")
//                 .css("background-color", "orange");
//         } else {
//             $("#dynamic")
//                 .css("background-color", "red");
//         }
//         $("#dynamic")
//             .css("width", current_progress + "%")
//             .css("font-weight", "bolder")
//             .css("font-size", "150%")
//             .attr("aria-valuenow", current_progress)
//             .text(current_progress + "% Complete");
//         if (current_progress >= 100)
//             clearInterval(interval);
//     }, 0.016 * 1000);
// });