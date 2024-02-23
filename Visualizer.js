list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
//function to randomly shuffle my list for sorting
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}

//sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//shuffling list
list = shuffle(list);

console.log(list)
//Creating the divs for sorting visualization
for (let i = 0; i < 20; i++) {
    var div = document.createElement("div");
    div.style.width = "5%";
    div.style.background = "green";
    div.style.margin = "5px";
    div.style.height = String(list[i]*30) + "px";
    div.style.marginTop = String(600 - list[i]*30) + "px";
    div.id = "div"+(i+1);
    document.getElementById("main").appendChild(div);
}



// sorting algorithms js



function bubbleSort(list) { 
    for (var i = 0; i < list.length; i++) {

        for (var j = 0; j < (list.length - i - 1); j++) { 

            //checking if the two element need to be swapped
            if (list[j] > list[j + 1]) { 

                //swapping the 2 values in list
                var temp = list[j] 
                list[j] = list[j + 1]
                list[j + 1] = temp

                // matching the height of the divs with the new values
                document.getElementById('div'+String(j+1)).style.height = String(list[j]*30) + "px";
                document.getElementById('div'+String(j+1)).style.marginTop = String(600 - list[j]*30) + "px";
                document.getElementById('div'+String(j+2)).style.height = String(list[j+1]*30) + "px";
                document.getElementById('div'+String(j+2)).style.marginTop = String(600 - list[j+1]*30) + "px";
            }
        } 
    }
    return list
} 

bubbleSort(list)
console.log(list)
 




