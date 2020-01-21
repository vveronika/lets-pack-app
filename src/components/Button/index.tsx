import React from 'react';
import {
    ButtonWrapper,
    ButtonLabel,
} from './style';

interface IProps {
    clickHandler: () => void,
    label: string,
    disabled?: boolean,
};

const Button: React.SFC<IProps> = ({
    clickHandler,
    label,
    disabled,
}) => {
  return (
    <ButtonWrapper onClick={clickHandler} disabled={disabled}>
        <ButtonLabel>{label}</ButtonLabel>
    </ButtonWrapper>
  );
};

export default Button;


