import React from 'react';
import '../../styles/Footer.css';

const Footer: React.FC<{}> = () => {
    return (
        <>
            <div className='empty-container'></div>
            <div className='footer-wrapper'>
                <p>
                    {'View source code on'}{' '}
                    <a
                        className='github-link'
                        href='https://github.com/Spellcro/iracing-schedule'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Github
                    </a>
                </p>
            </div>
        </>
    );
};

export default Footer;
