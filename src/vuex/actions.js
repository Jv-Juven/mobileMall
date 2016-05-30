import * as types from './mutation-types'
export const plus = ({ dispatch }) => {
  setTimeout(() => {
    dispatch(types.INCREASE)
  }, 1000)
}
export const minus = ({ dispatch }) => {
  dispatch(types.DECREASE)
}
