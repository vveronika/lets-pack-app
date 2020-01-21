import React from 'react';
import {
    ChooseTileWrapper,
    Label,
    Tiles,
} from './style';
import ChooseTile from '../../../../components/ChooseTile';

interface IProps {
    optionsArray: any[],
    activityIndicator: string,
    onClickHandler: (valueKey: string, value: any) => void,
    label: string,
    valueKey: string
};

const ChooseTileContainer: React.SFC<IProps> = ({
    optionsArray,
    onClickHandler,
    activityIndicator,
    label,
    valueKey,
}) => {
  return (
    <ChooseTileWrapper>
        <Label>{label}</Label>
        <Tiles>
            {optionsArray.map(item => (
                <ChooseTile
                    key={item.key}
                    onClickHandler={() => onClickHandler(valueKey, item.value)}
                    title={item.label}
                    active={item.value === activityIndicator}
                    decorationColor={item.decorationColor}
                />
            ))}
        </Tiles>
    </ChooseTileWrapper>
  );
};

export default ChooseTileContainer;
