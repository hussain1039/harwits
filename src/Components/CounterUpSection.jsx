// import React, { useState } from 'react'
// import CountUp from 'react-countup';
// import ScrollTrigger from 'react-scroll-trigger';

// const data = [
//   {
//     id: 1,
//     count: 'M+',
//     text: "Hustler's Earning",
//     end: 5
//   },
//   {
//     id: 2,
//     count: 'K+',
//     text: "Community",
//     end: 25
//   },
//   {
//     id: 3,
//     count: '.9',
//     text: "Satisfaction",
//     end: 4
//   },
//   {
//     id: 4,
//     count: '+',
//     text: "Partners",
//     end: 13
//   },
// ]

// const CounterUpSection = () => {
//   const [counter, setCounter] = useState(false);
//   return (
//     <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
//       <div className='bg-gradient-to-b from-[#7611fb] to-[#230a45] py-[3rem] lg:py-[3.5rem]'>
//         <div className='container flex flex-wrap justify-around gap-3 text-center text-white sm:gap-0'>
//           {
//             data.map((data) => {
//               return (
//                 <div key={data.id}>
//                   <h1 className='text-4xl font-bold'>{counter && <CountUp start={0} end={data.end} duration={3} delay={0} />}{data.count}</h1>
//                   <h2 className='text-[1.3rem] font-semibold mt-1'>{data.text}</h2>
//                 </div>
//               )
//             })
//           }
//         </div>
//       </div>
//     </ScrollTrigger>
//   )
// }

// export default CounterUpSection;
// import React, { useEffect, useRef } from 'react';

// // Reusable Counter Component
// const Counter = ({ end, duration, className, suffix }) => {
//     const ref = useRef(null);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     if (typeof end === 'number' && end >= 0 && typeof duration === 'number' && duration > 0) {
//                         startCounting(ref.current, end, duration, suffix);
//                     }
//                     observer.disconnect();
//                 }
//             },
//             { threshold: 0.1 }
//         );

//         if (ref.current) {
//             observer.observe(ref.current);
//         }

//         return () => observer.disconnect();
//     }, [end, duration, suffix]);

//     return (
//         <div ref={ref} className={`text-4xl font-bold text-center ${className}`}>
//             0
//         </div>
//     );
// };

// // Start counting function
// const startCounting = (element, end, duration, suffix) => {
//     let start = 0;
//     const increment = end / (duration / 1000 * 60); // Calculate increment based on duration and frame rate

//     const step = () => {
//         start += increment;
//         if (start < end) {
//             element.textContent = Math.round(start) + suffix; // Update the text content of the counter
//             requestAnimationFrame(step);
//         } else {
//             element.textContent = end + suffix; // Ensure it ends exactly at the target value
//         }
//     };

//     requestAnimationFrame(step);
// };

// // Data array for mapping the counters
// const counterData = [
//     { id: 1, end: 5, suffix: 'M+', label: 'Hustler’s Earning', duration: 2000 },
//     { id: 2, end: 25, suffix: 'K+', label: 'Community', duration: 2000 },
//     { id: 3, end: 4, suffix: '.9', label: 'Satisfaction', duration: 2000 },
//     { id: 4, end: 13, suffix: '+', label: 'Partners', duration: 2000 },
// ];

// const CounterUpSection = () => {
//     return (
//       <div className=' bg-gradient-to-b from-[#7611fb] to-[#230a45]'>
//  <div className="max-w-[1200px] mx-auto p-8  ">
//             <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
//                 {counterData.map((item) => (
//                     <div key={item.id} className="flex flex-col items-center text-white">
//                         <div className="flex items-center justify-center xl:text-[45px] text-xl">
//                             {/* Counter Component */}
//                             <Counter
//                                 end={item.end}
//                                 duration={item.duration}
//                                 className="xl:text-[45px] text-2xl"
//                                 suffix={item.suffix}
//                             />
//                         </div>
//                         {/* Static Label */}
//                         <p className="mt-4 text-xl font-bold text-center xl:text-[25px]">{item.label}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//       </div>
       
//     );
// };

// export default CounterUpSection;
import React, { useRef, useState, useEffect } from 'react';
import CountUp from 'react-countup';

// Data array for mapping the counters
const counterData = [
    { id: 1, end: 5, suffix: 'M+', label: "Hustler’s Earning", duration: 2 },
    { id: 2, end: 25, suffix: 'K+', label: 'Community', duration: 2 },
    { id: 3, end: 4.9, suffix: '', label: 'Satisfaction', duration: 2 },
    { id: 4, end: 13, suffix: '+', label: 'Partners', duration: 2 },
];

const Counter = ({ end, duration, suffix }) => {
    const [hasStarted, setHasStarted] = useState(false); // To track if the counting has started
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true); // Trigger counting only once when in view
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [hasStarted]);

    return (
        <div ref={ref} className="xl:text-[45px] text-2xl">
            {hasStarted ? (
                <CountUp end={end} duration={duration} suffix={suffix} />
            ) : (
                0 // Initial display before counting starts
            )}
        </div>
    );
};

const CounterUpSection = () => {
    return (
        <div className='bg-gradient-to-b from-[#7611fb] to-[#230a45]'>
            <div className="max-w-[1200px] mx-auto p-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {counterData.map((item) => (
                        <div key={item.id} className="flex flex-col items-center text-white">
                            <div className="flex items-center justify-center xl:text-[45px] text-xl">
                                {/* Counter Component */}
                                <Counter
                                    end={item.end}
                                    duration={item.duration}
                                    suffix={item.suffix}
                                />
                            </div>
                            {/* Static Label */}
                            <p className="mt-4 text-xl font-bold text-center xl:text-[25px]">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CounterUpSection;
