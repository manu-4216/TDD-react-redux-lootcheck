import React, { Component } from 'react';
import { connect } from 'react-redux';

// We need to export this un-connected component for the test
export class Wallet extends Component {
    render() {
        return (
            <div>
                <h3 className="balance">
                    Wallet balance: {this.props.balance}
                </h3>
            </div>
        );
    }
}

const mapStateToProps = state => {
    balance: state;
};

export default connect(mapStateToProps, null)(Wallet);