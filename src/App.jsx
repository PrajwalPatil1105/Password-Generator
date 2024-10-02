import {useState} from 'react'
import './App.css'
import { useCallback } from 'react'

function App() {
  const [num,numAllowed]=useState(false)
  const [char,charAllowed]=useState(false)
  const [len,lenAllowed]=useState(8)
  const [password,passwordchange]=useState("")

 const passwordgenerator = useCallback(()=>{
  let pass=""
  let chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(num) chars +="0123456789"
  if(char) chars +="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
  
  for(let i=1;i<=len;i++){
      let a = Math.floor(Math.random()*chars.length)
      pass +=chars.charAt(a)
  }
  passwordchange(pass)

 },[len,char,num,passwordchange])



 function copyclipboard(){
  window.navigator.clipboard.writeText(password)
  alert("Password Copied to Clipboard")
 }


 
  return (
    <>
     <h1 className='text-center text-white text-4xl mt-10 pb-20'>Password Geneerator</h1>
     <div className="main">
      <div className='line1'>
          <input className='passinput' type="text" placeholder='Password' value={password}  />
          <button className='get' onClick={()=>{passwordgenerator()}} >GET</button>
          <button className='copy' onClick={copyclipboard}>COPY</button>
      </div>  
      <div className='line2'>
  
        <input className='range' type="range" min={8} max={100} onChange={function(e){
          lenAllowed(e.target.value)
        }}/>
        <label className='rangelable'>Lenght:{len}</label>
       
        <input type="checkbox" className='cb1' onChange={function act(){
          if(num==(false)){
            numAllowed(true)
          }
          else{
            numAllowed(false)
          }
        }} />
        <label className='numlab'>Numbers</label>
   

        <input type="checkbox" className='cb2' onClick={()=>{charAllowed(prev=>!prev)}}/>
        <label className='charlab'>Special Charaters</label>

      </div>
     </div>
    </>
  )
}

export default App
