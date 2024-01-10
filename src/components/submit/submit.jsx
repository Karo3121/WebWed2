
import s from "./submit.module.css"
import img from "../../img/submit/img.jpg"



function Submit() {
    return ( <>
        <div className={s.submitBigDiv}>

            <div className={s.header}>
                <h1>Խնդրում ենք հաստատել Ձեր ներկայությունը միջոցառմանը </h1>
                <h3>Ձեր պատասխանները մեզ կօգնեն կազմակերպել հարսանյաց արարողությունը</h3>

            </div>

            <div className={s.subSmallDiv}>
                <div>
                    <img className={s.submitImg} src={img} alt="" />
                </div>


                <div>

                    <h1 className={s.h1HraverBIg}></h1>
                    <p className={s.headerP}>Կսպասենք պատասխանի մինչև 01.03.2024</p>
                    <form action="https://formspree.io/f/mgejgwbq" method="POST" className={s.inputSend}> 
                        <div className={s.radioBigDiv}>
                            
                            <div className={s.radioDiv}>
                                <input type="radio" name="ներկայությունը" required className={s.inpRadio} id="radio1"  value=""/>
                                <p className={s.mainP}>{"Միանալու եմ(ենք) միջոցառմանը եկեղեցում"}</p>
                            </div>
                            
                            <div className={s.radioDiv}>
                                <input type="radio" name="ներկայությունը" required className={s.inpRadio} id="radio2"  value="Միանալու եմ(ենք) միջոցառմանը ռեստորանում"/>
                                <p className={s.mainP}>{"Միանալու եմ(ենք) միջոցառմանը ռեստորանում"}</p>
                            </div>

                            <div className={s.radioDiv}>
                                <input type="radio" name="ներկայությունը" required className={s.inpRadio} id="radio2"  value="Չեմ(չենք) կարողանա գալ"/>
                                <p className={s.mainP}>{"Չեմ(չենք) կարողանա գալ"}</p>
                            </div>

                        </div>

                        <h3>Անուն Ազգանուն</h3>
                        <p className={s.footerP}>Եթե Դուք հրավիրված եք զույգի կամ ընտանիքի հետ, խնդրում ենք նշել բոլոր անունները</p>

                    
                        <input type="text" name="Անուն" required className={s.inp} placeholder="" id="inps" />
                        <button type="submit" className={s.btn} id="btn">Ուղարկել</button>
                    </form>


                </div>

                </div>
        </div>
    </> );
}

export default Submit;