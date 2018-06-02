import React from 'react';
import Wallet from './Wallet';
import Loot from './Loot';

const App = () => (
    <div>
        <h2>Loot Check</h2>
        <hr />
        <Wallet />
        <hr />
        <Loot />
        <hr />
        <div>
            Powered by{' '}
            <a target="_blank" href="https://www.coindesk.com/price">
                Coindesk
            </a>
        </div>
    </div>
);

export default App;
