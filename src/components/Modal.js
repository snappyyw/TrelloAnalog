import React from 'react'

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

export default Modal;