import { Component, useEffect, useState } from "react";
import React from "react";
import { useNavigate } from 'react-router-dom';
import useLogout from "../../hooks/useLogout";

export default function LogoutPage () {
    const navigate = useNavigate();

    useLogout();

    useEffect(() => {
        navigate("/login");
    }, [navigate])
   


    return(
        <>
        </>
    )
}