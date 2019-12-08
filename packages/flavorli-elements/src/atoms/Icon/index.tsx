import React from 'react';
import styled from 'styled-components';
import {icons} from './icons';

export interface IconProps {
  name: keyof typeof icons;
  size?: string;
  className?: string;
}

export default ({name, size, className}: IconProps) => {
  const icon = (icons[name] as unknown) as string;
  return <Icon src={icon} size={size} className={className} alt="" />;
};

export const Icon = styled.img<{size?: string}>`
  width: ${props => props.size};
  height: ${props => props.size};
`;
