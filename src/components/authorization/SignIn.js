import {useState} from "react";
import validator from "validator/es";
import { useSelector, useDispatch } from 'react-redux'
import {signIn} from "../../app/slice/switch";


export default function SignIn() {

    const switcher = useSelector((state)=>state.switcher.value)
    const dispatch = useDispatch()


    const handleSwitch=(e)=>{
        dispatch(signIn())
    }


    return(
        <div className={`absolute w-form  h-form rounded bg-gray-50 overflow-hidden ${switcher ? 'translate-x-30': 'translate-x-0'} transition ease-in-out delay-500 z-10`}>
            <div className={'relative mt-5 overflow-hidden  relative  flex items-center justify-center overflow-hidden'}>
                <span className={'text-4xl opacity-90 text-gray-500 font-montserratThin tracking-widest'}>Sign In</span>
                <div className={''}></div>
            </div>
            <form  className={'flex  w-full gap-2 p-3  '}>
                <div className={'flex flex-col w-3/4'}>
                    <div className={'flex items-center gap-5 relative'}>
                        <fieldset className={'relative w-full bg-white rounded flex gap-5 border '}>
                            <legend className={'ml-4 font-montserratRegular text-xxs'}><label className={'opacity-60'}>Username</label></legend>
                            <input className={'w-full h-10 border-none focus:outline-none focus:ring-0 rounded pl-4 pr-4'} placeholder={''} type={'text'}/>
                        </fieldset>
                    </div>
                    <div className={'flex items-center gap-5 relative'}>
                        <fieldset className={'relative w-full bg-white rounded flex gap-5 border '}>
                            <legend className={'ml-4 font-montserratRegular text-xxs'}><label className={'opacity-60'}>Password</label></legend>
                            <input   className={'w-full h-10 border-none focus:outline-none focus:ring-0 rounded pl-4 pr-4'} placeholder={''} type={'password'}/>
                        </fieldset>
                    </div>
                </div>
            </form>
            <div className={'flex flex-col gap-5 items-center justify-center'}>
                <span className={'text-3xl text-gray-500 font-montserratThin tracking-widest'}>VIA Socials</span>
                <div className={'flex gap-5 items-center justify-center'}>
                    <div className={'border pl-2 pr-2 pt-1 pb-1 rounded bg-green-500'}>
                        <span className={'font-montserratBold text-white'}>Spotify</span>
                    </div>
                    <div className={'border pl-2 pr-2 pt-1 pb-1 rounded bg-orange-500'}>
                        <span className={'font-montserratBold text-white'}>Soundcloud</span>
                    </div>
                    <div className={'border pl-2 pr-2 pt-1 pb-1 rounded bg-blue-500'}>
                        <span className={'font-montserratBold text-white'}>VK Music</span>
                    </div>
                </div>
                <div className={''}>
                    <button onClick={handleSwitch} className={'text-gray-500 text-base font-montserratRegular'}>Registration &rarr;</button>
                </div>
            </div>
        </div>
    )
}