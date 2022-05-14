import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
            <button className="btn bg-gradient-to-r from-secondary to-primary btn-sm text-white border-0">{children}</button>
        </div>
    );
};

export default PrimaryButton;