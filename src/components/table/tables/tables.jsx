

import s from "./tables.module.css"



function Tables({data}) {
    return ( <>
        <div className={s.tablesBigDiv}>
            <h1>Սեղան N{data.id}</h1>
            <h4>{data.people1}</h4>
            <h4>{data.people2}</h4>
            <h4>{data.people3}</h4>
            <h4>{data.people4}</h4>
            <h4>{data.people5}</h4>
            <h4>{data.people6}</h4>
            <h4>{data.people7}</h4>
        </div>
    </> );
}

export default Tables;