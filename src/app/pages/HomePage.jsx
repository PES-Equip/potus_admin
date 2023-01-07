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


function HomePage () {

    const [sessionLoaded] = useHandleSession(); 
    const userState = useSelector((state) => state.user);

    const [regions, setRegions] = useState(null);



    useEffect(() => {

   

        if(regions === null){
            APIService('/airquality/regions', 'GET').then(data => {
                setRegions(data);
            });
        }
    })




    return(
            <div>
                <Header/>
                <div className="h-full flex flex-1 flex-col ">
                    <h1 className="text-center mt-5 text-3xl font-black">REGIONS</h1>
                    <div className="flex">
                        <div className="flex flex-col absolute right-5 mt-10">
                                <span className="text-red-600 font-medium">HAZARDOUS</span>
                                <span className="text-orange-600 font-medium">HIGH</span>
                                <span className="text-yellow-400 font-medium">MODERATE</span>
                                <span className="text-yellow-700 font-medium">LOW</span>
                                <span className="text-green-500 font-medium">NO DANGER</span>

                        </div>
                    <div className="my-4 py-4 w-full text-center justify-center items-center flex flex-1 flex-col">
                        <ClockLive className="" />
                    </div>
                    </div>
                    <div className="flex flex-1">

                        { isBrowser &&
                            <div className="w-1/12  flex justify-center items-center">
                            <button className="navPrev transition rounded-full h-full active:scale-110">
                                <MdNavigateBefore size={50} className="fill-black active:fill-gray-700"/>
                            </button>
                            </div>
                        }

                        <div className={`h-full ${isBrowser ? 'w-10/12 mt-5 ' : 'w-full'}`}>
                            <Swiper
                            className="h-full"
                            loop={true}
                            modules={[Navigation, Pagination, Autoplay]}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: true
                            }}
                            navigation={{
                                prevEl: '.navPrev',
                                nextEl: '.navNext',
                                clickable: true,
                            }}
                            pagination={{
                                el: '.pagination',
                                clickable: true
                            }}
                            slidesPerView={4}
                            
                            breakpoints={{
                                "@0.00": {
                                slidesPerView: 1,
                                spaceBetween: 25,
                                },
                                "@0.50": {
                                slidesPerView: 1,
                                spaceBetween: 25,
                                },
                                "@1.00": {
                                slidesPerView: 4,
                                spaceBetween: 25,
                                },
                                "@1.25": {
                                slidesPerView: 4,
                                spaceBetween: 20,
                                },
                                "@1.50": {
                                slidesPerView: 5,
                                spaceBetween: 30,
                                },
                                "@1.75": {
                                slidesPerView: 5,
                                spaceBetween: 20,
                                },
                            }}
                            >
                        {regions ? Object.values(regions)?.map( (region, i)=> (
                          <SwiperSlide key={`${i}`}><Region key={`m-${i}`}  region={region} /></SwiperSlide>
                        )) : "LOADING"}
                        </Swiper>
                    
                            </div>
                            { isBrowser &&
                            <div className="w-1/12 flex justify-center items-center">
                                <button className="navNext transition rounded-full h-1/6 active:scale-110">
                                <MdNavigateNext size={50} className="fill-black active:fill-gray-700"/>
                                </button>
                            </div>
                         }
                    </div>
                    
                </div>
            </div>
    )
}

export default HomePage;