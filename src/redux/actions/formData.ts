import * as actionTypes from '../actionTypes';
import { Country } from '../../models/country';

function fetchCountriesFailed(failed: boolean) {
    return {
        type: actionTypes.FETCH_COUNTRIES_FAILED,
        failed,
    };
}

function fetchCountriesSuccess(payload: Country[]) {
    return {
        type: actionTypes.FETCH_COUNTRIES_SUCCESS,
        payload
    };
}

export default function fetchCountries() {

    return (dispatch: Function) => {
        fetch(`https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;alpha3Code;latlng;`)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((res) => dispatch(fetchCountriesSuccess(res)))
            .catch(() => dispatch(fetchCountriesFailed(true)));
    };
}
