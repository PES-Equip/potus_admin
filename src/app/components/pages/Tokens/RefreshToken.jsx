import { useState } from "react";
import { GiToken } from "react-icons/gi";
import APIService from "../../../services/APIService";
import FormDialog from "../../FormDialog";

export default function RefreshToken({
    show,
    setShow,
    selectedToken,
    tokens,
    setTokens,
}){

    const [error,setError] = useState();


    
    const handleRefresh = async() => {

        const response = await APIService(`/admin/tokens/${selectedToken.id}`, 'POST');
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
            setError(response.message);
        }
    }

    const handleShow = () => {
        setShow(false);
        setError("");
    }

    return(
        <>
            { show &&
                <FormDialog 
                icon={<GiToken size={25} className="fill-white"/>}
                title="REFRESH TOKEN"
                confirmText="REFRESH"
                handleAction={handleRefresh}
                handleShow={handleShow} 
                fields={[]}
                error={error}
                />   
            }
        </>
    )
}