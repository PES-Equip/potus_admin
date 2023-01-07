import Registry from "./Registry"


export default function Region({region}) {


    return (
        <><div className="border-4 border-blue-900 rounded-md m-2  py-2 flex h-[90%] flex-col items-center">

            <span className="text-center font-medium border-b-4">{region.name.split('d_').join(`d'`).split('_').join(` `).toUpperCase()}</span>   
            {Object.values(region.registry)?.map( (gas, i) => <Registry key={`g-${i}`} registry={gas}/>)}
             
        </div></>
    )
}