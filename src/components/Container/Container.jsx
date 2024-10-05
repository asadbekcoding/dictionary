import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Search from "../Search/Search";
import Main from "../Main/Main";
import Notfound from "../Notfound/Notfound"
import style from './Container.module.scss'
export default function Container(){
    const [darkmode, setDarkMode] = useState(false)
    const [inpvalue, setInpValue] = useState('')
    const [change, setChange] = useState(1)
    const [data, setData] = useState({})
    const [isOpen, setIsOpen] = useState(false)
    const [notfound, setNotfound] = useState(false)
    

    const hiDark = () => {
        setDarkMode(!darkmode)
    }
    useEffect(() => {
      if(darkmode){
        document.body.classList.add('dark')
      }else{
        document.body.classList.remove('dark')
      }
    }, [darkmode])
    
    

    useEffect(() => {
      if(inpvalue){
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inpvalue}`).then(data => {
          if(!data.ok){
            if(data.status == 404){
              setNotfound(true)
            }
          }
          return data.json()
        }).then(data => {
            setData(data)
        })  
      }
    }, [change])

    return(
        <>
        <Header hiDark={hiDark}/>
        <Search setInpValue={setInpValue} setChange={setChange} setIsOpen={setIsOpen}/>
        {(data && data.length > 0) ? (<Main data={data}/>) : 
        ((data?.length) ? <div className={style["loader-container"]}>
          <div className={style['bouncing-dots']}>
              <div className={style['dot']}></div>
              <div className={style['dot']}></div>
              <div className={style['dot']}></div>
          </div>
      </div> : (notfound ? <Notfound/> : null))
      }
        </>
    )
}