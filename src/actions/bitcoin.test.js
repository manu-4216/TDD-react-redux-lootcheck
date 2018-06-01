// https://api.coindesk.com/v1/bpi/currentprice.json
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
    FETCH_BITCOIN_SUCCESS,
    FETCH_BITCOIN_REQUEST,
    FETCH_BITCOIN_FAILURE
} from './constants';
import { fetchBitcoin } from './bitcoin';

const mockStore = configureStore([thunk]);
const store = mockStore({ bitcoin: {} });

describe('handles the async request to fetch the bitcoin value', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
        store.clearActions();
    });

    it('returns a result successfuly', () => {
        const mockSuccessResponse = {
            body: {
                bpi: 'bitcoin price index'
            }
        };

        fetchMock.get(
            'https://api.coindesk.com/v1/bpi/currentprice.json',
            mockSuccessResponse
        );

        const expectedActions = [
            {
                type: FETCH_BITCOIN_REQUEST
            },
            {
                type: FETCH_BITCOIN_SUCCESS,
                bitcoin: mockSuccessResponse.body
            }
        ];

        return store.dispatch(fetchBitcoin()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('fails and returns an error', () => {
        fetchMock.get('https://api.coindesk.com/v1/bpi/currentprice.json', 400);

        const expectedActions = [
            {
                type: FETCH_BITCOIN_REQUEST
            },
            {
                type: FETCH_BITCOIN_FAILURE
            }
        ];

        return store.dispatch(fetchBitcoin()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
