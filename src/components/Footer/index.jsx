import React from 'react';
import FooterColum from './FooterColum';
import Typo from '../Typo';

const Footer = () => {
  return (
    <footer>
      <FooterColum>
        <Typo className="footer-header" text="Lorem Ipsum" as="h4" />
      </FooterColum>
    </footer>
  )
}

export default Footer