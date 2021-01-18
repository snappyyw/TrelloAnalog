import {combineReducers} from 'redux'
import lists from './lists'
import cards from './cards'
import boardOrder from './boardOrder'
import activeBoard from './activeBoard'
import board from './board'

export default combineReducers({
    lists: lists,
    cards: cards,
    boards: board,
    boardOrder: boardOrder,
    activeBoard: activeBoard
  });