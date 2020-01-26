import React from 'react';
import {
    BarWrapper,
    PageLogo,
    PageTitle,
    PageSubTitle,
    TextWrapper,
} from './style';

interface IProps {
    title: string,
    subtitle: string,
};

const TopBar: React.SFC<IProps> = ({
    title,
    subtitle,
}) => {
  return (
    <BarWrapper to="/">
        <TextWrapper>
            <PageTitle>{title}</PageTitle>
            <PageSubTitle>{subtitle}</PageSubTitle>
        </TextWrapper>
        <PageLogo src="https://zloty-interes.pl/wp-content/uploads/2018/11/Travel-PNG-Clipart-1024x1024.png" />
    </BarWrapper>
  );
};

export default TopBar;
