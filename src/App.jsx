import { useState,useRef, useCallback } from 'react'
import { NU, SC, SU, UC } from './Data'
import { data } from 'autoprefixer'



function App() {
  const [length,setlength]=useState('')
  const [number,setnumber]=useState(false)
  const [capitial,setcapital]=useState(false)
  const [small,setsmall]=useState(false)
  const [special,setspecial]=useState(false)
  const [final,setfinal]=useState('')

  function handle(){
      let charset=""
      let finalpass=''

      if(capitial ||number ||small||special){
      if(capitial) charset+=UC
      if(number) charset+=NU
      if(small) charset+=SU
      if(special) charset+=SC
       for(let i=0;i<length;i++){
        
          finalpass+=charset.charAt(Math.floor(Math.random()*charset.length))
        
        
        
       }
       setfinal(finalpass)
       
       
      

    }
    else{
      alert("please check  one or more box for generate password")
      setfinal('')
      
    }
  }

  // 
const passwordref=useRef(null)

  const copy=useCallback(()=>{
    passwordref.current.select()

    // specific part select 
    // passwordref.current?.setSelectionRange(0,5)
    
    window.navigator.clipboard.writeText(final)
  
  },[])
  

  return (
    <>
    
    <div className='flex w-full h-[600px] bg-slate-400 justify-center flex-col items-center'>
    <h1 className='text-2xl font-bold mb-4'>Password Generator</h1>
      <div className= ' tablet: w-[400px] h-[490px] laptop:w-[400px] bg-pink-600 rounded-md flex flex-col mobile:w-[340px]'>
        <div className='mt-8 ml-8'>
          <input className='p-2 w-60 rounded-md pl-2' type="text" ref={passwordref} readOnly value={final}/>
          <button onClick={copy} className='bg-blue-500 p-2 rounded-sm ml-2'>Copy</button>
        </div>
        <div className='mt-5 flex items-center justify-evenly'>
          <label className='font-semibold' htmlFor="">Length of Password:</label>
          <input onChange={(e)=>{setlength(e.target.value)}} className='w-16 p-2 rounded-md' type="number" max={20} min={7}/>
        </div>
        <div className='mt-5 flex items-center justify-evenly'>
          <label className='font-semibold' htmlFor="">Password in Capital Case:</label>
          <input onChange={()=>{setcapital(!capitial)}} className='w-16 p-2' type="checkbox" />
        </div>
        <div className='mt-5 flex items-center justify-evenly'>
          <label className='font-semibold' htmlFor="">Password in Small Case  :</label>
          <input onChange={()=>{setsmall(!small)}} className='w-16 p-2 ml-1' type="checkbox" />
        </div>
        <div className='mt-5 flex items-center justify-evenly'>
          <label className='font-semibold' htmlFor="">Password in Number Case:</label>
          <input onChange={()=>{setnumber(!number)}} className='w-16 p-2 mr-1' type="checkbox" />
        </div>
        <div className='mt-5 flex items-center justify-evenly'>
          <label className='font-semibold' htmlFor="">Password in Special Case :</label>
          <input onChange={()=>{setspecial(!special)}} className='w-16 p-2' type="checkbox" />
        </div>
        <div className='mt-12 flex items-center justify-evenly'>
          
          <button onClick={handle} className='bg-orange-700 p-4 rounded-md text-white text-xl font-semibold'>Generate Password</button>
        </div>

      </div>
     
    </div>
    </>
  )
}

export default App
