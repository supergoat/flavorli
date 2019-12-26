import React from 'react';
import {render} from '../../helpers/test-helpers';
import {axe} from 'jest-axe';
import Links from './Links';

const links = [
  {
    heading: 'Link Heading',
    name: 'Link Name',
  },
];
describe('Links', () => {
  it('should not have any axe violations', async () => {
    const {container} = render(<Links links={links} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render correctly', () => {
    const {container} = render(<Links links={links} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render an empty div if the links are an empty array', () => {
    const {container} = render(<Links links={[]} />);
    expect(container.firstChild).toBeNull();
  });
});
