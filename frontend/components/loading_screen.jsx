import React from 'react';

const LoadingScreen = () => {
    return (
        <div className="loading-bg">
            <img className="loading-icon" src={window.loading_icon} alt="loading-icon"/>
        </div>
    );
}

export default LoadingScreen;