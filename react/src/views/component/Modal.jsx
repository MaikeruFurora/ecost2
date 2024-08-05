import Button from './Button';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const Modal = (props) => {
  const {...param} = props
  return (
    <div className='relative'>
      <Button className='btn' onClick={() => param.click()}><SearchIcon/>{param.buttonName}</Button>
      <dialog id='my_modal' className="modal">
        <div className="modal-box w-11/12 max-w-6xl">
          <div className='py-2 mb-3'>
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="text-lg font-bold">{param.title}</h3>
          </div>
          {props.children}
        </div>
      </dialog>
    
    </div>
    
  );
};

export default Modal;

