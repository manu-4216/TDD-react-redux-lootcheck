import React, { Component } from 'react';
import { connect } from 'react-redux';

// We need to export this un-connected component for the test
export class Wallet extends Component {
    constructor() {
        super();

        this.state = { balance: undefined };
    }

    updateBalance = event => {
        this.setState({ balance: parseInt(event.target.value, 10) });
    };

    render() {
        return (
            <div>
                <h3 className="balance">
                    Wallet balance: {this.props.balance}
                </h3>
                <br />
                <input
                    className="input-wallet"
                    onChange={this.updateBalance}
                />>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    balance: state
});

export default connect(mapStateToProps, null)(Wallet);
