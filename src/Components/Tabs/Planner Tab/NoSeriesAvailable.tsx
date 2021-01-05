import React from 'react';
// Import styles
import '../../../styles/NoSeriesAvailable.css';

const NoSeriesAvailable: React.FC<{}> = () => {
    return (
        <p className='no-series-info'>
            No series available to view currently. Try changing the filters or adding additional
            owned content.
        </p>
    );
};

export default NoSeriesAvailable;
