import React from 'react';

const StaffCard = ({name, Position, Department, image}) => {
    return (
        <section className="flex justify-between w-[70%] m-auto">
            <div className="bg-white shadow-md rounded-2xl p-6 max-w-xs m-4 overflow-hidden">
                <img src={image} alt="Staff"
                 className="mx-auto mb-4 object-cover h-48 w-full" />
                 <div className="p-4">
                <h2 className="text-xl font-bold text-gray-600">{name}</h2>
                <p className="text-gray-600 "><span className='font-semibold'>Position: </span>{Position}</p>
                <p className="text-gray-500 "><span className='font-semibold'>Department: </span>{Department}</p>
            </div>
            </div>
    
        </section>

    );

}
export default StaffCard;