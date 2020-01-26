import React from 'react';
import {
    Error,
} from './style';

interface IProps {
    errorLabel: string,
};

const ValidationError: React.SFC<IProps> = ({
    errorLabel
}) => <Error>{errorLabel}</Error>;

export default ValidationError;
