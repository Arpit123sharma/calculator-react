import { useState } from "react";

function App() {
  let[val,setVal] = useState('')
  let[op1,setOp1] = useState('')
  let[operator,setOperator] = useState('')
  const calculator = (op:string) =>{
    setOp1(op1=val)
    setVal(val="")
    setOperator(operator=op)
  }
  const operation = () =>{
    const num1 = parseInt(op1)
    const num2 = parseInt(val)
    switch (operator){
      case "+":
        setVal((num1+num2).toString())

        break;

        case "-":
          setVal((num1+num2).toString())
        break;

        case "x":
          setVal((num1*num2).toString())
        break;

        case "/":
          setVal((num1/num2).toString())
          console.log(num1/num2);
          
        break;
    }
  }
  return (
    <>
      <div className="bg-black h-screen flex justify-center items-center relative">
      <h1 className="absolute text-white text-2xl top-10">Calculator app</h1>
    <div className="w-4/12 h-auto rounded-lg border-white border-solid border overflow-hidden">
        <div className="">
            <input type="text" className=" w-full p-4 text-xl" value={val} readOnly placeholder="0"/>
        </div>
        <div className=" w-full flex  text-white">
          <button className="bg-orange-500 w-full py-8 border-black border-solid border" onClick={()=>{setVal(val+=1)}}>1</button> 
          <button className="bg-orange-500 w-full py-8 border-black border-solid border" onClick={()=>{setVal(val+=2)}}>2</button>
          <button className="bg-orange-500 w-full py-8 border-black border-solid border"onClick={()=>{setVal(val+=3)}}>3</button>
          <button className="bg-orange-500 w-full border-black border-solid border" onClick={()=>{calculator("+")}}>+</button>
        </div>
        <div className=" w-full flex  text-white">
        
          <button className="bg-orange-500 w-full py-8 border-black border-solid border"onClick={()=>{setVal(val+=4)}}>4</button> 
          <button className="bg-orange-500 w-full py-8 border-black border-solid border"onClick={()=>{setVal(val+=5)}}>5</button>
          <button className="bg-orange-500 w-full py-8 border-black border-solid border"onClick={()=>{setVal(val+=6)}}>6</button>
          <button className="bg-orange-500 w-full border-black border-solid border"onClick={()=>{calculator("-")}}>-</button>
        </div>
        <div className=" w-full flex  text-white">
        
          <button className="bg-orange-500 w-full py-8 border-black border-solid border"onClick={()=>{setVal(val+=7)}}>7</button> 
          <button className="bg-orange-500 w-full py-8 border-black border-solid border"onClick={()=>{setVal(val+=8)}}>8</button>
          <button className="bg-orange-500 w-full py-8 border-black border-solid border"onClick={()=>{setVal(val+=9)}}>9</button>
          <button className="bg-orange-500 w-full border-black border-solid border"onClick={()=>{calculator("x")}}>x</button>
        </div>
        <div className=" w-full flex  text-white">
        <button className="bg-orange-500 w-full py-8 border-black border-solid border "onClick={()=>{setVal(val+=0)}}>0</button>
        <button className="bg-orange-500 w-full py-8 border-black border-solid border "onClick={()=>{calculator("/")}}>/</button>
        <button className="bg-orange-500 w-full py-8 border-black border-solid border "onClick={()=>{operation()}} >=</button>
        <div className="w-full flex">
        <button className="bg-orange-500 w-full py-8 border-black border-solid border " onClick={()=>{
          setVal(val.slice(0,-1))
        }} >{"<-"}</button>
        <button className="bg-orange-500 w-full py-8 border-black border-solid border " onClick={()=>{setVal(val='')}}>AC</button>
        </div>
        </div>
    </div>
      </div>
     </>
  );
}

export default App;

