import React from 'react';
import {render} from '../helpers/test-helpers';
import {axe} from 'jest-axe';
import StepByStep from '.';

import {steps} from './mockData';

describe('StepByStep', () => {
  it('should not have any axe violations', async () => {
    const {container} = render(<StepByStep steps={steps} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should use a section element to designate it as land mark region, with an aria-lable to describe its content', () => {
    const {getByLabelText} = render(<StepByStep steps={steps} />);
    const section = getByLabelText('List of recipe steps');

    expect(section.tagName).toEqual('SECTION');
  });

  //   it('should have a next button that when clicked hides the current slide and brings the next slide into view', () => {
  //     const item1 = items[0];
  //     const item2 = items[1];

  //     const {queryByText, getByText} = render(
  //       <StepByStep label="steps label"/>,
  //     );
  //     expect(queryByText(item1.text)).toBeInTheDocument();

  //     const nextButton = getByText('next');

  //     userEvent.click(nextButton);

  //     expect(queryByText(item2.text)).toBeInTheDocument();

  //     expect(queryByText(item1.text)).not.toBeInTheDocument();
  //   });

  //   it('it should hide the next button when the current slide is the last slide', () => {
  //     const {queryByText} = render(
  //       <StepByStep label="steps label" currentSlide={items.length}>
  //         {slides}
  //       </StepByStep>,
  //     );
  //     expect(queryByText('next')).toBeNull();
  //   });

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
