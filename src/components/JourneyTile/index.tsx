import React from 'react';
import {
    TileWrapper,
    Title,
} from './style';

interface IProps {
    title: string,
};

const JourneyTile: React.SFC<IProps> = ({
    title,
}) => {
  return (
      <TileWrapper>
          <Title>{title}</Title>
      </TileWrapper>
  );
};

export default JourneyTile;
