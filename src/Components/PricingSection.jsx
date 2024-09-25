// import React from 'react'

// const data = [
//     {
//         id: 1,
//         title: 'Starter',
//         list1: 'E-Learning Videos',
//         list2: 'Product Research',
//         list3: 'Shopify Setup',
//         list4: 'Marketing & Fullfillment',
//         list5: 'Zoom Calls',
//         list6: 'Discord Support',
//         list7: '24/7 Support',
//     },
//     {
//         id: 2,
//         title: 'Essential',
//         list1: 'Mentorship Access',
//         list2: 'Full Store Setup',
//         list3: 'Upto 3-4 Winning Products',
//         list4: 'Fullfillment By Us',
//         list5: 'Private Zoom Calls',
//         list6: 'Discord Priority Support',
//         list7: '24/7 Priority Support',
//     },
//     {
//         id: 3,
//         title: 'Elite Package',
//         list1: 'Mentoring by 5 Coaches',
//         list2: 'Private Community',
//         list3: 'GUARANTEED Results',
//         list4: 'Access to Hustlers Capital',
//         list5: 'Real life meetings',
//         list6: '24/7 VIP Support',
//         list7: '1-1 Support',
//     },
//     {
//         id: 4,
//         title: 'Automated',
//         list1: 'Automated store',
//         list2: 'Ready Made Store on Autopilot',
//         list3: 'Fullfillment & Delivery',
//         list4: 'Automated Advertisement',
//         list5: 'Automated Customer Support',
//         list6: 'Automated Stock & Suppliers',
//         list7: '24/7 Priority Support',
//     },
// ]

// const PricingSection = () => {
//     return (
//         <div className='bg-[#23042a] py-[3rem] lg:py-[3.5rem]'>
//             <div className='container text-white'>
//                 <div className='text-center '>
//                     <h4 className='text-1xl md:text-[1.3rem] font-semibold'>Flexible Pricing</h4>
//                     <h1 className='text-2xl md:text-[2rem] font-bold mt-3'>Get started. Pick a plan that suits your needs</h1>
//                 </div>
//                 <div className='flex flex-wrap gap-5 px-4 mt-10 md:px-0'>
//                     {
//                         data.map((item) => (
//                             <div className='w-full md:w-[48%] lg:w-[23%] p-6 border-[1px]  border-[#471f50] rounded-xl'>
//                                 <div key={item.id} className='flex flex-col gap-10'>
//                                     <h1 className='text-3xl font-bold'>{item.title}</h1>
//                                     <p className='text-[18px]'>For individuals and small teams trying out for an unlimited period</p>
//                                     <div className='text-3xl font-bold'>$<span className='text-4xl'>29</span><sub className='text-[1.2rem] font-semibold'>AED</sub></div>
//                                     <button className='bg-[#7811ff] py-3 px-9 rounded-full text-[15px] font-semibold'>
//                                         BUY NOW
//                                     </button>
//                                     <ul className='px-4 list-disc'>
//                                         <li>{item.list1}</li>
//                                         <li>{item.list2}</li>
//                                         <li>{item.list3}</li>
//                                         <li>{item.list4}</li>
//                                         <li>{item.list5}</li>
//                                         <li>{item.list6}</li>
//                                         <li>{item.list7}</li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         ))
//                     }
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default PricingSection;



import React from 'react';

// this is the correct mapping of data
const data = [
    {
        id: 1,
        title: 'Starter',
        price: 29,
        description: 'For individuals and small teams trying out for an unlimited period',
        list: [
            'E-Learning Videos',
            'Product Research',
            'Shopify Setup',
            'Marketing & Fulfillment',
            'Zoom Calls',
            'Discord Support',
            '24/7 Support',
        ],
    },
    {
        id: 2,
        title: 'Essential',
        price: 49,
        description: 'Ideal for small businesses looking for expert mentorship and more services',
        list: [
            'Mentorship Access',
            'Full Store Setup',
            'Up to 3-4 Winning Products',
            'Fulfillment By Us',
            'Private Zoom Calls',
            'Discord Priority Support',
            '24/7 Priority Support',
        ],
    },
    {
        id: 3,
        title: 'Elite Package',
        price: 99,
        description: 'Best for professionals who want guaranteed results and exclusive access',
        list: [
            'Mentoring by 5 Coaches',
            'Private Community',
            'GUARANTEED Results',
            'Access to Hustlers Capital',
            'Real-life meetings',
            '24/7 VIP Support',
            '1-1 Support',
        ],
    },
    {
        id: 4,
        title: 'Automated',
        price: 199,
        description: 'Perfect for those who want a fully automated, hands-off store',
        list: [
            'Automated store',
            'Ready Made Store on Autopilot',
            'Fulfillment & Delivery',
            'Automated Advertisement',
            'Automated Customer Support',
            'Automated Stock & Suppliers',
            '24/7 Priority Support',
        ],
    },
];

const PricingSection = () => {
    return (
        <div className='bg-[#23042a] py-[3rem] lg:py-[3.5rem]'>
            <div className='container text-white'>
                {/* Heading Section */}
                <div className='text-center'>
                    <h4 className='text-1xl md:text-[1.3rem] font-semibold'>Flexible Pricing</h4>
                    <h1 className='text-2xl md:text-[2rem] font-bold mt-3'>Get started. Pick a plan that suits your needs</h1>
                </div>
                {/* Pricing Cards */}
                <div className='flex flex-wrap gap-5 px-4 mt-10 md:px-0'>
                    {
                        data.map((item, index) => (
                            // Determine the card style based on the index
                            <div key={item.id} className={`w-full md:w-[48%] lg:w-[23%] hover:scale-105 duration-300 hover hover:shadow-lg hover:shadow-[#542B5E] p-6 border-[1px] rounded-xl ${index % 2 === 0 ? ' bg-[#471F50] border-[#542B5E]' :'bg-transparent border-[#542B5E]'}`}>
                                <div className='flex flex-col gap-10'>
                                    <h1 className='text-3xl font-bold'>{item.title}</h1>
                                    <p className='text-[18px]'>{item.description}</p>
                                    <div className='text-3xl font-bold'>
                                        $<span className='text-4xl'>{item.price}</span>
                                        <sub className='text-[1.2rem] font-semibold'> AED</sub>
                                    </div>
                                    <button className='bg-[#7811ff] py-3 px-9 rounded-full text-[15px] font-semibold'>
                                        BUY NOW
                                    </button>
                                    {/* List of features mapped */}
                                    <ul className='px-4 list-disc'>
                                        {
                                            item.list.map((listItem, listIndex) => (
                                                <li key={listIndex}>{listItem}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default PricingSection;
