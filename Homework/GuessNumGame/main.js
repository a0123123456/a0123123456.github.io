const startBtn = document.querySelector("#start_btn");
const showAnsBtn = document.querySelector("#show_answer_btn");
const restartBtn = document.querySelector("#restart_btn");
const guessHistoryList = document.querySelector("#guess_history_list");
let answer;
const guessInput = document.querySelector("#guess_input");
const guessBtn = document.querySelector("#guess_btn");
const gameMsgToast = document.querySelector("#game_msg_toast");
const toastBootstrap = new bootstrap.Toast(gameMsgToast, {
    delay: 1000
});
const modalBootstrap = new bootstrap.Modal(document.querySelector("#end_game_modal"));
const endGameBtn = document.querySelector("#end_game_btn");

function initGame() {
    //產出answer
    answer = generateAns();
    //清空紀錄
    guessHistoryList.innerHTML = "";
}

function generateAns() {
    const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    numArr.sort((a, b) => getRandomArbitrary(-1, 1));

    return numArr.slice(0, 4).join("");
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


startBtn.addEventListener("click", initGame);

restartBtn.addEventListener("click", initGame);

showAnsBtn.addEventListener("click", () => {
    if(answer){
        showHint(`答案是:${answer}`);
    }else{
        alert("請先按開始按鈕開始遊戲");
    }
    
});

guessBtn.addEventListener("click", () => {
    const val = guessInput.value.trim();
    console.log(val);
    //驗證輸入的合法性
    if(answer===undefined){
        alert("請先按開始按鈕開始遊戲");
    }
    console.log(answer);
    if (val === "" || isNaN(val)) {
        showHint("請輸入合法的數字");
        guessInput.value = "";
        return;
    }
    //輸入的是不重複的4個數字
    if (val.length > 4 || new Set(val).size !== 4) {
        showHint("請確認輸入數字的數量");
        guessInput.value = "";
        return;
    }
    //a,b
    let a = 0, b = 0;
    for (let i = 0; i < answer.length; i++) {
        if (val[i] === answer[i]) {
            a++;
        } else if (answer.includes(val[i])) {
            b++;
        }
    }

    //過關
    if (a === 4) {
        modalBootstrap.show();
    }

    //清空input
    guessInput.value = "";
    //把li的內容附加進ul中
    appendHistory(a, b, val);
});

function appendHistory(a, b, input) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    const span = document.createElement("span");
    const badgeColor = a === 4 ? "bg-success" : "bg-danger";
    span.classList.add("badge", badgeColor);
    span.textContent = `${a}A${b}B`;
    li.append(span, input);
    guessHistoryList.append(li);
};

function showHint(msg) {
    gameMsgToast.querySelector(".toast-body").textContent = msg;
    // const toastBootstrap = bootstrap.Toast.getOrCreateInstance(gameMsgToast);
    toastBootstrap.show();
};

endGameBtn.addEventListener("click", () => {
    modalBootstrap.hide();
    initGame();
});