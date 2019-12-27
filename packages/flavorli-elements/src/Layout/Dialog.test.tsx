import React, {useRef} from 'react';
import userEvent from '@testing-library/user-event';
import {render} from '../test-helpers';
import {axe} from 'jest-axe';
import {Dialog} from './Dialog';
import * as hooks from '../hooks';
import {fireEvent} from '@testing-library/react';

const setup = () => {
  const mockOnClose = jest.fn();
  return {
    ...render(
      <Dialog
        label="Dialog Label"
        describedbyID="describedbyID"
        onClose={mockOnClose}
      >
        <div>No Focusable Element</div>
        <div>Another No Focusable Element</div>
        <div>
          <button>Focus Me</button>
        </div>
      </Dialog>,
    ),
    mockOnClose,
  };
};

describe('Dialog', () => {
  it('should not have any axe violations', async () => {
    const {container} = setup();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have a role set to dialog', () => {
    const {getByRole} = setup();
    getByRole('dialog');
  });

  it('should have aria-modal set to true to prevent assistive technology users from interacting with content outside the dialog', () => {
    const {getByRole} = setup();
    expect(getByRole('dialog')).toHaveAttribute('aria-modal', 'true');
  });

  it('should disable body scroll to prevent keyboard/mouse users from interacting with content outside the dialog', () => {
    setup();
    expect(document.body).toHaveStyle('overflow: hidden');
  });

  it('should have an aria-label to inform assistive technology users about the content of the dialog ', () => {
    const {getByLabelText} = setup();
    getByLabelText('Dialog Label');
  });

  it('should have an aria-describedby that refers to the dialog content that describes the primary message or purpose of the dialog.', () => {
    const {getByLabelText} = setup();
    expect(getByLabelText('Dialog Label')).toHaveAttribute(
      'aria-describedby',
      'describedbyID',
    );
  });

  it('should move focus to the first focusable element', () => {
    const {getByText} = setup();
    expect(getByText('Focus Me')).toHaveFocus();
  });

  it('should call useTrapFocus', () => {
    jest.spyOn(hooks, 'useTrapFocus');
    setup();

    expect(hooks.useTrapFocus).toHaveBeenCalled();
  });

  it('should call onClose when the esc key is pressed', () => {
    const {mockOnClose} = setup();
    fireEvent.keyDown(document, {key: 'Escape', code: 27});
    expect(mockOnClose).toHaveBeenCalled();
  });
});
