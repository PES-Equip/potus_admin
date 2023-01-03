import { GoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../../reducers/actions/UserActions";
import { authSuccess } from "../../reducers/AuthSlice";
import potus from '/potus.png'



function LoginPage () {

    const dispatch = useDispatch();
    const navigate = useNavigate();






    const handleLogin = async (credentialResponse) => {
        dispatch(authSuccess(credentialResponse.credential))
                localStorage.setItem("token", JSON.stringify(credentialResponse.credential));

                dispatch(getUserProfile());
            
    }



    const userState = useSelector((state) => state.user);
    const [error, setError] = useState("");


    const addError = (message) => {
        setError(message);
        setTimeout(()=> {
            setError();
        },3500);
    }

    useEffect(() => {
        if(userState.error){
            addError("User is not admin");
        }

        if(userState.user.admin){
            navigate("/"); 
        
        }
    }, [userState])
    //console.log(data,error,loading)
    return(
        <div className="h-screen  flex flex-col  justify-center items-center">
            
            <div className="text-center">
                <h1 className="font-black underline decoration-green-600 italic text-3xl mb-1">POTUS</h1>
                <h2>WEB ADMIN</h2>
            </div>

            <div className="mb-4">
                <img className="h-full" src={potus}/>
            </div>

            <span className="mb-4 text-red-500 font-medium">
                {error}
            </span>

            <div>
            <GoogleLogin
            onSuccess={credentialResponse => handleLogin(credentialResponse)}
            onError={() => {
                addError('Login Failed with google');
            }}
            />
            </div>
        </div>
    )
}

export default LoginPage;