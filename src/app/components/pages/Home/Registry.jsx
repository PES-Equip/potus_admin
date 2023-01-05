import { useEffect, useState } from "react"


export default function Registry({registry}) {


    const [type,setType] = useState();

    useEffect(() => {

        if(! type && registry.value){

            switch(registry.dangerLevel){
                case "NoDanger":
                    setType("text-green-500");
                    break;
                case "Low":
                    setType("text-yellow-700");
                    break;
                case "Moderate":
                    setType("text-yellow-400");
                    break;
                case "High":
                    setType("text-orange-600");
                    break;
                case "Hazardous":
                    setType("text-red-600");
                    break;
            }
        }
    })


    return (
        <><div>
           <span className={`${type}`}>{`${registry.name}: ${registry.value ? `${registry.value.toFixed(2)} ${registry.unit.replace('_', '/')}` : '-'}`}</span>
        </div></>
    )
}