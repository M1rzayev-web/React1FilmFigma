import React from 'react';
import LeftFooter from './Footer/LeftFooter';
import RightFooter from './Footer/RightFooter';
import "./css/footer.css"
function Footer() {
    return (
      <footer className='Footer'>
        <LeftFooter />
        <RightFooter />
      </footer>
    );
}

export default Footer;