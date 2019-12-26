import {renderHook, act} from '@testing-library/react-hooks';
import {useTimer} from './hooks';

afterEach(() => {
  jest.restoreAllMocks();
  jest.clearAllMocks();
  jest.useRealTimers();
});

describe('useTimer', () => {
  it('should expose the time and isPaused state as well as the setIsPaused function', () => {
    jest.useFakeTimers();
    const {result} = renderHook(() => useTimer(10, 0));

    const time = result.current[0];
    const isPaused = result.current[1];
    const setIsPaused = result.current[2];

    expect(isPaused).toBe(true);
    expect(time.minutes).toEqual(10);
    expect(time.seconds).toEqual(0);
    expect(typeof setIsPaused).toBe('function');
  });

  it('should start/pause the timer when setIsPaused is called ', () => {
    jest.useFakeTimers();
    const {result} = renderHook(() => useTimer(10, 0));

    const setIsPaused = result.current[2];

    act(() => {
      setIsPaused(false);
    });

    act(() => {
      jest.runOnlyPendingTimers();
    });

    expect(result.current[1]).toBe(false);
    expect(result.current[0].minutes).toEqual(9);
    expect(result.current[0].seconds).toEqual(59);

    act(() => {
      setIsPaused(true);
    });

    act(() => {
      jest.runOnlyPendingTimers();
    });

    expect(result.current[1]).toBe(true);
    expect(result.current[0].minutes).toEqual(9);
    expect(result.current[0].seconds).toEqual(59);
  });

  it('should stop the timer when the minutes and seconds are 0', () => {
    jest.useFakeTimers();
    const {result} = renderHook(() => useTimer(0, 0));

    const setIsPaused = result.current[2];

    act(() => {
      setIsPaused(false);
    });

    act(() => {
      jest.runOnlyPendingTimers();
    });

    expect(result.current[1]).toBe(true);
    expect(result.current[0].minutes).toEqual(0);
    expect(result.current[0].seconds).toEqual(0);
  });

  it('does not attempt to set state when unmounted (to prevent memory leaks)', () => {
    jest.spyOn(console, 'error');
    jest.useFakeTimers();
    const {unmount} = renderHook(() => useTimer(10, 0));

    unmount();

    act(() => {
      jest.runOnlyPendingTimers();
    });
    expect(console.error).not.toHaveBeenCalled();
  });
});
