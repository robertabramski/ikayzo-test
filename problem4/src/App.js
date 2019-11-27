/*
This is a React question, however it should not require you to have React.js installed.

Given that you wish this DOM element to be rendered:

<Account user={user}>
  {(accountInfo) => accountInfo == null ?
    <Loading message="Loading..." /> :
    <AccountDetails account={accountInfo} />}
</Account>

Implement the corresponding React Component for Account:

import React, { Component, PropTypes } from "react";
\**
 * Assume getAccountInfo has the following signature:
 * const getAccountInfo = (user) => {
 *   return new Promise((resolve) => {
 *     fetch(`/api/accountInfo/${user.id}`).then((accountInfo) => resolve(accountInfo.json()));
 *   });
 * };
 *
 * and the returned accountInfo object is: { name: string, id: number, status: string }
 *\
import getAccountInfo from "./accounts";


class Account extends Component {
  // TODO
}

Bonus:
Go back to Problem 4, and implement a Higher Order Component to apply "loading" behavior to any Component such that a loading message is displayed until fetchData returns data to display in the ChildComponent. State any assumptions and complete the following HOC function:

function withLoading(ChildComponent, fetchData) {
  return class extends Component {
    // TODO
  };
}

Example usage:

const AccountDetailsWithLoading = withLoading(AccountDetails, getAccountInfo);
*/

import React from 'react';
import Account from './Account';
import './App.css';

function App() {
  const user = {id: 1};

  return (
    <div className="App">
      <Account user={user} />
    </div>
  );
}

export default App;
