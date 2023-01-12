import { GoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/header/Header";
import Region from "../components/pages/Home/Region";
import useHandleSession from "../hooks/useHandleSession";
import APIService from "../services/APIService";

import { Autoplay, Navigation, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { MdDelete, MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import BanRow from "../components/pages/Ban/BanRow";
import GeneralTable from "../components/GeneralTable";
import { useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import ChatBox from "../components/pages/Ban/ChatBox";
import hi from "date-fns/esm/locale/hi/index.js";
import { FaBan } from "react-icons/fa";
import BanAccount from "../components/pages/Ban/BanAccount";
import NoBanAccount from "../components/pages/Ban/NoBanAccount";

function BanDecisionPage () {

    const {id} = useParams();
    const [sessionLoaded] = useHandleSession(); 
    const userState = useSelector((state) => state.user);

    const [request, setRequest] = useState(null);
    const [chatHistories, setChatHistories] = useState([]);
    const [showBan, setShowBan] = useState(false);
    const [showNotBan, setShowNotBan] = useState(false);


    useEffect(() => {

        const fetchData = async() => {
            let history = []
            for(let i = 0; i < request.reports.length; ++i){
                await APIService(`/admin/chat/${request.reports[i].message.id}/history`, 'GET').then(data => {
                    history.push(data);
                    
                });
            }
            setChatHistories(history);
        }
        if(request === null){
            APIService('/admin/ban', 'GET').then(data => {
                data.map(req => {if(req.id == id) setRequest(req)})
            });
        }
        else{
            fetchData()
        }
    }, [request])



    console.log(5,chatHistories,request,  )

    return(
            <div>
                <Header/>
                <div className="h-full flex flex-1 flex-col ">
                <h1 className="mt-8  text-4xl font-black text-center">BAN REQUEST</h1>
                {request 
                    ? <>
                    
                    <div className="my-5 flex justify-center">
                        <div className="flex flex-col text-center">
                        <div className="flex mt-5">
                        <button  className="mt-5 lg:ml-5 lg:mt-0 btn-primary " onClick={()=>setShowNotBan(true)}>
                            <span>NOT BAN USER</span>
                        </button>

                        <div>
                        <button  className="mt-5 lg:ml-5 lg:mt-0 btn-delete " onClick={()=>setShowBan(true)}>
                            <span className="mr-2">BAN USER</span>
                            <FaBan size={20}/>
                        </button>
                        </div>
                        </div>
                        </div>
                    </div>

                    

                    <div className="justify-center flex-grow h-full">

                    
                    <Swiper
                        className="h-full"
                        loop={true}
                        modules={[Pagination]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: true
                        }}
                        pagination={{
                            el: '.pagination',
                            clickable: true
                        }}
                        slidesPerView={1}
                        >
                    {request ? Object.values(chatHistories).map( (history, i)=> (
                        <SwiperSlide key={`${i}`}><ChatBox reported={request.user} report={request.reports[i]} messages={history} /></SwiperSlide>
                    )) : "LOADING"}
                    </Swiper>
                    <div className="ml-1/2">
                        <div className="ml-1/2 pagination"/>
                    </div>
                </div>
                
                <BanAccount show={showBan} setShow={setShowBan} reported={request.user}/>
                <NoBanAccount setShow={setShowNotBan} show={showNotBan} reported={request.user} />
                </>
                : "LOADING"
                }
                </div>
            </div>
    )
}

export default BanDecisionPage;