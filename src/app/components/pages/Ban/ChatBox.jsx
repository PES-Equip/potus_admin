import { MdDelete, MdEdit } from "react-icons/md";
import { BiHide, BiRefresh, BiShow } from "react-icons/bi";
import { useState } from "react";
import { format } from "date-fns";

export default function ChatBox({
    reported,
    report,
    messages,
    index,
}){

    //console.log("TASDA", messages, report)
    return(
        <> 
            <div className="border-4 border-blue-900  rounded-md m-2  py-2 h-[90%] ">
                {messages ? messages.map((message,i) => (
                    <div key={`m-${i}`} className="">
                    <span className="mx-4 text-slate-600">{format(new Date(message.date), "HH:mm:ss")}</span>
                    <span className={`mr-2 ${message.sender.id === reported.id ? "text-red-600" : message.sender.id === report.reporter.id ? "text-green-600" : ""}`}> {`${message.sender.username}`}:</span>
                     {message.message}
                </div>))
                : "LOADING"}
            </div>
        </>
    )
}