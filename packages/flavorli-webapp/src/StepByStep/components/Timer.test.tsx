import React from 'react';
import {render} from '../../helpers/test-helpers';
import {axe} from 'jest-axe';
import Timer from './Timer';
import {act} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {RecipeTimersProvider} from '../timersContext';
import {timer} from '../mockData';
import {ITimer} from '../../types';
import * as useRecipeTimer from '../useRecipeTimer';

afterEach(() => {
  jest.restoreAllMocks();
  jest.useRealTimers();
});

const setup = ({type}: {type?: 'notification'} = {}) => {
  return {
    ...render(
      <RecipeTimersProvider recipeId="1">
        <Timer timerInfo={timer} type={type} />
      </RecipeTimersProvider>,
    ),
    timer,
  };
};

describe('Timer', () => {
  it('should not have any axe violations', async () => {
    const {container} = setup();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have a role of "timer" to inform assistive technology users that it is a timer', () => {
    const {getByRole} = setup();
    getByRole('timer');
  });

  it('should have an aria-label to provide the name of the timer', () => {
    const {getByLabelText, timer} = setup();
    getByLabelText(`${timer?.name}`);
  });

  it('should have a aria-atomic set to true to ensure the entirety of the time is announced in full to assistive technology users', () => {
    const {getByRole} = setup();
    expect(getByRole('timer')).toHaveAttribute('aria-atomic', 'true');
  });

  it('should have an id that can be used by aria-controls to point to the timer', () => {
    const {getByRole, timer} = setup();
    expect(getByRole('timer')).toHaveAttribute('id', `timer-${timer?.id}`);
  });

  it('should have aria-controls pointing to the timer on the start button to indicate that it controls the timer', () => {
    const {getByText, timer} = setup();
    const startButton = getByText('START');
    expect(startButton).toHaveAttribute('aria-controls', `timer-${timer?.id}`);
  });

  it('should have aria-controls pointing to the timer on the pause button to indicate that it controls the timer', () => {
    jest
      .spyOn(useRecipeTimer, 'useAddRecipeTimerIfItDoesNotExist')
      .mockImplementation((timer: ITimer) => ({
        ...timer,
        isPaused: false,
        updatedAt: new Date().toISOString(),
        remainingTime: 600000,
      }));

    const {getByText, timer} = setup();
    const pauseButton = getByText('PAUSE');
    expect(pauseButton).toHaveAttribute('aria-controls', `timer-${timer?.id}`);
  });

  it('should start the timer when the start button is pressed', () => {
    const {getByText, queryByText} = setup();

    expect(queryByText('PAUSE')).toBeNull();
    const startButton = getByText('START');

    act(() => {
      userEvent.click(startButton);
    });

    expect(queryByText('START')).toBeNull();

    getByText('PAUSE');
  });

  it('should pause the timer when the pause button is pressed', () => {
    const {getByText, queryByText} = setup();

    expect(queryByText('START')).toBeNull();
    const pauseButton = getByText('PAUSE');

    act(() => {
      userEvent.click(pauseButton);
    });

    expect(queryByText('PAUSE')).toBeNull();

    getByText('START');
  });

  it('should render correctly', () => {
    const {container} = setup();
    expect(container).toMatchSnapshot();
  });

  it('should render correctly when type is notification', () => {
    const {container} = setup({type: 'notification'});
    expect(container).toMatchSnapshot();
  });
});
