import React from 'react';
import {
    TileWrapper,
    Title,
    Content,
} from './style';

interface IProps {
    title: string,
    content: string,
    borderStyle: string,
};

const DecorationTile: React.SFC<IProps> = ({
    title,
    content,
    borderStyle
}) => {
  return (
      <TileWrapper borderStyle={borderStyle}>
          <Title>{title}</Title>
          <Content>{content}</Content>
      </TileWrapper>
  );
};

export default DecorationTile;
