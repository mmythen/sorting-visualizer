var list = []
var amount;
var totalHeight = 40; // in vw
var totalWidth = 40; // in vw
var delay = 35; // in ms
var barColour = "green"

function submit() {
    reset();
    amountInput = document.getElementById("amount");
    amount = amountInput.value;
    amountDisplay = document.getElementById("amountDisplay")
    amountDisplay.textContent = "Amount: " + String(amount)
    list.push(1, 2);
    for (let num = 3; num <= amount; num++) {
        list.push(num);
    }
    setup();
}

function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}

function setup() {
    list = shuffle(list);
    for (let i = 0; i < amount; i++) {
        let div = document.createElement("div");
        div.style.width = String(totalWidth / amount) + "vw";
        div.style.background = "green";
        div.style.margin = "5px";
        div.style.height = String(list[i] * (600/list.length)) + "px";
        div.style.marginTop = String(600 - list[i] * (600/list.length)) + "px";
        div.id = "div" + (i + 1);
        document.getElementById("main").appendChild(div);
    }
}

function reset() {
    list = [];
    let main = document.getElementById("main");
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
}

function updateSlider() {
    amountInput = document.getElementById("amount");
    tempAmount = amountInput.value;
    amountDisplay = document.getElementById("amountDisplay");
    amountDisplay.textContent = "Amount: " + String(tempAmount);
}

function setTheme(themeName) {
    document.documentElement.className = themeName;
    switch (themeName) {
        case 'theme-default':
            barColour = 'green';
            break;
        
        case 'theme-pink':
            barColour = 'rgb(250, 100, 255)';
            break;
    
        case 'theme-bw':
            barColour = '#fff';
            break;

        default:
            barColour = 'green';
    }
    for (let i = 0; i < list.length; i++) {
        visualizeSort(list, i);
    }
}

function sort() {
    curr_i = 0;
    curr_j = 0;
    inputtedAlgo = document.getElementById("algos");

    switch (inputtedAlgo.value) {
        case "bubbleSort":
            bubbleSort(list);
            break;
        case "bozoSort":
            bozoSort(list);
            break;
    }
}

async function visualizeSort(list, indices) {
    for (let j of indices) {
        document.getElementById('div' + String(j + 1)).style.height = String(list[j] * (600/list.length)) + "px";
        document.getElementById('div' + String(j + 1)).style.marginTop = String(600 - list[j] * (600/list.length)) + "px";
        await new Promise(resolve => setTimeout(resolve, delay));
    }
}

async function bubbleSort(list) {
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < (list.length - i - 1); j++) {

            if (list[j] > list[j + 1]) {
                let temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;

                await visualizeSort(list, [j, j + 1]);
            }
        }
    }
    return list;
}

async function bozoSort(list) {
    let sorted = false;
    while (!sorted) {
        let index1 = Math.floor(Math.random() * list.length);
        let index2 = Math.floor(Math.random() * list.length);

        // Swap the elements
        let temp = list[index1];
        list[index1] = list[index2];
        list[index2] = temp;

        // Visualize the step with a delay
        await visualizeSort(list, [index1, index2]);

        // Check if the list is sorted
        sorted = isSorted(list);
    }
    return list;
}

function isSorted(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;
}



