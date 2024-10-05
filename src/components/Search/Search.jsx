import { useRef, useState } from 'react'
import style from './Search.module.scss'

export default function Search({setInpValue, setChange, setIsOpen}){


    const ref = useRef('')

    const handleSubmit = (e) => {
          e.preventDefault()
          setInpValue(ref.current.value) 
          setChange(prev => prev + 1)
          setIsOpen(true)
    } 

    return(
        <>
        <form onSubmit={handleSubmit} action="">
           <div className={style['search']}>
            <div className={style['input']} id='inputdiv'>
                <input ref={ref} type="text" placeholder='Search for any word…'/>
                <img onClick={handleSubmit} src="../src/assets/images/search_img.svg" alt="" />
            </div>
        </div>
        </form>
        </>
    )
}