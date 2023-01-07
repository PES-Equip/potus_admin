import { Menu } from "@headlessui/react";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useSelector } from "react-redux";


export default function HeaderMenu() {

    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;
    const userState = useSelector((state) => state.user);

    const handleOpen = () => {
        setIsOpen(!isOpen);
        
    }


    return(
        <Menu as="div" className="" >
            <Menu.Button
                className="flex flex-col h-12 w-12 border-2 border-white rounded justify-center items-center group"
                onClick={handleOpen}
                >
                <div
                    className={`${genericHamburgerLine} ${
                    isOpen
                        ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                        : "opacity-50 group-hover:opacity-100"
                    }`}
                />
                <div
                    className={`${genericHamburgerLine} ${
                    isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                    }`}
                />
                <div
                    className={`${genericHamburgerLine} ${
                    isOpen
                        ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                        : "opacity-50 group-hover:opacity-100"
                    }`}
                />
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
                
            <Menu.Items className="h-[calc(100vh-96px)] overflow-auto  absolute z-20 left-0 mt-6 lg:w-80 w-full  bg-blue-600 shadow-2xl border-t-green-900 border-t-2 border-solid">
                <div className="text-primary">
                
                
                    
                </div>
            </Menu.Items>
            </Transition>
        </Menu>

    )
}