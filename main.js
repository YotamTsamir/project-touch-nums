var gLen = 16
var gArray = makeArray(gLen)
// console.log(gArray);
shuffleArray(gArray);
var gBoard = [];
var gCount = 1;
var gTime;
var gTimer = document.querySelector('.timer')
var gTimerObject = {
    tenSeconds: 0, seconds: 0,
    miliSeconds: 0
}
function init(){
    gLen = 16
    gArray = makeArray(gLen)
    shuffleArray(gArray)
    renderBoard()
}



function makeArray(length) {
    var array = [];
    for (var i = 1; i <= length; i++) {
        array.push(i)
    }
    return array;
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1))
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp
    }
}


console.log(gArray);
;
function renderBoard() {
    var strHTML = '';
    var count = 0;
    var length = Math.sqrt(gArray.slice().length);
    console.log(length)
    for (var i = 0; i < length; i++) {
        strHTML += '<tr>';
        for (var j = 0; j < length; j++) {
            count++
            strHTML += `<td class = cell "${count}}" onclick = cellClicked(this)>${gArray.pop()}</td>`
        }
        strHTML += '</tr>'
    }
    var elTable = document.querySelector('.board');
    elTable.innerHTML = strHTML;
}



function cellClicked(clickedNum) {
    // if (gCount === 1) {
    //     gTimer.style.opacity = '1';
    //     startTimer();
    // }
    if (clickedNum.innerHTML === `${gCount}`) {
        if (gCount === 1) {
            gTimer.style.opacity = '1';
            startTimer();}
        gCount++
        clickedNum.style.backgroundColor = '#e9967a';

        console.log(gArray.length);
        console.log(gCount)
    }
    if (gCount === gLen + 1) {
        clearInterval(gTime);
    }
}
// timer();

function startTimer() {
    gTime = setInterval(countTime, 10)
}

function countTime() {

    gTimerObject.miliSeconds += 10
    if (gTimerObject.miliSeconds > 1000) {
        gTimerObject.seconds++
        gTimerObject.miliSeconds = 0
    }
    if (gTimerObject.seconds > 9) {
        gTimerObject.tenSeconds++
        gTimerObject.seconds = 0;
        gTimerObject.miliSeconds = 0
    }
    gTimer.innerText = `${gTimerObject.tenSeconds}${gTimerObject.seconds}:${gTimerObject.miliSeconds}`
}

function difButton1(button) {
    gLen = 16
    gArray = makeArray(gLen)
    shuffleArray(gArray)
    renderBoard()
   
}
function difButton2(button) {
    gLen = 25
    gArray = makeArray(gLen)
    shuffleArray(gArray)
    renderBoard()
}
function difButton3(button) {
    gLen = 36
    gArray = makeArray(36)
    shuffleArray(gArray)
    renderBoard()
}