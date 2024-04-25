"use client"
import style from './AllStyle.module.css'
import { useRouter } from "next/navigation"

export default function CountryButton({country,index}){
     
const router = useRouter();
    function handleClick(){
        router.push(`/manycountries/${country.name.common}`)

    }
    return(
        <>
        <button id={`detailbutton-${index}`} aria-label="Aria Name" className={style.button} onClick={handleClick} >
            Go Detail 
        </button>
        </>
    )

}