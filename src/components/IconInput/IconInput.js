import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  'small': {
    '--fontSize': '.875rem',
    '--border': '1px',
  },
  'large': {
    '--fontSize': '1.125rem',
    '--border': '2px',
  }
}
const ICON_SIZE = {
  'small': 16,
  'large': 24,
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {

  return <Wrapper style={{'--iconSize': ICON_SIZE[size] + 'px'}} size={size}>
    <StyledIcon id={icon} size={ICON_SIZE[size]}/>
    <VisuallyHidden>{label}</VisuallyHidden>
    <InputEl placeholder={placeholder} style={SIZES[size]} width={width}/>
  </Wrapper>
};

const Wrapper = styled.label`
  width: fit-content;
  position: relative;
  padding: 2px 0px;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const StyledIcon = styled(Icon)`
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto 0;
`;

const InputEl = styled.input`
  padding: 4px 0 2px 0;
  padding-left: calc(1.5 * var(--iconSize));
  border: none;
  border-bottom: var(--border) solid black;
  outline-offset: 2px;
  font-size: var(--fontSize);
  font-weight: 700;
  width: ${p => p.width + 'px'};
  color: inherit;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: initial;
  }
`;


export default IconInput;
