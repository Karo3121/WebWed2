
import s from "./header.module.css"
import backImg from "../../img/header/Background.png"
import { useEffect, useState } from "react";



function Header() {
    const [time, setTime] = useState([])
    let x = 0

    const scrollFun = () => {
        setInterval(()=>{
            window.scrollTo(0,x)
            x += 1
        },8)
    }


    useEffect(() => {



        


        const interval =  setInterval(() => {
            let dateNew = new Date
            let futureDate = new Date(2024,7,9)

        
            let day = Math.floor((futureDate - dateNew) / (1000 * 60 * 60 * 24 ) )
            let hour = Math.floor((futureDate - dateNew) % (1000 * 60 * 60 * 24 ) / (1000 * 60 * 60  ) )
            let min = Math.floor((futureDate - dateNew) % (1000 * 60 * 60  ) / (1000 * 60 ) )
            let sec = Math.floor((futureDate - dateNew) % (1000 * 60 ) / (1000))
            let arr = [day, hour, min, sec]
            setTime(arr)
        
        
        }, 1000);

        return () => clearInterval(interval);

      }, [time]);


    


    return ( <>
        <div className={s.headerBigDiv}  >
            <button onClick={scrollFun} className={s.hidenBtnScroll}>dasd</button>
            <div className={s.timeDiv}>
                <h1 className={s.timeH1}>ՀԱՐՍԱՆԵԿԱՆ ՀՐԱՎԻՐԱՏՈՄՍ</h1>
                <h3 className={s.timeH3}>Հարսանիքին մնացել է  </h3>
            </div>

            <ul className={s.time}>
                <li className={s.day} >
                    <h1 className={s.dayValue}>{time[0]}</h1>
                    <h3 className={s.timeStr}>Օր</h3>
                </li>
                <li className={s.line}></li>
                <li className={s.hour} >
                    <h1 className={s.hourValue} >{time[1]}</h1>
                    <h3 className={s.timeStr}>Ժամ</h3>
                </li>
                <li className={s.line}></li>
                <li className={s.min} >
                    <h1 className={s.minValue} >{time[2]}</h1>
                    <h3 className={s.timeStr}>Րոպե</h3>
                </li>
                <li className={s.line}></li>
                <li className={s.sec} >
                    <h1 className={s.secValue} >{time[3]}</h1>
                    <h3 className={s.timeStr}>Վայրկյան</h3>
                </li>
                

            </ul>



        </div>
    
    </> );
}

export default Header;
