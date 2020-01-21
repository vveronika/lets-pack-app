import React from 'react';
import {
    TileWrapper,
    TileTitle,
} from './style';

interface IProps {
    title: string,
    active: boolean,
    onClickHandler: (value: any) => void,
    decorationColor: string,
};

const ChooseTile: React.SFC<IProps> = ({
    title,
    active,
    onClickHandler,
    decorationColor,
}) => {
  return (
      <TileWrapper onClick={onClickHandler} active={active} decorationColor={decorationColor}>
          <TileTitle active={active}>
              {title}
          </TileTitle>
      </TileWrapper>
  );
};

export default ChooseTile;
