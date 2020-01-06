import React from 'react';
import {axe} from 'jest-axe';
import {render} from '../../helpers/test-helpers';
import Step from './Step';
import {StepByStepProvider} from '../helpers/StepByStepContext';
import {IColor} from '@flavorli/elements/lib/theme/colors';
import Notebook from '../icons/notebook.svg';

const setup = ({
  isDialog,
  background,
  image,
}: {
  isDialog?: boolean;
  background?: IColor;
  image?: string;
} = {}) => {
  return {
    ...render(
      <>
        {/* Add a div with id recipe-steps to be used by aria-controls */}
        <div id="recipe-steps" />
        <StepByStepProvider initialValues={{noOfSteps: 10}}>
          <Step isDialog={isDialog} background={background} image={image}>
            children
          </Step>
        </StepByStepProvider>
      </>,
    ),
  };
};

describe('Step', () => {
  it('should not have any axe violations', async () => {
    const {container} = setup();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render correctly', () => {
    const {container} = setup();
    expect(container).toMatchSnapshot();
  });

  it('should render correctly when is dialog is true', () => {
    const {container} = setup({isDialog: true});
    expect(container).toMatchSnapshot();
  });

  it('should render correctly when a background is provided', () => {
    const {container} = setup({background: 'backdropDark'});
    expect(container).toMatchSnapshot();
  });

  it('should render correctly when an image is provided', () => {
    const {container} = setup({image: Notebook});
    expect(container).toMatchSnapshot();
  });
});
