export const SET_GOAL_FILTER = 'SET_GOAL_FILTER'
export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER'

export const GoalFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// problem: if you update the categories, you have to update them here

export const CategoryFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_FUN: 'SHOW_FUN',
  SHOW_ESSENTIALS: 'SHOW_ESSENTIALS',
  SHOW_CREDIT: 'SHOW_CREDIT',
  SHOW_MISC: 'SHOW_MISC'
}

export function setGoalFilter(filter) {
  return { type: SET_GOAL_FILTER, filter }
}

export function setCategoryFilter(filter) {
  return { type: SET_CATEGORY_FILTER, filter }
}
