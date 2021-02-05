import React, {useState} from "react";
import Modal from '../components/Modal'
import {connect} from 'react-redux'
import {addBoard} from "../action/";
import {Link} from 'react-router-dom'

import Cross from '../img/Cross.png'

function MainPage({boards, boardOrder, dispatch }) {
    const [visibleList, setVisibleList] = useState(false)
    const [modalActive, setModalActive]= useState(false)
    const [inputValue, setInputValue]= useState('');
    const addList=()=>{
        if(!inputValue){
          setModalActive(true)
          return;
        }
      dispatch(addBoard(inputValue));
      setInputValue('');
      setVisibleList(!visibleList)
    }
    const renderBoards = () => {
      if(renderBoards!==null){
        return boardOrder.map((ID) => {
          const board = boards[ID];
          return (
            <Link
              key={ID}
              to={`/${board.id}`}
              style={{ textDecoration: "none" }}>
              <li key={board.id}>{board.title}</li>
            </Link>
          );
        });
      }
    }
    
    return(
    <>
      <div className="bloc-smile">
      <a className="smile"></a>
      </div>
      <div className="content">
        <div className='main-block'>
          <div className="main-header" onClick={()=>setVisibleList(!visibleList)}>
            <img src={Cross} alt=""></img>
            <p>Новая доска</p>
          </div>
            {visibleList && <div className='creating-list'>
              <p>Название доски</p>
              <input type="text" value={inputValue} onChange={e=>setInputValue(e.target.value)}></input>
              <button className="button-cancel" onClick={()=>setVisibleList(!visibleList)}>Отмена</button>
              <button className="button-save" onClick={addList}>Сохранить</button>
            </div>}
        </div>
        <div className='my-list'>
        <ul>
          {renderBoards()}
        </ul>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}/>
  </>
    )
}


const mapStateToProps = state => ({
  boards: state.boards,
  boardOrder: state.boardOrder
});

export default connect(mapStateToProps)(MainPage);