import React from 'react';
import {Stack} from '@flavorli/elements';
import Link from './Link';
import {ILink} from '../../types';

interface ILinksProps {
  links?: ILink[];
}
const Links = ({links = []}: ILinksProps) => {
  if (!links || !links.length) return null;

  return (
    <>
      <Stack gap={4} alignment="start" width="100%" height="auto">
        {links.map(link => (
          <Link key={link.name} link={link} />
        ))}
      </Stack>
    </>
  );
};

export default Links;
