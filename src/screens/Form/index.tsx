import React from 'react';
import { connect } from 'react-redux';
import {
  FormWrapper,
  SelectsWrapper,
  ValidationWrapper,
} from './style';
import { RouteComponentProps } from 'react-router-dom';
import { fetchCountries, addJourney } from '../../redux/actions';
import SearchableSelect from '../../components/SearchableSelect';
import * as FORM_DATA from '../../constants/formData';
import ChooseTileContainer from './components/ChooseTileContainer';
import Button from '../../components/Button';
import ValidationError from '../../components/ValidationError'
import { Country } from '../../models/country';
import { Journey } from '../../models/journey';
const uuidv1 = require('uuid/v1');

interface IProps {
  countries: Country[],
  fetchCountries: () => void;
  addJourney: (payload: Journey) => void
}

interface IState {
  country: {
    value: string,
    label: string,
  },
  month: string,
  duration: string,
  standard: string,
  formValid: boolean,
  formErrors: {
    country: boolean,
    month: boolean,
    duration: boolean,
    standard: boolean,
  },
  showError: boolean,
}

type Props = IProps & RouteComponentProps;

class FormScreen extends React.Component<Props, IState> {
    constructor(props: Props) {
      super(props);

      this.state = {
        country: {
          value: "",
          label: "",
        },
        month: "",
        duration: "",
        standard: "",
        formErrors: {
          country: true,
          month: true,
          duration: true,
          standard: true,
        },
        formValid: false,
        showError: false,
      };
    }

    componentDidMount() {
      this.props.countries.length === 0 && this.props.fetchCountries();
    }

    fieldHandler = (key: any, value: string) => {
      this.setState(state => ({
        ...state,
        [key]: value,
        formErrors: {
          ...state.formErrors,
          [key]: false,
        }
      }), () => {
        const formValid = Object.values(this.state.formErrors).every(error => error === false);
        this.setState({formValid})
      });
    }

    formSubmit = () => {
      if (this.state.formValid) {
        const { country, month, duration, standard } = this.state;
        this.props.addJourney({
          id: uuidv1(), title: country.label, country, month, duration, standard,
        })
        this.props.history.push('./under-construction');
      } else {
        this.setState({showError: true})
      }
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
            <Button clickHandler={this.formSubmit} label="Let's pack!" />
            <ValidationWrapper>
              {this.state.showError && <ValidationError errorLabel="All form fields are required." />}
            </ValidationWrapper>
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
      addJourney: (payload: Journey) => dispatch(addJourney(payload)),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(FormScreen);