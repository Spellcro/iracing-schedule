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
                    track for that week is owned. Currently most of the series are missing. The site
                    will be updated with a full schedule at the start of 2020 Season 4 (September
                    15th).
                    <br />
                    Oval content, both cars and tracks, is not included in this site. Any ovals (not
                    including road courses that are part of ovals, such as Daytona Road) are listed
                    as either a free or paid oval.
                    <br />
                    All images on this site are taken from{' '}
                    <a href='https://iracing.com'>iRacing.com</a>
                    <br /> This app was made with React and TypeScript. Created by Adam Wilmott.
                    <br />
                    Source code available on{' '}
                    <a href='https://github.com/Spellcro/iracing-schedule'>github</a>.
                </p>
            </div>
        </div>
    );
};

export default HelpTab;
