import React from 'react';
import {Stack} from '@flavorli/elements';
import Link from './Link';
import {ILink} from '../types';
import StepDialog from './StepDialog';

interface ILinksProps {
  links: ILink[];
}
const Links = ({links}: ILinksProps) => {
  return !!links.length ? (
    <>
      <Stack gap={8} alignment="start" width="100%" height="auto">
        {links.map(link => (
          <Link key={link.name} link={link} />
        ))}
      </Stack>
      <StepDialog />
    </>
  ) : null;
};

export default Links;
