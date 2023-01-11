import { MdDelete, MdEdit } from "react-icons/md";
import { BiHide, BiRefresh, BiShow } from "react-icons/bi";
import { useState } from "react";

export default function BanRow({
    ban_request,
    index,
}){

    const handleClick = () => {
        window.location=`users/${ban_request.id}`;
    }

    return(
        <> 
            <tr key={`g-${index}`} className="border-b transition duration-300 ease-in-out hover:bg-gray-200 active:bg-gray-400 cursor-pointer" onClick={handleClick}>
                <td className="px-6 py-4 text-center text-sm font-medium text-gray-900">{ban_request.id}</td>
                <td className="text-sm text-center text-gray-900 font-light px-6 py-4 break-all">{Object.assign([], ban_request.reports).length}</td>
            </tr> 
        </>
    )
}