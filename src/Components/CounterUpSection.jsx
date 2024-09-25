import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const data = [
  {
    id: 1,
    count: 'M+',
    text: "Hustler's Earning",
    end: 5
  },
  {
    id: 2,
    count: 'K+',
    text: "Community",
    end: 25
  },
  {
    id: 3,
    count: '.9',
    text: "Satisfaction",
    end: 4
  },
  {
    id: 4,
    count: '+',
    text: "Partners",
    end: 13
  },
]

const CounterUpSection = () => {
  const [counter, setCounter] = useState(false);
  return (
    <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
      <div className='bg-gradient-to-b from-[#7611fb] to-[#230a45] py-[3rem] lg:py-[3.5rem]'>
        <div className='container flex justify-around text-center text-white'>
          {
            data.map((data) => {
              return (
                <div key={data.id}>
                  <h1 className='text-4xl font-bold'>{counter && <CountUp start={0} end={data.end} duration={3} delay={0} />}{data.count}</h1>
                  <h2 className='text-[1.3rem] font-semibold mt-1'>{data.text}</h2>
                </div>
              )
            })
          }
        </div>
      </div>
    </ScrollTrigger>
  )
}

export default CounterUpSection;