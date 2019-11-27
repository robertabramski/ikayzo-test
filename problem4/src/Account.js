import React from 'react';
import Loading from './Loading';
import AccountDetails from './AccountDetails';
import { getAccountInfo } from './accounts';

class Account extends React.Component {
  constructor() {
    super();

    this.state = {
      accountInfo: false
    }
  }

  componentDidMount() {
    getAccountInfo().then((info) => {
      this.setState({accountInfo: info});
    });
  }

  render() {
    if(this.state.accountInfo) {
      return <AccountDetails account={this.state.accountInfo} />;
    } else {
      return <Loading message="Loading..." />;
    }
  }
}

export default Account;
