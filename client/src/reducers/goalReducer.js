import {
  SET_GOAL_FILTER,
  GoalFilters,
  SET_CATEGORY_FILTER,
  CategoryFilters,
} from '../actions/actions'

export default function goalReducer(state = { goalFilter: GoalFilters.SHOW_ALL, categoryFilter: CategoryFilters.SHOW_ALL, goals: []}, action) {

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
