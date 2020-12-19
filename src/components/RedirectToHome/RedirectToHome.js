import React from 'react';
import { Redirect } from 'react-router-dom';

const RedirectToHome = () => {
    return (
        <div>
            <Redirect to='/gallery'/>
        </div>
    );
};

export default RedirectToHome;