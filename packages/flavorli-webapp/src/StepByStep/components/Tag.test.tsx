import React from 'react';
import {render} from '../../helpers/test-helpers';
import {axe} from 'jest-axe';
import Tag from './Tag';

const tag = {
  text: 'Tag text',
  color: 'blue',
};
describe('Tag', () => {
  it('should not have any axe violations', async () => {
    const {container} = render(<Tag tag={tag} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render correctly', () => {
    const {container} = render(<Tag tag={tag} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
