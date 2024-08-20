import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

const[dados, setDados]=useState()

  useEffect(()=>{

    // const fetchurl = async()=>{
    //   let response = await fetch('https://api.discogs.com/releases/28302748')
    //   let data = await response.json()
    //   console.log(data)
    // }
  
  
    // fetchurl()

    const fetchurl = async ()=>{
      try{const resposta = await axios("https://api.discogs.com/releases/28302748")
      console.log(resposta.data)
    }catch(err){
        console.log("deu ruim")
      }
    }
    fetchurl()
  },[])

 

  

  return <div>
     <div>image</div>
    <dir>{dados.title}</dir>
    <div>{dados.artists_sort}</div>
    <div>
      <div>tag 1</div>
      <div>tag 2</div>
    </div>
  </div>
}

export default App
