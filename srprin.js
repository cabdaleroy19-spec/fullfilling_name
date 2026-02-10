let count = 0;
let countEl = document.getElementById("count");
let saveEl=document.getElementById("save-el");


function increment() {
    count +=1;
    countEl.textContent = count;
}
let savetEl = document.getElementById("save-btn");
function save() {

    let countStr = count + " - "
    saveEl.innerText += countStr;
      count=0;
    countEl.tectContent=0;
  
}
