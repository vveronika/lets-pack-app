import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {
  HomeContent,
  TilesContainer,
  DestinationsContainer,
} from './style';
import DecorationTile from '../../components/DecorationTile';
import JourneyTile from '../../components/JourneyTile';
import Button from '../../components/Button';
import { RouteComponentProps } from 'react-router-dom';
import * as INFORMATION_DATA from '../../constants/informationData';
import { Journey } from '../../models/journey';
import { RootState } from '../../models/rootState';

interface IProps {
  journeys: Journey[],
}

type Props = IProps & RouteComponentProps;

const HomeScreen = (props: Props) => {

  const goToForm = () => {
    props.history.push('/form');
  }
  
  return (
    <Fragment>
      <TilesContainer>
        {INFORMATION_DATA.HOME_DECORATION_TILES.map(tile => (
          <DecorationTile 
            key={tile.id}
            title={tile.title}
            content={tile.content}
            borderStyle={tile.borderColor}
          />
        ))}
      </TilesContainer>
      <DestinationsContainer>
        {props.journeys.map(journey => (
          <JourneyTile key={journey.id} title={journey.title} />
        ))}
      </DestinationsContainer>
      <HomeContent>
        <Button
          label={props.journeys.length !== 0 ? 
          "Add your next journey" :
          "Create your first journey"}
          clickHandler={goToForm}
        />
      </HomeContent>
    </Fragment>
  );
};

const mapStateToProps = (state: RootState) => {
  const journeys = state.journeys.journeys;
  return {journeys};
};

export default connect(mapStateToProps)(HomeScreen)