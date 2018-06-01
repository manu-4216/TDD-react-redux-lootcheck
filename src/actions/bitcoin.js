import {
    FETCH_BITCOIN_REQUEST,
    FETCH_BITCOIN_SUCCESS,
    FETCH_BITCOIN_FAILURE
} from './constants';

const fetchRequest = () => ({
    type: FETCH_BITCOIN_REQUEST
});
const fetchSuccess = json => ({
    type: FETCH_BITCOIN_SUCCESS,
    bitcoin: json
});
const fetchFailure = error => ({
    type: FETCH_BITCOIN_FAILURE
});

// Inspired from https://redux.js.org/recipes/writing-tests
export const fetchBitcoin = () => dispatch => {
    dispatch(fetchRequest());

    return fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => response.json())
        .then(json => dispatch(fetchSuccess(json)))
        .catch(error => dispatch(fetchFailure(error)));
};
