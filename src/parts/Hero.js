import React from 'react'

export default function Hero() {
    function onSubmit() {

    }
    return (
        <div className='flex justify-center items-center'>
            <div className='w-1/2'>
                <h1 className='text-5xl text-white mb-5'>
                    <span className='text-teal-400'>The New</span> Way <br/> To Achieve{" "}
                    <span className='text-teal-400'>Skills</span>
                </h1>
                <p className='text-white text-lg mb-8 font-light'>
                    We provide tons of pathskill that you <br/> can choose and focun on
                </p>
                <form onSubmit={onSubmit}>
                    <input type="text" className='bg-white focus:outline-none border-0 px-6 py-3 w1/2'
                    placeholder='Your Email Address'/>
                    <button className='bg-orange-500 hover:bg-orange-500 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3'>
                        Daftar Now
                    </button>
                </form>
            </div>
            <div className='flex justify-end pt-24 pr-16'>
                <div className='relative' style={{width: 369, height:440}}>
                    <div className='absolute border-indigo-700 border-2 -mt-12 mr-6 right-0' style={{width: 324, height: 374}}>
                    </div>
                    <div className='absolute w-full h-full -mb-8 -ml-8'>
                        <img src="/images/img-hero.jpg" />
                    </div>
                    <div className='absolute z-10 bg-white py-3 px-4 mt-24' style={{transform: "translateX(-50%)", width:290}}>
                        <p className='text-gray-900 mb-2'>Metode Belajar santai seperti nonton film di netflix</p>
                        <span className='text-gray-600'>Allysa, Apps Developer</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
