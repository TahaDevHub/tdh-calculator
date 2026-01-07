let buttons = document.querySelectorAll(".keys button");
let display = document.querySelector(".display input");
buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        if(button.innerText=="C"){
            display.value="";
            return;
        }
        if(button.innerText=="="){
            // display.value=eval(display.value);
            // return;
            try {
                display.value = eval(display.value);
            } catch (err) {
                // If there is any error, show message
                display.value = "Error";
            }
            return;
        }
        display.value+=button.innerText;
    })
})