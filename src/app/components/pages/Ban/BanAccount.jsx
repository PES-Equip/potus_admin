import { useState } from "react";
import { GiToken } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import APIService from "../../../services/APIService";
import DeleteDialog from "../../DeleteDialog";
import FormDialog from "../../FormDialog";

export default function BanAccount({
    show,
    setShow,
    reported,
}){

    const [error,setError] = useState();
    const navigate = useNavigate();

    const [reason, setReason] = useState();

    const fields = [{
        value: reason,
        setValue: setReason,
        name: "REASON"
    }]

    const handleBan = async() => {
        if(reason === undefined || reason === ""){
            setError("REASON MUST BE DEFINED")
        }
        else{
         const response = await APIService(`/admin/ban/${reported.id}`, 'POST', {reason: reason});
            if(! response.error){
                navigate('/users')
            }
        }
    }

    return(
        <>
            { show &&
                <FormDialog
                icon_color="bg-red-600"
                icon={<GiToken size={25} className="fill-white"/>}
                title="BAN ACCOUNT"
                text="Please confirm that you want to ban this account"
                confirmText="CONFIRM"
                fields={fields}
                handleAction={handleBan}
                handleShow={()=>setShow(false)}
                item={""}
                error={error}
                />
            }
        </>
    )
}