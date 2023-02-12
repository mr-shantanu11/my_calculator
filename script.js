let string = "";
let buttons = document.querySelectorAll('.button');
let memory= "";
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
            
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value = string;

        }
        else if(e.target.innerHTML == 'M+'){
            memory = string;
            string = memory + string;
            document.querySelector('input').value = string;

        }
        else{
            console.log(e.target);
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;

        }
        

    })
    
})