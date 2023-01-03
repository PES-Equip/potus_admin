import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/header/Header";
import useHandleSession from "../hooks/useHandleSession";





function HomePage () {

    const [sessionLoaded] = useHandleSession(); 
    const userState = useSelector((state) => state.user);

    return(
            <div>
                <Header/>
            </div>
    )
}

export default HomePage;