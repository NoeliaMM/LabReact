export const routesPrefixes = {
  accountList: "/account-list",
  transfer: "/transfer",
  movements: "/movements",
  createAccount:"/create-account"
};

export const appRoutes = {
  root: "/",
  accountList: routesPrefixes.accountList,
  createAccount:routesPrefixes.createAccount,
  editAccount: "/edit-account/:id",
  movements: `${routesPrefixes.movements}/:accountId?`, 
  transfer: routesPrefixes.transfer,
  transferFromAccount: `${routesPrefixes.transfer}/:id`,
};
