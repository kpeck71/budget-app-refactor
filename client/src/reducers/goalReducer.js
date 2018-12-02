import { combineReducers } from 'redux'

import {
  SET_GOAL_FILTER,
  GoalFilters,
  SET_CATEGORY_FILTER,
  CategoryFilters,
  FETCH_GOALS_BEGIN,
  FETCH_GOALS_SUCCESS,
  FETCH_GOALS_FAILURE
} from '../actions/actions'

function allFilters(state = { goalFilter: GoalFilters.SHOW_ALL, categoryFilter: CategoryFilters.SHOW_ALL}, action) {

  switch (action.type) {
    case SET_GOAL_FILTER:
      return Object.assign({}, state, {
        goalFilter: action.filter
      })

    case SET_CATEGORY_FILTER:
      return Object.assign({}, state, {
        categoryFilter: action.filter
      })

  default:
    return state
  }
}

function goals(state = {goals: [], loading: false, error: null}, action) {
  switch (action.type) {
    case FETCH_GOALS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_GOALS_SUCCESS:
    debugger
      return {
        ...state,
        loading: false,
        goals: action.payload
      };

    case FETCH_GOALS_FAILURE:
    return {
      ...state,
      loading: false,
      error: action.payload.error
    };

  default:
    return state
  }
}

const goalReducer = combineReducers({
  allFilters,
  goals
})

export default goalReducer
