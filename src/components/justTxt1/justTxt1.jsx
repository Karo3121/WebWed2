
import s from "./justTxt1.module.css"
import datePng from "../../img/justTxt1/Amsativ_1.png"

function JustTxt1() {
    return ( <>
        <div className={s.justTxt1BigDiv}>
            <p className={s.txt1}>
                Սիրով հրավիրում ենք Ձեզ կիսելու մեզ հետ մեր կյանքի
                կարևոր և հիշարժան օրը
            </p>
            <p className={s.txt2}>
                Սպասում ենք Ձեզ մեր հարսանիքին
            </p>
            <div className={s.textDate}>
                04/03/2024
            </div>
        </div>
    </> );
}

export default JustTxt1;