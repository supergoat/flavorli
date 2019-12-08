import React from 'react';
import styled from 'styled-components';
import {useLockBodyScroll, Stack} from '@flavorli/elements';
import Page from './Page';

export default () => {
  useLockBodyScroll();

  return (
    <>
      <Backdrop />

      <Preparation width="100%">
        <Page>
          <Card>1</Card>
          <Card>2</Card>
          <Card>3</Card>
          <Card>4</Card>
        </Page>
      </Preparation>
    </>
  );
};

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.25);
`;

const Preparation = styled(Stack)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const Card = styled.div`
  border: 1px solid black;
  background: white;
  width: 420px;
  height: 400px;
`;
