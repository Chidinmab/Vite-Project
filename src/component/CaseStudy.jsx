import React from 'react';

const caseStudies = [
{
logoUrl: 'https://us-wd.gr-cdn.com/customers/sites/16/2024/07/1019/LogoECSPublishingGroup1-removebg-preview-1-e1721125158123.png',
title: '10% list growth & sales spike in tough niche',
description: 'It’s nice that with GetResponse, we have the tools and integrations we need within our budget.',
},
{
logoUrl: 'https://us-wd.gr-cdn.com/customers/sites/16/2024/07/1022/living_vision-removebg-preview-e1721125329100.png',
title: '75% of all public sales from email autoresponders',
description: 'Together with GetResponse, we’ve been able to convince customers of need, culminating in compelling sales.',
},
{
logoUrl: 'https://us-wd.gr-cdn.com/customers/sites/16/2024/07/1025/red-hot-logo1_-removebg-preview-e1721125532901.png',
title: 'Up to $1,000 for every 1,000 emails sent',
description: 'Regarding revenue contribution, the email marketing channel is like free money for us.',
}
];
const CaseStudy = () => {
return (
<div className="flex flex-col md:flex-row justify-center gap-6 p-6 bg-gray-100">
{caseStudies.map((card, index) => (
<div
key={index}
className="bg-white rounded-lg shadow-md p-6 w-full md:w-1/3 hover:shadow-lg transition-shadow duration-300"
>
<img
src={card.logoUrl}
alt="Company logo"
className="h-8 mb-4"
/>
<h3 className="text-blue-600 font-bold text-lg mb-2">
{card.title}
</h3>
<p className="text-gray-700 mb-4">{card.description}</p>
<button className='bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-yellow-500'>
Read case study →
</button>
</div>
))}
</div>
);
}
export default CaseStudy;