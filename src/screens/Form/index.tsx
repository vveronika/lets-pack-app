import React from 'react';
import { connect } from 'react-redux';
import {
  FormWrapper,
  SelectsWrapper,
} from './style';
import { RouteComponentProps } from 'react-router-dom';
import { fetchCountries } from '../../redux/actions';
import SearchableSelect from '../../components/SearchableSelect';
import * as FORM_DATA from '../../constants/formData';
import ChooseTileContainer from './components/ChooseTileContainer';
import Button from '../../components/Button';
import { Country } from '../../models/country';

interface IProps {
  countries: Country[],
  fetchCountries: () => void;
}

interface IState {
  country: string,
  month: string,
  duration: string,
  standard: string,
  formValid: boolean,
}

type Props = IProps & RouteComponentProps;

class FormScreen extends React.Component<Props, IState> {
    constructor(props: Props) {
      super(props);

      this.state = {
        country: "",
        month: "",
        duration: "",
        standard: "",
        formValid: false,
      };
    }

    componentDidMount() {
        this.props.fetchCountries();
    }

    fieldHandler = (key: any, value: string) => {
      this.setState(state => ({
        ...state,
        [key]: value,
      }));
    }

    formSubmit = () => {
      this.props.history.push('./under-construction');
    }

    render() {
      const countriesSelectValues = this.props.countries.map(country => ({
        label: country.name,
        value: country.name
      }));
      return (
          <FormWrapper>
            <SelectsWrapper>
              <SearchableSelect
                label="Choose your destination"
                options={countriesSelectValues}
                onChange={this.fieldHandler}
                valueKey="country"
              />
              <SearchableSelect
                label="When does your trip start?"
                options={FORM_DATA.MONTHS}
                onChange={this.fieldHandler}
                valueKey="month"
              />
            </SelectsWrapper>
            <ChooseTileContainer
              label="For how long are you going?"
              optionsArray={FORM_DATA.DURATION}
              activityIndicator={this.state.duration}
              onClickHandler={this.fieldHandler}
              valueKey="duration"
            />
            <ChooseTileContainer
              label="What kind of standard is suitable for you?"
              optionsArray={FORM_DATA.STANDARD}
              activityIndicator={this.state.standard}
              onClickHandler={this.fieldHandler}
              valueKey="standard"
            />
            <Button disabled={this.state.formValid} clickHandler={this.formSubmit} label="Let's pack!" />
          </FormWrapper> 
      );
    }
};

const mapStateToProps = (state: any) => {
    return {
        countries: state.countries.countries,
    };
};

const mapDispatchToProps = (dispatch: Function) => {
    return {
      fetchCountries: () => dispatch(fetchCountries()),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(FormScreen);