console.log("Hwllooooooo world")


// query selectors
let formText = document.querySelector(".add-text");
let record = document.querySelector(".history-record"); 
let emojis = document.querySelectorAll(".emoji");
let addOne = document.querySelector(".btn");
let recorded = document.querySelector(".recorded");
let dateString = document.getElementById("dateString");
let timeClock = document.getElementById("timeClock");


let todayDate = new Date().toDateString();
dateString.textContent = `${todayDate}`

let reaction = null;
let moods = []; 


//functions
function addMood (e) {
   e.preventDefault();
let textForm = document.querySelector("[name=text]").value;
console.log(textForm);


let fullForm = {
    reaction: reaction,
    textForm: textForm,
};

let previ = document.getElementsByClassName("selected")[0];


if (previ && textForm) {
moods.push(fullForm);
console.log(fullForm);
this.reset();
}
 listMood(moods, record);
 localStorage.setItem("moods", JSON.stringify(moods));
 
}


function emojiSelect () {
    reaction = this.getAttribute("data-reaction");
    let prev = document.getElementsByClassName("selected")[0];
    if (prev) {
        prev.classList.remove("selected"); //to only allow one selection
    }
    this.classList.add("selected"); 
    
}


for (let i=0; i<emojis.length; i++) {
    emojis[i].addEventListener("click", emojiSelect);
    localStorage.setItem("moods", JSON.stringify(moods));
}


function listMood (fullForm = [], record) {

let dateTime = new Date().toLocaleString();
let previ = document.getElementsByClassName("selected")[0];

if (previ) {
record.innerHTML = moods.map((fullForm, i) => {
  return `<li>
  <h4> ${dateTime}  </h4>     
  <span data-index=${i}> ${fullForm.reaction.toUpperCase()} </span> <span data-index=${i}> - </span> <span data-index=${i}>   ${fullForm.textForm} </span> 
       
       ` 
}).join("");

previ.classList.remove("selected");
}

else {
    console.log("working")
        let popupShow = document.getElementsByClassName("popup")[0];
        popupShow.classList.add("showing");

        setTimeout(() => popupShow.classList.add('hide'), 3000);

    }
    localStorage.setItem("moods", JSON.stringify(moods));
}

// event listeners
formText.addEventListener("submit", addMood);




