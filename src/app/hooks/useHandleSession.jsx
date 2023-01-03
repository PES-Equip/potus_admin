import { useState, useEffect } from "react";
import useHandleAuth from "./useHandleAuth";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../reducers/actions/UserActions";

const useHandleSession = () => {

    const [authCorrect] = useHandleAuth();
    const [sessionCorrect, setSessionCorrect] = useState(false);
    const userState = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();


   useEffect(() => {
      if(authCorrect){
        if(userState.error){
          navigate("/logout")
        }
        if(! userState.user || ! userState.user.id){
          dispatch(getUserProfile());
        }else{
          setSessionCorrect(true);
        }
      }
    }, [userState, getUserProfile, dispatch, navigate, authCorrect,setSessionCorrect])


    return [sessionCorrect];
};

export default useHandleSession;