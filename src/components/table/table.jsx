
import s from "./table.module.css"
import Tables from "./tables/tables";

function Table() {

    let tableArr = [
        {
            id:1,
            people1:"Արամ Արամյան",
            people2:"Արամ Արամյան",
            people3:"Արամ Արամյան",
            people4:"Արամ Արամյան",
            people5:"Արամ Արամյան",
            people6:"Արամ Արամյան",
            people7:"Արամ Արամյան",
        },
        {
            id:2,
            people1:"Արամ Արամյան",
            people2:"Արամ Արամյան",
            people3:"Արամ Արամյան",
            people4:"Արամ Արամյան",
            people5:"Արամ Արամյան",
            people6:"Արամ Արամյան",
            people7:"Արամ Արամյան",
        },
        {
            id:3,
            people1:"Արամ Արամյան",
            people2:"Արամ Արամյան",
            people3:"Արամ Արամյան",
            people4:"Արամ Արամյան",
            people5:"Արամ Արամյան",
            people6:"Արամ Արամյան",
            people7:"Արամ Արամյան",
        },
        {
            id:4,
            people1:"Արամ Արամյան",
            people2:"Արամ Արամյան",
            people3:"Արամ Արամյան",
            people4:"Արամ Արամյան",
            people5:"Արամ Արամյան",
            people6:"Արամ Արամյան",
            people7:"Արամ Արամյան",
        },
        {
            id:5,
            people1:"Արամ Արամյան",
            people2:"Արամ Արամյան",
            people3:"Արամ Արամյան",
            people4:"Արամ Արամյան",
            people5:"Արամ Արամյան",
            people6:"Արամ Արամյան",
            people7:"Արամ Արամյան",
        },
        {
            id:6,
            people1:"Արամ Արամյան",
            people2:"Արամ Արամյան",
            people3:"Արամ Արամյան",
            people4:"Արամ Արամյան",
            people5:"Արամ Արամյան",
            people6:"Արամ Արամյան",
            people7:"Արամ Արամյան",
        },
        {
            id:7,
            people1:"Արամ Արամյան",
            people2:"Արամ Արամյան",
            people3:"Արամ Արամյան",
            people4:"Արամ Արամյան",
            people5:"Արամ Արամյան",
            people6:"Արամ Արամյան",
            people7:"Արամ Արամյան",
        },
        {
            id:8,
            people1:"Արամ Արամյան",
            people2:"Արամ Արամյան",
            people3:"Արամ Արամյան",
            people4:"Արամ Արամյան",
            people5:"Արամ Արամյան",
            people6:"Արամ Արամյան",
            people7:"Արամ Արամյան",
        },
        {
            id:9,
            people1:"Արամ Արամյան",
            people2:"Արամ Արամյան",
            people3:"Արամ Արամյան",
            people4:"Արամ Արամյան",
            people5:"Արամ Արամյան",
            people6:"Արամ Արամյան",
            people7:"Արամ Արամյան",
        },
        {
            id:10,
            people1:"Արամ Արամյան",
            people2:"Արամ Արամյան",
            people3:"Արամ Արամյան",
            people4:"Արամ Արամյան",
            people5:"Արամ Արամյան",
            people6:"Արամ Արամյան",
            people7:"Արամ Արամյան",
        },

    ]



    return ( <>
        <div className={s.tableBigDiv} >
            <h1 className={s.h1}>
                ՀՅՈՒՐԵՐԻ ՑԱՆԿԸ
            </h1>

            <div className={s.tables}>
                {
                    tableArr.map((i) => {
                        return <Tables key={i.id} data={i}/>
                    })
                }
            </div>



        </div>
    </> );
}

export default Table;