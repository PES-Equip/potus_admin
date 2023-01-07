import { MdDelete, MdEdit } from "react-icons/md";
import { BiHide, BiRefresh, BiShow } from "react-icons/bi";
import { useState } from "react";

export default function TokenRow({
    token,
    index,
    setShowDialogs,
    setSelectedToken
}){

    const [showToken, setShowToken] = useState(false);
    return(
        <>
            <tr key={`g-${index}`} className="border-b transition duration-300 ease-in-out hover:bg-gray-200">
                <td className="px-6 py-4 text-center text-sm font-medium text-gray-900">{token.id}</td>
                <td className="text-sm text-center text-gray-900 font-light px-6 py-4 break-all">{token.name}</td>
                <td className="w-96 text-sm text-center text-gray-900 font-light px-6 py-4  break-all">
                    {showToken ? token.token : "*****************"}
                    
                </td>
                <td className="text-sm flex flex-col lg:flex-row  lg:space-x-2 lg:space-y-0 space-y-2 items-center content-center justify-items-center justify-center text-gray-900 font-light px-6 py-4">
                    <div>
                        <button className="border-gray-400 border-2 rounded bg-gray-200 hover:bg-gray-300 active:bg-gray-400 font-bold  py-2 px-4 inline-flex items-center"
                                onClick={() => setShowToken(!showToken)}>
                            {showToken 
                                ? <BiHide size={20}/>
                                : <BiShow size={20}/>
                            } 
                        </button>
                    </div>
                    <div>
                        <button className="btn-edit" onClick={()=>{setShowDialogs.edit(true); setSelectedToken(token);}} >
                            <MdEdit size={20} />
                        </button>
                    </div>
                    <div>
                        <button className="btn-primary" onClick={()=>{setShowDialogs.refresh(true); setSelectedToken(token);}} >
                            <BiRefresh size={22} className=""/>
                        </button>
                    </div>
                    <div>
                        <button onClick={()=>{setShowDialogs.delete(true); setSelectedToken(token);}} className="mt-5 lg:ml-5 lg:mt-0 btn-delete ">
                            <MdDelete size={20}/>
                        </button>
                    </div>
                </td>
            </tr> 
        </>
    )
}