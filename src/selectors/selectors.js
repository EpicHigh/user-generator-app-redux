export const nextIsDisabled = (length, { index }) => !(index < length - 1);
export const previousIsDisabled = (length, { index }) =>
  !(length > 0 && index > 0);
export const selectUser = (users, { index }) => users[index] && users[index];
