import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';
import VisuallyHidden from '../VisuallyHidden';


const Select = ({ label, value, onChange, children }) => {
  return (
        <SelectWrapper>
          <SelectElem onChange={onChange}>{children}</SelectElem>
          <SelectUI>
            {getDisplayedValue(value, children)}
            <IconWrapper><Icon id='chevron-down' strokeWidth={2} /></IconWrapper>
          </SelectUI>
        </SelectWrapper>
  );
;
};

const SelectWrapper = styled.div`
  position: relative;
  width: max-content;
`;

const SelectElem = styled.select`
  appearance: none;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const SelectUI = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  height: 100%;
  width: 100%;
  border-radius: 8px;
  padding: 12px 52px 12px 16px;


  ${SelectElem}:focus + & {
    outline: 2px solid -webkit-focus-ring-color;
  }

  ${SelectElem}:hover + & {
    color: ${COLORS.black}
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  height: max-content;
  margin: auto;
  pointer-events: none;
`;



export default Select;
