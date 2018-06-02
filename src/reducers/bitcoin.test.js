import bitcoinReducer from './bitcoin';
import { FETCH_BITCOIN_SUCCESS } from '../actions/constants';

describe('bitcoinReducer', () => {
    const bitcoinData = { bpi: 'bitcoin price data' };

    it('fetches and sets the bitcoin data', () => {
        expect(
            bitcoinReducer(
                {},
                {
                    type: FETCH_BITCOIN_SUCCESS,
                    bitcoin: bitcoinData
                }
            )
        ).toEqual(bitcoinData);
    });
});
