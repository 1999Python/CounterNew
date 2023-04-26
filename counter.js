let myButtonDec = document.getElementById("button_decrease");

        let myButtonInc = document.getElementById("button_increase");
        
        let valueDisplay1 = document.getElementById("valueDisplay");

        let reset = document.getElementById("button_reset");

        let multiply = document.getElementById("button_multiply");
        
        let text = document.getElementById("text");
        
        let counter = 0;
       

        myButtonDec.addEventListener("click", ()=>{
            counter--;
            counter >= 0;
            valueDisplay1.innerHTML = counter;
        })

        myButtonInc.addEventListener("click", ()=>{
            counter++;
            valueDisplay1.innerHTML = counter;
        })

        reset.addEventListener("click", ()=>{
           counter = 0;
           valueDisplay1.innerHTML = counter;
        })
        multiply.addEventListener("click", ()=>{
            counter *=
            valueDisplay1.innerHTML = counter;
         })
