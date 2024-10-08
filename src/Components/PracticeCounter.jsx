import { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const counterData = [
    { id: 1, end: 5, suffix: 'M+', label: "Hustler’s Earning", duration: 2 },
    { id: 2, end: 25, suffix: 'K+', label: 'Community', duration: 2 },
    { id: 3, end: 4.9, suffix: '', label: 'Satisfaction', duration: 2 },
    { id: 4, end: 13, suffix: '+', label: 'Partners', duration: 2 },
];

const PracticeCounter = () => {
    const [show, setShow] = useState(false);
    return (
        <ScrollTrigger onEnter={() => setShow(true)}>
            <div className='bg-gradient-to-b from-[#7611fb] to-[#230a45]'>
                <div className='max-w-[1200px] mx-auto p-8'>
                    <div className='flex justify-between'>
                        {
                            counterData.map((item) => {
                                return (
                                    <div key={item.id} className="flex flex-col items-center text-white">
                                        <div className="flex items-center justify-center xl:text-[45px] text-xl">
                                            {
                                                show && <CountUp
                                                    start={0}
                                                    end={item.end}
                                                    duration={3}
                                                />
                                            }{item.suffix}
                                        </div>
                                        <p className='mt-4 text-xl font-bold text-center xl:text-[25px]'>{item.label}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </ScrollTrigger>
    )
}

export default PracticeCounter;