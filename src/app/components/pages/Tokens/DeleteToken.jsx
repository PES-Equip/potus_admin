import { useState } from "react";
import { GiToken } from "react-icons/gi";
import APIService from "../../../services/APIService";
import DeleteDialog from "../../DeleteDialog";

export default function DeleteToken({
    show,
    setShow,
    selectedToken,
    tokens,
    setTokens,
}){

    const [error,setError] = useState();

    const handleDelete = async() => {

        const response = await APIService(`/admin/tokens/${selectedToken.id}`, 'DELETE');
        if(! response.error){
            let newTokens = tokens;

            setTokens(newTokens.filter(item => item !== selectedToken))
            setShow(false);
        }
    }

    return(
        <>
            { show &&
                <DeleteDialog
                icon={<GiToken size={25} className="fill-white"/>}
                title="DELETE TOKEN"
                text="Please confirm that you want to delete this token:"
                confirmText="CONFIRM"
                handleAction={handleDelete}
                handleShow={()=>setShow(false)}
                item={selectedToken.name}
                />
            }
        </>
    )
}