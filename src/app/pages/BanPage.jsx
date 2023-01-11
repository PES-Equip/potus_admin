import { GoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/header/Header";
import Region from "../components/pages/Home/Region";
import useHandleSession from "../hooks/useHandleSession";
import APIService from "../services/APIService";

import BanRow from "../components/pages/Ban/BanRow";
import GeneralTable from "../components/GeneralTable";


function BanPage () {

    const [sessionLoaded] = useHandleSession(); 
    const userState = useSelector((state) => state.user);

    const [requests, setRequests] = useState(null);


    useEffect(() => {

   
        if(requests === null){
            APIService('/admin/ban', 'GET').then(data => {
                setRequests(data.sort((a, b) => (a.id < b.id ? -1 : 1)));
                console.log(data)
            });
        }
    })




    return(
            <div>
                <Header/>
                <h1 className="mt-8 text-center text-4xl font-black">BAN REQUESTS</h1>
                {requests 
                    ? <><div className="justify-center flex-grow h-full">

                <GeneralTable 
                    header={ <>
                            <tr className="">
                                <th scope="col" className='lg:w-1/12 text-sm text-center font-medium text-gray-900 px-6 py-4'>
                                    #
                                </th>
                                <th scope="col"  className='lg:w-1/12 text-sm text-center font-medium text-gray-900 px-6 py-4'>
                                    Reports
                                </th>
                            </tr>
                        </>}
                    body={<>
                        { Object.values(requests).map((token,index) => (
                            <BanRow 
                                key={`row-${index}`}
                                ban_request={token}
                                index={index}
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

export default BanPage;