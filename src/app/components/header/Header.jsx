import { Fragment, useContext } from 'react'
import { Popover, Transition } from '@headlessui/react'
import HeaderMenu from './HeaderMenu'


import ProfileButton from './ProfileButton';


export default function Header() {

    
    //const {session, setSession} = useContext(sessionContext);

    return(
        <>
        <Popover className="static w-full bg-blue-400 z-5 shadow-black shadow">
            <div className="mx-auto max-w-7x1 px-4 sm:px-6">
                <div className="flex items-center justify-center py-6">
                    <div className='flex-1'><HeaderMenu/></div>
                    
                    <div className="flex-1 justify-items-center">
                        <h1 className="text-center text-white text-3xl font-black">
                            <a href="/">
                                POTUS ADMIN
                            </a>
                            
                        </h1>
                    </div> 
                    <div className='flex-1  flex justify-end'>
                        <ProfileButton/>
                    </div>
                </div>

            </div>  
        </Popover>
        </>
    )
}