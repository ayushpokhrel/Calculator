// let screen=document.getElementById('screen');
// let buttons=document.querySelectorAll('button');
// screenValue='';
// for(item of buttons){
//     item.addEventListener('click',(a)=>{
//         buttonText=a.target.innerText;
//         console.log("the button clicked is",buttonText);

//         if(buttonText=="X"){
//             buttonText='*';
//             screenValue+=buttonText;
//             screen.value=screenValue;
//         }
//         else if(buttonText=="C")
//         {
//             screenValue='';
//             screen.value=screenValue;
//         }
//         else if(buttonText=="="){
//             screen.value=eval(screenValue);
//         }
//         else{
//             screenValue+=buttonText;
//             screen.value=screenValue;
//         }
       
//     })
// }


//creating variable named 'screen' with the id given to the input type in html file and 'button' to select every button that we click.
let screen=document.getElementById('screen');
let buttons=document.querySelectorAll('button');

//initializing black screen for screenvalue
let screenValue='';
for(item of buttons){
    item.addEventListener('click',(a)=>{
        buttonText=a.target.innerText;

        console.log('the clicked button is',buttonText);
        if(buttonText=="X")
        {
            buttonText='*';
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=='C')
        {    screenValue='';
            screen.value=screenValue;   
           
        }
        else if(buttonText=='=')
        {  
            screen.value=eval(screenValue);
        }
        else{
            screenValue+=buttonText;
            screen.value=screenValue;
        }
    })
}