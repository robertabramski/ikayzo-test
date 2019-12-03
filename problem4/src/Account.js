import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import AccountDetails from './AccountDetails';
import { getAccountInfo } from './accounts';

const Account = () => {
  const [accountInfo, setAccountInfo] = useState(null);

  useEffect(() => {
    (async () => {
      setAccountInfo(await getAccountInfo());
    })();
  }, []);

  return accountInfo ?
    <AccountDetails account={accountInfo} /> :
    <Loading message="Loading..." />;
}

export default Account;
