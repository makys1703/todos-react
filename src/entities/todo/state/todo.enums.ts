export const enum todoActionType {
  Add = 'ADD_TODO',
  Toggle = 'TOGGLE_TODO',
  RemoveCompleted = 'REMOVE_COMPLETED_TODOS',
  SetFilter = 'SET_FILTER'
};

export const enum TodosFilter {
  All,
  Active,
  Completed
};