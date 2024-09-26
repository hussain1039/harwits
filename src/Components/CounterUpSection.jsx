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
import React, { useRef, useState, useEffect } from 'react'; // Importing React hooks and the necessary libraries
import CountUp from 'react-countup'; // Importing the CountUp library for the animated counting effect

// Data array for mapping the counters
// Each item in the array contains the end value for counting, a suffix for the count, the label, and the duration for the count animation.
const counterData = [
    { id: 1, end: 5, suffix: 'M+', label: "Hustler’s Earning", duration: 2 },
    { id: 2, end: 25, suffix: 'K+', label: 'Community', duration: 2 },
    { id: 3, end: 4.9, suffix: '', label: 'Satisfaction', duration: 2 },
    { id: 4, end: 13, suffix: '+', label: 'Partners', duration: 2 },
];

// Counter component that renders a counter with its corresponding label
const Counter = ({ end, duration, suffix }) => {
    const [hasStarted, setHasStarted] = useState(false); // useState hook to track if the counting has started
    const ref = useRef(null); // useRef hook to reference the DOM element for observing visibility

    // useEffect hook to run the side effect of observing when the counter element enters the viewport
    useEffect(() => {
        // Create an IntersectionObserver to detect when the counter enters the viewport
        const observer = new IntersectionObserver(
            ([entry]) => {
                // If the element is visible and counting hasn't started yet
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true); // Set the state to true to trigger counting
                }
            },
            { threshold: 0.1 } // 10% of the element needs to be visible to trigger the observer
        );

        // Start observing the ref element (the counter container)
        if (ref.current) {
            observer.observe(ref.current);
        }

        // Cleanup function to disconnect the observer when the component unmounts
        return () => observer.disconnect();
    }, [hasStarted]); // Dependency array ensures the effect runs only when `hasStarted` changes

    return (
        <div ref={ref} className="xl:text-[45px] text-2xl">
            {/* Conditionally rendering the CountUp component once the counter enters the viewport */}
            {hasStarted ? (
                // CountUp component starts counting when `hasStarted` is true
                <CountUp end={end} duration={duration} suffix={suffix} />
            ) : (
                // Initial value displayed as 0 before counting starts
                0
            )}
        </div>
    );
};

/**
 * CounterUpSection component renders the entire section with multiple counters.
 * It maps over the counterData array and renders each counter with its corresponding label.
 */
const CounterUpSection = () => {
    return (
        <div className='bg-gradient-to-b from-[#7611fb] to-[#230a45]'> {/* Background gradient for the section */}
            <div className="max-w-[1200px] mx-auto p-8"> {/* Container for the section with padding and width constraints */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"> {/* Responsive grid layout */}
                    {counterData.map((item) => ( // Looping through counterData array to dynamically create counters
                        <div key={item.id} className="flex flex-col items-center text-white"> {/* Each counter and its label */}
                            <div className="flex items-center justify-center xl:text-[45px] text-xl">
                                {/* Counter Component */}
                                <Counter
                                    end={item.end} // The final value the counter will count to
                                    duration={item.duration} // Duration of the counting animation in seconds
                                    suffix={item.suffix} // Suffix to append to the count (e.g., "+", "%")
                                />
                            </div>
                            {/* Static Label */}
                            <p className="mt-4 text-xl font-bold text-center xl:text-[25px]">
                                {item.label} {/* Displaying the label for each counter */}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CounterUpSection;
