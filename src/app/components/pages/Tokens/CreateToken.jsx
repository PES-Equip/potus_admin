import { useState } from "react";
import { GiToken } from "react-icons/gi";
import { HiPlusCircle } from "react-icons/hi";
import APIService from "../../../services/APIService";
import FormDialog from "../../FormDialog";


export default function CreateToken({
    tokens,
    setTokens
}){

    const [name,setName] = useState("");
    const [error,setError] = useState();
    const [showDialog, setShowDialog] = useState(false);

    const fields = [{
        value: name,
        setValue: setName,
        name: "name"
    }]

    const createToken = async () => {

        const response = await APIService('/admin/tokens','POST',{name:name});
        

        if(response.id){
            setError();
            setName("");
            setTokens([...tokens,response].sort((a, b) => (a.id < b.id ? -1 : 1)));
            setShowDialog(false);
        }
        else{
            setError(response.message);
        }
    }

    const handleShow = () => {
        setError();
        setName("");
        setShowDialog(false);
    }

    return(
        <>
            <div className="my-4 py-4 flex  w-full justify-center">
                <button onClick={()=>{setShowDialog(!showDialog)}}>
                    <HiPlusCircle  size={80} className="fill-blue-400 hover:fill-blue-500 active:fill-blue-600"/>
                </button>
            </div>
            { showDialog &&
                <FormDialog 
                    icon={<GiToken size={25} className="fill-white"/>}
                    title={"CREATE TOKEN"}
                    confirmText={"CREATE"}
                    handleAction={createToken}
                    handleShow={handleShow} 
                    fields={fields}
                    error={error}
                />   
            }
        </>
    )
}