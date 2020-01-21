import React from 'react';
import {
    FooterWrapper,
    BaseText,
    IconWrapper,
    Highlight,
} from './style';

const Footer: React.SFC = () => {
  return (
      <FooterWrapper>
          <BaseText>Made with </BaseText>
          <IconWrapper>love</IconWrapper>
          <BaseText>by </BaseText>
          <Highlight>CSS Społem</Highlight>
      </FooterWrapper>
  )
}

export default Footer;
