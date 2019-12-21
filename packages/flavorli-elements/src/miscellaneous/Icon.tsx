import React from 'react';
import styled from 'styled-components';
import {svg} from '../images';

export interface IconProps {
  name: keyof typeof svg;
  size?: string;
  className?: string;
}
export const Icon = ({name, size, className}: IconProps) => {
  const icon = (svg[name] as unknown) as string;
  return <IconWrapper src={icon} size={size} className={className} alt="" />;
};

const IconWrapper = styled.img<{size?: string}>`
  width: ${props => props.size};
  height: ${props => props.size};
`;
