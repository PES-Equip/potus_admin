import { GoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/header/Header";
import Region from "../components/pages/Home/Region";
import useHandleSession from "../hooks/useHandleSession";
import APIService from "../services/APIService";

import {Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { isBrowser } from "react-device-detect";
import ClockLive from "../components/ClockLive";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import CreateToken from "../components/pages/Tokens/CreateToken";


function TokenPage () {

    const [sessionLoaded] = useHandleSession(); 
    const userState = useSelector((state) => state.user);

    const [tokens, setTokens] = useState(null);
    const [showRefreshDialog, setShowRefreshDialog] = useState(false);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [selectedToken, setSelectedToken] = useState();


    useEffect(() => {

   
        if(tokens === null){
            APIService('/admin/tokens', 'GET').then(data => {
                setTokens(data.sort((a, b) => (a.id < b.id ? -1 : 1)));
                console.log(data)
            });
        }
    })




    return(
            <div>
                <Header/>
                
                <h1 className="mt-8 text-center text-4xl font-black">TOKENS</h1>
                {tokens 
                    ? <><div className="justify-center flex-grow h-full">
                         {/* NEW TOKEN */}
                <CreateToken tokens={tokens} setTokens={setTokens}/>

                {/*
                <GeneralTable 
                    header={<AdminTokensHeader/>}
                    body={<AdminTokensBody tokens={tokens} setSelectedToken={setSelectedToken} 
                            setShowDialogs={{
                                delete: setShowDeleteDialog,
                                refresh: setShowRefreshDialog,
                                edit: setShowEditDialog
                            }}/>}
                />

                <DeleteToken 
                    setShow={setShowDeleteDialog}
                    show={showDeleteDialog}
                    selectedToken={selectedToken}
                    setTokens={setTokens}
                    tokens={tokens}
                />

                <EditToken 
                    setShow={setShowEditDialog}
                    show={showEditDialog}
                    selectedToken={selectedToken}
                    setTokens={setTokens}
                    tokens={tokens}
                />

                <RefreshToken 
                    setShow={setShowRefreshDialog}
                    show={showRefreshDialog}
                    selectedToken={selectedToken}
                    setTokens={setTokens}
                    tokens={tokens}
                />

                        */}


                </div></>
                : "LOADING"
                }
            </div>
    )
}

export default TokenPage;