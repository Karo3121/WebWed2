
import s from "./plan.module.css"

function Plan({data}) {

    return ( <>
        <div className={s.planBigDiv}>
            <div className={s.timeDiv}>
                <h1>
                    {data.time}
                </h1>
            </div>
            <div className={s.img}>
                <img src={data.img}  alt="" />
                {data.id == 5 ? "" :  <div className={s.lineDiv}></div>}
              
            </div>
            <div className={s.text}>
                <h1 className={s.timeHidden}>{data.time}</h1>
                <h1 className={s.textBig}>{data.txt1}</h1>
                <h2 className={s.textSmall}>{data.txt2}</h2>

            </div>

        </div>
    
    </> );
}

export default Plan;