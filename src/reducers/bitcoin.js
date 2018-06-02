import { FETCH_BITCOIN_SUCCESS } from '../actions/constants';

const bitcoin = (state = {}, action) => {
    switch (action.type) {
        case FETCH_BITCOIN_SUCCESS:
            return action.bitcoin;

        default:
            return state;
    }
};

export default bitcoin;
