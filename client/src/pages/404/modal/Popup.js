import React from 'react';
import { Link } from 'react-router-dom';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import './Popup.css';

function PopupGoToStore({ toggle }) {
  return toggle ? (
    <div className="popup">
      <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
        <div className="popup-inner">
          <h2>
            {' '}
            <KeyboardDoubleArrowLeftIcon /> ir a loja{' '}
          </h2>
        </div>
      </Link>
    </div>
  ) : (
    ''
  );
}

export default PopupGoToStore;
