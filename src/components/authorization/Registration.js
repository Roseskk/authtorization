import {useState} from "react";
import validator from "validator/es";

export default function Registration() {
    const [userColor,setUserColor] = useState('bg-red-500');
    const [emailColor,setEmailColor] = useState('bg-red-500');
    const [loginColor,setLoginColor] = useState('bg-red-500');
    const [passwordColor,setPasswordColor] = useState('bg-red-500');
    const [formColor,setFormColor] = useState('opacity-20');


    const handleUser=(e)=> {
        if (e.target.value.length >= 3) {
            setUserColor('bg-green-500 shadow-2xl')
        } else {
            setUserColor('bg-red-500')
        }
    }
    const handleEmail=(e)=> {
        if (validator.isEmail(e.target.value)) setEmailColor('bg-green-500 shadow-2xl'); else { setEmailColor('bg-red-500') }
    }
    const handleLogin=(e)=> {
        if (e.target.value.length>=5) setLoginColor('bg-green-500 shadow-2xl'); else { setLoginColor('bg-red-500') }
    }
    const handlePassword=(e)=> {
        if (validator.isStrongPassword(e.target.value)) setPasswordColor('bg-green-500 shadow-2xl'); else { setPasswordColor('bg-red-500') }
    }
    const handleFormColor=(e)=> {
        e.preventDefault()
        if (userColor.includes('green') && emailColor.includes('green') && loginColor.includes('green') && passwordColor.includes('green')) console.log('send'); else console.log('decline')}



    return(
        <div className={'absolute w-form  h-form rounded bg-gray-50 overflow-hidden '}>
            <div className={'p-6 overflow-hidden bg-form bg-cover relative  flex items-center justify-center overflow-hidden'}>
                <span className={'text-4xl opacity-90 text-white font-montserratRegular'}>Registration</span>
                <div className={''}></div>
            </div>
            <form onSubmit={handleFormColor} className={'flex  w-full gap-2 p-3 mt-2 '}>
                <div className={'flex flex-col w-3/4'}>
                    <div className={'flex items-center gap-5 relative'}>
                        <fieldset className={'relative w-full bg-white rounded flex gap-5 border '}>
                            <legend className={'ml-4 font-montserratRegular text-xxs'}><label className={'opacity-60'}>Username</label></legend>
                            <input onChange={handleUser} className={'w-full h-10 border-none focus:outline-none focus:ring-0 rounded pl-4 pr-4'} placeholder={''} type={'text'}/>
                            <div className={`absolute rounded-full ${userColor} transition ease-in-out delay-500  w-2 h-2 items-center flex justify-center -top-2 right-0`}> </div>
                        </fieldset>
                    </div>
                    <div className={'flex items-center gap-5 relative'}>
                        <fieldset className={'relative w-full bg-white rounded flex gap-5 border '}>
                            <legend className={'ml-4 font-montserratRegular text-xxs'}><label className={'opacity-60'}>E-mail</label></legend>
                            <input onChange={handleEmail} className={'w-full h-10 border-none focus:outline-none focus:ring-0 rounded pl-4 pr-4'} placeholder={''} type={'email'}/>
                            <div className={`absolute rounded-full ${emailColor} transition ease-in-out delay-500  w-2 h-2 items-center flex justify-center -top-2 right-0`}> </div>
                        </fieldset>
                    </div>
                    <div className={'flex items-center gap-5 relative'}>
                        <fieldset className={'relative w-full bg-white rounded flex gap-5 border '}>
                            <legend className={'ml-4 font-montserratRegular text-xxs'}><label className={'opacity-60'}>Login</label></legend>
                            <input onChange={handleLogin} className={'w-full h-10 border-none focus:outline-none focus:ring-0 rounded pl-4 pr-4'} placeholder={''} type={'text'}/>
                            <div className={`absolute rounded-full ${loginColor} transition ease-in-out delay-500  w-2 h-2 items-center flex justify-center -top-2 right-0`}> </div>
                        </fieldset>
                    </div>
                    <div className={'flex items-center gap-5 relative'}>
                        <fieldset className={'relative w-full bg-white rounded flex gap-5 border '}>
                            <legend className={'ml-4 font-montserratRegular text-xxs'}><label className={'opacity-60'}>Password</label></legend>
                            <input onChange={handlePassword} className={'w-full h-10 border-none focus:outline-none focus:ring-0 rounded pl-4 pr-4'} placeholder={''} type={'password'}/>
                            <div className={`absolute rounded-full ${passwordColor} transition ease-in-out delay-500  w-2 h-2 items-center flex justify-center -top-2 right-0`}> </div>
                        </fieldset>
                    </div>
                </div>
                <div  className={`w-1/4 bg-gray-400 rounded ${(userColor.includes('green') && emailColor.includes('green') && loginColor.includes('green') && passwordColor.includes('green')) ? 'opacity-100 animate-pulse' : 'opacity-20'} transition delay-300 ease-in-out `}>
                    <button disabled={(userColor.includes('green') && emailColor.includes('green') && loginColor.includes('green') && passwordColor.includes('green')) ? false : true} className={'w-full h-full text-2xl font-montserratBold text-white items-center justify-center flex flex-col gap-3'}><span>S</span><span>E</span><span>N</span><span>D</span></button>
                </div>
            </form>
        </div>
    )
}