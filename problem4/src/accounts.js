const getAccountInfo = (user) => {
 return new Promise((resolve) => {
   //fetch(`/api/accountInfo/${user.id}`).then((accountInfo) => resolve(accountInfo.json()));
   setTimeout(() => resolve({ name: 'robertabramski', id: 1, status: 'loggedIn' }), 1000);
 });
};

export { getAccountInfo };
