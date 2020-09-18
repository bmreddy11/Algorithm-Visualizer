var refreshbtn = document.getElementById('refresh');
var startbtn = document.getElementById('start');
var container = document.querySelector('ArrayBox');
var ArrayBox = document.getElementById("ArrayBox");
var speed_id = document.querySelector('speed');
var count = document.querySelector('count');
var arr = [];
var divs = [];
var sliderCount = document.getElementById('count');
var sliderSpeed = document.getElementById('speed');
console.log(sliderCount.value);
console.log(sliderSpeed.value);
refreshbtn.addEventListener('click', refresh);
startbtn.addEventListener('click', start);

if (count == null) count = 60;
if (speed_id == null) speed_id = 10;
ArrayBox.style = "flex-direction:row";

function GenerateArr(n) {
    ArrayBox.innerHTML = "";
    for (var i = 0; i < n; i++) {
        arr[i] = 5 + (Math.floor(Math.random() * 500) + 500) % 96;
        divs[2 * i] = document.createElement("div");
        divs[2 * i + 1] = document.createElement("div");
        ArrayBox.appendChild(divs[2 * i]);
        ArrayBox.appendChild(divs[2 * i + 1]);

        var width = 100 / (2 * n);
        divs[2 * i].style = "width: " + width + "%;";
        divs[2 * i + 1].style =
            " background: #808080; width:" + width + "%;" +
            "box-shadow: 1px -1px 2px #5F5F5F, 1px -1px 2px white; " +
            " height:" + arr[i] + "%;";
    }
}

// function start() {

// }

function refresh() {
    location.reload();
}

sliderCount.oninput= function(){
    GenerateArr(sliderCount.value);
}

window.onload = () => {
    GenerateArr(sliderCount.value);
};