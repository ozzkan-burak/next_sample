import React, {createElement} from 'react';
import PropTypes from 'prop-types';

const Typo = ({text, as, className}) => {

  const createEl = (as, className, text) => {
    const el = createElement(as, {className}, text);
    return el
  }
  return (
    <>
      {createEl(as, className, text)}
    </>
    
  )
}

Typo.defaultProps = {
  text: '',
  className: '',
  as: '',
};

Typo.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  as: PropTypes.string,
};


export default Typo;
