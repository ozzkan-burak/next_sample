import React from 'react';

import styled from "styled-components";

import FooterColum from './FooterColum';
import Typo from '../Typo';



const Footer = () => {
  return (
    <footer>
      <FooterColum>
        <Typo style="" text="Lorem Ipsum" as="h4" />
      </FooterColum>
    </footer>
  )
}

export default Footer