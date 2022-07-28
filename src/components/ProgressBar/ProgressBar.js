/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  'small': {
    '--height': '8px',
    '--borderRadius': '4px',
  },
  'medium': {
    '--height': '12px',
    '--borderRadius': '4px',
  },
  'large': {
    '--height': '24px',
    '--padding': '4px',
    '--borderRadius': '8px',
  }
}

const ProgressBar = ({ value, size }) => {
  return <ProgressWrapper style={SIZES[size]}>
    <ProgressElem value={value}>{value}</ProgressElem>
  </ProgressWrapper>
};

const ProgressWrapper = styled.div`
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
  width: fit-content;
  height: var(--height);
  border-radius: var(--borderRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const ProgressElem = styled.progress.attrs(p => ({
  'max': '100',
}))`
  height: 100%;
  border: none;
  display: block;
  background-color: transparent;
  appearance: none;

  &::-webkit-progress-value {
    border-radius: 4px ${p => p.value > 98 ? '4px 4px' : '0 0'} 4px;
    background-color: ${COLORS.primary};
  }
  &::-moz-progress-bar {
    border-radius: 4px ${p => p.value > 98 ? '4px 4px' : '0 0'} 4px;
    background-color: ${COLORS.primary};
  }
  &::-webkit-progress-bar {
    background-color: transparent;dd
  }
`;

export default ProgressBar;
