import React from 'react';

const AccountDetails = ({account}) => {
  return (
    <ul className="user-data">
      <li>ID: {account.id}</li>
      <li>Status: {account.status}</li>
      <li>Name: {account.name}</li>
    </ul>
  );
}

export default AccountDetails;
