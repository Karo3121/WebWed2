
import s from "./mapSmall.module.css"
import React from "react";

function MapSmall({data}) {
    console.log(data.map)


    return ( <>
        <div className={s.mapdiv}>
            <div className={s.imgDiv}>
                <h1>{data.title}</h1>
                <img src={data.img} className={s.imgLocation} alt="" />
            </div>


            <div className={s.travelDiv}> 
                <h1>Ինչպես հասնել</h1>
                <div  dangerouslySetInnerHTML={{__html: data.map}} />
            </div>
            






        </div>
    </> );
}

export default MapSmall;