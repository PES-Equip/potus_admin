import { useEffect, useState } from "react";
import Clock from "react-clock";
import 'react-clock/dist/Clock.css';

export default function ClockLive({}) {


    const [value, setValue] = useState(new Date());


    useEffect(() => {

        const interval = setInterval(() => setValue(new Date()), 1000);

        return () => {
          clearInterval(interval);
        };
    })

    return (
        <><div className="">
            <Clock className="" value={value} /> 
            <span className="font-medium text-xl">{value.toLocaleTimeString()}</span>
        </div></>
    )
}