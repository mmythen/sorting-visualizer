var list = []
var amount;
var totalWidth = 40;
var delay = 50;

// submit the chosen amount of items to sort
function submit() {
    reset();
    amountInput = document.getElementById("amount");
    amount = amountInput.value;
    amountDisplay = document.getElementById("amountDisplay")
    amountDisplay.textContent = "Amount: " + String(amount)
    list.push(1,2);
    for (let num = 3; num <= amount; num++) {
        list.push(num);
    }
    setup();
}

//function to randomly shuffle MY list for sorting
function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}

//Creating the divs for sorting visualization
function setup() {
    list = shuffle(list)
    for (let i = 0; i < amount; i++) {
        var div = document.createElement("div");
        div.style.width = String(totalWidth / amount) + "vw";
        div.style.background = "green";
        div.style.margin = "5px";
        div.style.height = String(list[i]*30) + "px";
        div.style.marginTop = String(600 - list[i]*30) + "px";
        div.id = "div"+(i+1);
        document.getElementById("main").appendChild(div);
    }
}

// resetting the display
function reset() {
    list = [];
    for (let i = 0; i < amount; i++) {
        var div = document.createElement("div");
        div.id = "div"+(i+1);
        document.getElementById("div"+(i+1)).remove();
    }
}

// calling the selected sorting algo
function sort() {
    curr_i = 0;
    curr_j = 0;
    inputtedAlgo = document.getElementById("algos");
    algo = inputtedAlgo.value;
    if (algo == "bubbleSort") {
        list = bubbleSort(list)
    }
}
async function visualizeSort(list, j) {
    // matching the height of the divs with the new values
    document.getElementById('div'+String(j+1)).style.height = String(list[j]*30) + "px";
    document.getElementById('div'+String(j+1)).style.marginTop = String(600 - list[j]*30) + "px";
    document.getElementById('div'+String(j+2)).style.height = String(list[j+1]*30) + "px";
    document.getElementById('div'+String(j+2)).style.marginTop = String(600 - list[j+1]*30) + "px";

    // Simulate a delay to visualize the sorting process
    await new Promise(resolve => setTimeout(resolve, delay));
}

// sorting algorithms js
async function bubbleSort(list) { 
    for (var i = 0; i < list.length; i++) {
        for (var j = 0; j < (list.length - i - 1); j++) { 

            //checking if the two element need to be swapped
            if (list[j] > list[j + 1]) { 

                //swapping the 2 values in list
                var temp = list[j] 
                list[j] = list[j + 1]
                list[j + 1] = temp

                await visualizeSort(list, j);
            }
        } 
    }
    return list;
}
 




