import styled from 'styled-components';

const Avatar = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: ${p => p.theme.colors.secondarySurface};
  flex-shrink: 0;
`;

export default Avatar;
