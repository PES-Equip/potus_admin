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
import GeneralTable from "../components/GeneralTable";
import TokenRow from "../components/pages/Tokens/TokenRow";


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

                
                <GeneralTable 
                    header={ <>
                            <tr className="">
                                <th scope="col" className='lg:w-1/12 text-sm text-center font-medium text-gray-900 px-6 py-4'>
                                    #
                                </th>
                                <th scope="col"  className='lg:w-1/12 text-sm text-center font-medium text-gray-900 px-6 py-4'>
                                    Name
                                </th>
                                <th scope="col"  className='lg:w-5/12 text-sm text-center font-medium text-gray-900 px-6 py-4'>
                                    Value
                                </th>
                                <th scope="col"  className='lg:w-5/12 text-sm text-center font-medium text-gray-900 px-6 py-4'>
                                    Actions
                                </th>
                            </tr>
                        </>}
                    body={<>
                        { Object.values(tokens).map((token,index) => (
                            <TokenRow 
                                key={`row-${index}`}
                                token={token}
                                index={index}
                                setSelectedToken={setSelectedToken}
                                setShowDialogs={{
                                    delete: setShowDeleteDialog,
                                    refresh: setShowRefreshDialog,
                                    edit: setShowEditDialog
                                }}
                                />
                        ))}
                        </>}
                />

                </div></>
                : "LOADING"
                }
            </div>
    )
}

export default TokenPage;