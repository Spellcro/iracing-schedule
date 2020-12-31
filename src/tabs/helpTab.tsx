import React from 'react';
import '../styles/HelpTab.css';

const HelpTab = () => {
    return (
        <div className='helpTabWrapper'>
            <div className='helpTabInfo'>
                <h2>What is this site?</h2>
                <p>
                    The iRacing Schedule Tracker checks a user's eligibility for iRacing.com's road
                    racing series based on owned content, which can be set through the 'Set Cars'
                    and 'Set Tracks' tabs. The table of series on the 'Planner' tab is populated
                    automatically based on owned cars, and the entries are shown in green if the
                    track for that week is owned.
                    <br />
                    Oval content is not currently fully implemented on this site. Oval tracks will
                    slowly be rolled out as they appear in road series schedules.
                    <br />
                    All images on this site are from <a href='https://iracing.com'>iRacing.com</a>
                    <br /> This app was created by Adam Wilmott using React and TypeScript.
                </p>
            </div>
        </div>
    );
};

export default HelpTab;
