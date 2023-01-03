import { Menu } from "@headlessui/react";
import { useEffect, useState, useTransition } from "react";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import {MdAccountCircle} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { MdLogout } from "react-icons/md";

export default function ProfileButton(){

    const userState = useSelector((state) => state.user);
    return(
        <Menu as="div" className="flex content-center" >
            <Menu.Button>
                <div className='flex justify-end content-center items-center btn-primary'>
                    <MdAccountCircle size={30} className="fill-white group-hover:fill-slate-200 group-active:fill-slate-100"/>
                    <span className="hidden lg:block ml-2 text-primay" >
                        {userState.user.email ? userState.user.email.split('@')[0] : ""}
                    </span>
                </div>
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                
            <Menu.Items className="mt-[10vh] lg:mt-[7.3vh] h-50 rounded-bl-lg absolute z-20 right-0 mt-17.5 w-full lg:w-40  bg-green-700 shadow-2xl border-t-green-900 border-t-2 border-solid">
                <div className="text-primay grid justify-items-center">
                    <Menu.Item className="w-full text-center flex items-center  justify-center btn-secondary py-3">
                        {({ active }) => (
                            <a href="/profile" className="">
                                <MdAccountCircle size={22} className="fill-white"/>
                                <span className="ml-2 text-primay" >
                                    PROFILE
                                </span>
                            </a>
                        )}
                    </Menu.Item>
                    
                    <Menu.Item className="w-full  rounded-bl-lg  text-center flex items-center  justify-center bg-green-500 hover:bg-green-600 active:bg-green-900 py-3">
                    {({ active }) => (
                        <a href="/logout" className="">
                            <MdLogout size={22} className="fill-white"/>
                            <span className="ml-2 text-primay text-white font-black" >
                                Logout
                            </span>
                        </a>
                    )}
                    </Menu.Item>
                    

                    
                </div>
            </Menu.Items>
            </Transition>
        </Menu>
    )
}