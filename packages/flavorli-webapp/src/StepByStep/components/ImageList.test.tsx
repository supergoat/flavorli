import React from 'react';
import {axe} from 'jest-axe';
import userEvent from '@testing-library/user-event';
import {render} from '../../helpers/test-helpers';
import ImageList from './ImageList';
import {IImage} from '../types';

import {images} from '../mockData';

const setup = (customImages?: IImage[]) => {
  return {
    ...render(
      <>
        {/* Add a div with id step-images to be used by aria-controls */}
        <div id="step-image" />
        <ImageList images={customImages || images} />
      </>,
    ),
    images,
  };
};

describe('Step', () => {
  it('should not have any axe violations', async () => {
    const {container} = setup();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should use a section element to designate ImageList as land mark region, with an aria-lable to describe its content', () => {
    const {getByLabelText} = setup();
    const section = getByLabelText('List of step images');

    expect(section.tagName).toEqual('SECTION');
  });

  it('should render correctly', () => {
    const {container} = setup();
    expect(container).toMatchSnapshot();
  });

  it('should render an empty div if images is an empty array', () => {
    const {container} = setup([]);
    expect(container).toMatchSnapshot();
  });

  it('should display only one image at a time', async () => {
    const {queryByAltText, images} = setup();
    const [image1, ...rest] = images;
    expect(queryByAltText(`${image1.alt}`)).not.toBeNull();

    rest.forEach(image => expect(queryByAltText(image.alt)).toBeNull());
  });

  it('should have a next button that when clicked hides the current image and brings the next image into view', () => {
    const {queryByAltText, getByLabelText, images} = setup();

    const image1 = images[0];
    const image2 = images[1];

    expect(queryByAltText(`${image1.alt}`)).not.toBeNull();

    const nextButton = getByLabelText(/Next Image/i);

    userEvent.click(nextButton);

    expect(queryByAltText(`${image2.alt}`)).not.toBeNull();

    expect(queryByAltText(`${image1.alt}`)).toBeNull();
  });

  it('should have a previous button that when clicked hides the current image and brings the previous image into view', () => {
    const {queryByAltText, getByLabelText, images} = setup();

    const image1 = images[0];
    const image2 = images[1];

    const nextButton = getByLabelText(/Next Image/i);

    userEvent.click(nextButton);

    expect(queryByAltText(`${image2.alt}`)).not.toBeNull();

    const previousButton = getByLabelText(/Previous Image/i);

    userEvent.click(previousButton);

    expect(queryByAltText(`${image1.alt}`)).not.toBeNull();

    expect(queryByAltText(`${image2.alt}`)).toBeNull();
  });

  it('should have a role of group on the parent of the image enable assistive technology users to preceive the boundaries of the image', () => {
    const {getByRole} = setup();
    getByRole('group');
  });

  it('should have an aria-label to indicate to assistive technology users the image they are on', () => {
    const {getByLabelText, images} = setup();
    getByLabelText(`Image 1 of ${images.length}`);
  });

  it('should have a next button with an accessible label', () => {
    const {getByLabelText} = setup();

    getByLabelText(/Next Image/i);
  });

  it('should have a next button with aria-controls set to "step-images" to inform assistive technology users that it controls which image is displayed', () => {
    const {getByLabelText} = setup();

    const nextStepButton = getByLabelText(/Next Image/i);

    expect(nextStepButton).toHaveAttribute('aria-controls', 'step-images');
  });

  it('it should hide the next button when the current step is the last step', () => {
    const image = {src: 'fake-src', alt: ''};
    const {queryByLabelText} = setup([image]);
    expect(queryByLabelText(/Next Image/i)).not.toBeVisible();
  });

  it('should have a previous button with an accessible label', () => {
    const {getByLabelText} = setup();

    getByLabelText(/Previous Image/i);
  });

  it('should have a previous button with aria-controls set to "step-images" to inform assistive technology users that it controls which image is displayed', () => {
    const {getByLabelText} = setup();

    const previousStepButton = getByLabelText(/Previous Image/i);

    expect(previousStepButton).toHaveAttribute('aria-controls', 'step-images');
  });

  it('it should hide the previous button when the current step is the first step', () => {
    const image = {src: 'fake-src', alt: ''};
    const {queryByLabelText} = setup([image]);
    expect(queryByLabelText(/Previous Image/i)).not.toBeVisible();
  });
});
