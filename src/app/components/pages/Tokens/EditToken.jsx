import { useState } from "react";
import { GiToken } from "react-icons/gi";
import APIService from "../../../services/APIService";
import FormDialog from "../../FormDialog";

export default function EditToken({
    show,
    setShow,
    selectedToken,
    tokens,
    setTokens,
}){

    const [error,setError] = useState();
    const [name,setName] = useState("");
    const fields = [{
        value: name,
        setValue: setName,
        name: 'New name'
    }]

    
    const handleEdit = async() => {

        const response = await APIService(`/admin/tokens/${selectedToken.id}`, 'PUT', {name: name});
        console.log(response)
        if(response.id){
            
            let updatedTokens = tokens.map(obj => {
                if (obj.id === selectedToken.id)
                    return response
                else return obj
            })
            setTokens(updatedTokens);
            handleShow();
        }
        else{
            setError(response.message)
        }
    }

    const handleShow = () => {
        setShow(false);
        setName("");
        setError("");
    }

    return(
        <>
            { show &&
                <FormDialog 
                icon={<GiToken size={25} className="fill-white"/>}
                icon_color="bg-yellow-500"
                title="RENAME API TOKEN"
                confirmType="btn-edit"
                confirmText="EDIT"
                handleAction={handleEdit}
                handleShow={handleShow} 
                fields={fields}
                error={error}
                />   
            }
        </>
    )
}