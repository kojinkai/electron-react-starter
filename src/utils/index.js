
// Takes a standard action and returns a string with the name of the action.
export const getActionType = action => action.toString().split().pop();
