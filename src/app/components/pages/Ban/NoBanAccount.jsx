import { useState } from "react";
import { GiToken } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import APIService from "../../../services/APIService";
import DeleteDialog from "../../DeleteDialog";
import FormDialog from "../../FormDialog";

export default function NoBanAccount({
    show,
    setShow,
    reported,
}){

    const [error,setError] = useState();
    const navigate = useNavigate();



    const handleBan = async() => {

         const response = await APIService(`/admin/ban/${reported.id}`, 'DELETE');
            if(! response.error){
                navigate('/users')
            }
        
    }

    return(
        <>
            { show &&
                <FormDialog
                icon={<GiToken size={25} className="fill-white"/>}
                title="NOT BAN ACCOUNT"
                text="Please confirm that you DON'T want to ban this account"
                confirmText="CONFIRM"
                handleAction={handleBan}
                handleShow={()=>setShow(false)}
                fields={[]}
                item={""}
                error={error}
                />
            }
        </>
    )
}