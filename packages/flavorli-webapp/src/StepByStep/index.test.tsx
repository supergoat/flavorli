import React from 'react';
import {axe} from 'jest-axe';
import {render} from '../helpers/test-helpers';
import StepByStep from '.';
import userEvent from '@testing-library/user-event';

import {steps} from './mockData';

const setup = () => {
  return render(<StepByStep steps={steps} />);
};
describe('StepByStep', () => {
  it('should not have any axe violations', async () => {
    const {container} = setup();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should use a section element to designate stepByStep as land mark region, with an aria-lable to describe its content', () => {
    const {getByLabelText} = setup();
    const section = getByLabelText('List of recipe steps');

    expect(section.tagName).toEqual('SECTION');
  });

  it('should have a continue button that when clicked hides the current step and brings the next step into view', () => {
    const step1 = steps[0];
    const step2 = steps[1];
    const {queryByLabelText, getByText} = setup();
    expect(
      queryByLabelText(`Step ${step1.no} of ${steps.length}`),
    ).toBeInTheDocument();

    const continueButton = getByText(/continue/i);

    userEvent.click(continueButton);

    expect(
      queryByLabelText(`Step ${step2.no} of ${steps.length}`),
    ).toBeInTheDocument();

    expect(
      queryByLabelText(`Step ${step1.no} of ${steps.length}`),
    ).not.toBeInTheDocument();
  });

  //   it('should have a previous button that when clicked hides the current slide and brings the previous slide into view', () => {
  //     const item1 = items[0];
  //     const item2 = items[1];

  //     const {queryByText, getByText, getByLabelText} = render(
  //       <StepByStep label="steps label" currentSlide={2}>
  //         {slides}
  //       </StepByStep>,
  //     );

  //     expect(queryByText(item2.text)).toBeInTheDocument();
  //     expect(getByLabelText(`Slide 2 of ${items.length}`));

  //     const previousButton = getByText('previous');

  //     userEvent.click(previousButton);

  //     expect(queryByText(item1.text)).toBeInTheDocument();
  //     expect(getByLabelText(`Slide 1 of ${items.length}`));

  //     expect(queryByText(item2.text)).not.toBeInTheDocument();
  //   });

  //   it('it should hide the previous button when the current slide is the first slide', () => {
  //     const {queryByText} = render(
  //       <StepByStep label="steps label"/>,
  //     );
  //     expect(queryByText('previous')).toBeNull();
  //   });
});
