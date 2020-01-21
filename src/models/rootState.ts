import { Country } from './country';
import { Journey } from './journey';

export interface RootState {
    countries: {
        countries: Country[],
    },
    journeys: {
        journeys: Journey[],
    },
}