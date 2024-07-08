import { useCallback, useEffect, useRef, useState } from "react"



function App() {
 let  [length, setlength] = useState(8);
 const [numberAllowed, setnumberAllowed]= useState(false);
 const[charAllowed,setcharAllowed ]= useState(false)
 const[password ,setpassword] = useState("")

//  Useref hooks

const passwordref =useRef(null)

 const PassowordGenrator = useCallback(()=>{
  let pass =""
  let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  if (numberAllowed) str+="0123456789"
  if(charAllowed) str+= "!`@#4%^&*}}_+}{>?"

for(let i=1; i<=length;i++){
    const char= Math.floor(Math.random()*str.length+1)
    pass +=str.charAt(char)
  }
setpassword(pass)


 },[length,numberAllowed,charAllowed,setpassword])

 useEffect(() =>{
PassowordGenrator()
 },
  [length,numberAllowed,PassowordGenrator])

  const copypasswordtoclipboard= () => {
  window.navigator.clipboard.writeText(password)
  passwordref.current?.select()
  passwordref.current?.setSq
  electionRange(0,8)
  }
  return (
    <>
        <div className="w-full max-w-md text-center shadow-md bg-gray-700
         text-orange-500 rounded-lg  py-3 px-4 my-8 mx-auto">
          <h1 className="text-white text-center my-3">
             PassowordGenrator
          </h1>

         <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          ref={passwordref}
           /> 
          <button 
          onClick={copypasswordtoclipboard}
          className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-3 rounded-full ">
           copy
         </button>
         
         </div>
         <div className="flex items-center gap-x-1">
           <input 
              type="range"
              min={8}
              max={100}
              value={length}
               className="cursor-pointer"
              onChange={(e) => {setlength(e.target.value)}}  

              />
            
           <label >
            Length: {length}
            </label>

          <div className="flex items-center gap-x-1"> 
             <input 
              
              type="checkbox" 
              defaultChecked ={numberAllowed}
              id="numberInput"
              onChange={() => {
              setnumberAllowed((prev) => (!prev));
            }}
            /> numbers</div>

            
         
            <div className="flex items-center gap-x-1"> 
               <input 
              
                   type="checkbox" 
                 defaultChecked ={charAllowed}
                 id="char"
                 onChange={() => {
                 setcharAllowed((prev) => (!prev));
            }}
            />
             <label 
                htmlFor="characterInput">
                Characters
             </label>

            </div>
         </div>
          
         </div>
    </>
  )
}

export default App
