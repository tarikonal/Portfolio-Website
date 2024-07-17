import React from 'react';

const DownloadButton = () => {
    const handleClick = () => {
        window.open('https://drive.google.com/drive/folders/1vATFqG275Grw04FwqWxwP2GtE6BsiZhV', '_blank');
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>

            <button className="btn-1" onClick={handleClick} style={{ marginLeft: 'auto' }}>
                Download CV
            </button>
        </div>
    );
};

export default DownloadButton;