import React, {useEffect} from 'react';

const Statistics = () => {
    useEffect(()=>{
        document.title = 'Statistics'
    },[])

    return (
        <div>
            Statistic
        </div>
    );
};

export default Statistics;