import React,{useState} from "react";


const Calculater = ()=>{

    const [num1   , SetNum1  ] = useState("");
    const [num2   , SetNum2  ] = useState("");
    const [flag   , setFlag  ] = useState();
    const [answer , SetAnswer] = useState();




   function calculateAnswer(e ,operation ){

    if(num1===""){
        setFlag("error");
        SetAnswer("Num1 can't be Empty");
        console.log("num 1 empty");
        return;

    }

    if(num2 ===""){
        setFlag("error");
        SetAnswer("Num2 can't be Empty");
        console.log("num 2 empty");
        return;
    }


    if(operation==="+"){
             let sum = Number(num1)+Number(num2);
             SetAnswer(sum);
         }

        else if(operation==="-"){
            let sub = Number(num1)- Number(num2);
             SetAnswer(sub);
        }

        else if(operation==="*"){
            
            let mul = Number(num1)*Number(num2);
             SetAnswer(mul);
             
        }

        else{
          
            let div = Number(num1)/Number(num2);
             SetAnswer(div);
        }

        setFlag("success");
   }


    return <div className="calculater_componets">
          
       <div className="mainBox">
         


         <h1>React Calculator</h1>
         <input placeholder="Num 1"  type="text" value={num1}   onChange={(e)=>{SetNum1(e.target.value)}} />
         <input placeholder="Num 2"  type="text" value={num2}   onChange={(e)=>{SetNum2(e.target.value)}} />

         <div className="buttonBox">
            <button onClick={(e)=>calculateAnswer("target","+")}>+</button>
            <button onClick={(e)=>calculateAnswer("target","-")}>-</button>
            <button onClick={(e)=>calculateAnswer("target","*")}>*</button>
            <button onClick={(e)=>calculateAnswer("target","/")}>/</button>
         </div>

        {flag==="error"   && <div className="answer"><p className="error"  >Error  </p> <h4>{answer}</h4></div>}
        {flag==="success" && <div className="answer"><p className="success">success</p> <h4>Result: {answer}</h4></div>}
        



    
    
  




       </div>
        
    </div>
}

export default Calculater;