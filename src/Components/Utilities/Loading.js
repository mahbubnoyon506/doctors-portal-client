import React from 'react';

const Loading = () => {
    return (
        // <div className='flex justify-center'>
        //     <button className="btn loading text-secondary bg-transparent border-0"></button>
        // </div>
        <div className="flex items-center justify-center mt-32">
            <div className="w-12 h-12 border-b-2 border-secondary rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;