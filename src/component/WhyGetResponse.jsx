import React from 'react';

const stats = [
{
number: '100%',
boldText: 'list growth',
normalText: 'average for all paid plans in the first 30 days'
},
{
number: '99%',
boldText: 'deliverability rate',
normalText: 'for 160+ countries'
},
{
number: '350k+',
boldText: 'customers worldwide',
normalText: 'trust us with their email marketing'
},
{
number: '24/7',
boldText: 'support from a 5-star rated',
normalText: 'Customer Success Team'
}
];

const WhyGetResponse = () => {
return (
<section className="py-12 bg-white text-center">
<h2 className="text-3xl font-bold mb-10">Why GetResponse?</h2>
<div className="flex flex-col md:flex-row justify-center items-center gap-10 px-6">
{stats.map((item, index) => (
<div key={index} className="max-w-xs">
<h3 className="text-4xl font-extrabold text-gray-900 mb-2">
{item.number}
</h3>
<p className="text-gray-700">
<span className="font-semibold">{item.boldText}</span>{' '}
{item.normalText}
</p>
</div>
))}
</div>
</section>
);
}

export default WhyGetResponse;