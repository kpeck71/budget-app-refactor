export const SET_GOAL_FILTER = 'SET_GOAL_FILTER'
export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER'
export const FETCH_GOALS_BEGIN = 'FETCH_GOALS_BEGIN'
export const FETCH_GOALS_SUCCESS = 'FETCH_GOALS_SUCCESS'
export const FETCH_GOALS_FAILURE = 'FETCH_GOALS_FAILURE'
export const TOGGLE_GOAL = 'TOGGLE_GOAL'

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

export function toggleGoal(id, paid) {
  return { type: TOGGLE_GOAL, id, paid}
}


export function fetchGoals() {
  return dispatch => {
    dispatch(fetchGoalsBegin());
    return fetch("/api/v1/goals.json")
      .then(handleErrors)
      .then(res => res.json())
      .then(goals => dispatch({ type: 'FETCH_GOALS_SUCCESS', payload: goals }))
      .catch(error => dispatch(fetchGoalsFailure(error)))
  };
}
// Handle HTTP errors, fetch() does not throw for HTTP errors like 404s
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const fetchGoalsBegin = () => ({
  type: FETCH_GOALS_BEGIN
});

export const fetchGoalsSuccess = goals => ({
  type: FETCH_GOALS_SUCCESS,
  payload: { goals }
})

export const fetchGoalsFailure = error => ({
  type: FETCH_GOALS_FAILURE,
  payload: { error }
})
