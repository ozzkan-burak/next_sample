import React, {createElement} from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Typo = ({text, as, style}) => {

  const Tltle = styled.as`
`

  const createEl = (as, style, text) => {
    const el = createElement(as, {style}, text);
    return el
  }
  return (
    <>
      {createEl(as, style, text)}
    </>
    
  )
}

Typo.defaultProps = {
  text: '',
  style: '',
  as: '',
};

Typo.propTypes = {
  text: PropTypes.string,
  style: PropTypes.string,
  as: PropTypes.string,
};


export default Typo;


// const StyleMyElement = (Element) => styled(({ className }) => <Element.type {...Element.props} className={className} />)`
//     position: absolute;
//     top: 0;
//     ...
// `;

// ...

// const element = () => React.createElement('div', null, `Hello World!`);
// const StyledComponent = StyleMyElement(element);

// return (
//     <StyledComponent />
// )
