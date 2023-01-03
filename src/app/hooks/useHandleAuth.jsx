import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authSuccess } from "../reducers/AuthSlice";
import { getCurrentUser } from "../Utils";


const useHandleAuth = () => {

    const authState = useSelector((state) => state.auth);
    const userState = useSelector((state) => state.user);
    const [session, setSession] = useState(getCurrentUser());
    const [authCorrect, setAuthCorrect] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

   useEffect(() => {
        if(! authState.isAuth){
            if(session === null){
                navigate("/login");
            } else {
                setAuthCorrect(true)
                dispatch(authSuccess(session))
            }
            /*
            session === null ?
                navigate("/login") :
                dispatch(authSuccess(session))
                */
                
        }  
    }, [userState,authState,session, dispatch, navigate, authSuccess, setAuthCorrect])
    return [authCorrect];
};

export default useHandleAuth;