import React from 'react'
import PropTypes from 'prop-types'

const Modal=({active, setActive})=>{
    return(
    <>
        {active&& <div className='modal' onClick={()=>setActive(false)}>
            <div className='modal-content' onClick={e=>e.stopPropagation()}>
                <p>Введите название</p>
                <button onClick={()=>setActive(false)}>Ок</button>
            </div>
        </div>
        }
    </>
    )
}
Modal.propTypes={
    active: PropTypes.bool,
    setActive: PropTypes.func,
}

export default Modal;