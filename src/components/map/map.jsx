

import s from "./map.module.css"
import ekex from "../../img/map/ekexeci.jpg"
import rest from "../../img/map/rest.jpg"
import MapSmall from "./mapSmall/mapSmall";




function Map() {

    let mapArr = [
        {
            id:1,
            title:"Սուրբ Գրիգոր Լուսավորիչ եկեղեցու",
            img:ekex,
            map:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.6582571795775!2d44.51466497586613!3d40.172161970488595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcf5dce61905%3A0x5b1b85523b3f82de!2z0KHQvtCx0L7RgCDQodCy0Y_RgtC-0LPQviDQk9GA0LjQs9C-0YDQuNGPINCf0YDQvtGB0LLQtdGC0LjRgtC10LvRjw!5e0!3m2!1sru!2sam!4v1704898717414!5m2!1sru!2sam" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        },
        {
            id:2,
            title:"Աղաբաբյանս",
            img:rest,
            map:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.0034161458166!2d44.4584219151629!3d40.20898695561781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406a97622758bbf3%3A0xa7ef789e9b5142b7!2sAghababyan&#39;s%20Restaurant!5e0!3m2!1sru!2sam!4v1704900076824!5m2!1sru!2sam" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        },
    
    ]


    return ( <>
        <div className={s.mapBigDiv}>
            {
                mapArr.map((i) => {
                    return <MapSmall key={i.id} data={i} />
                })
            }


        </div>
    
    </> );
}

export default Map;





























