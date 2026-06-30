import { render, waitFor, act } from '@testing-library/react';
import { Wheel } from '.';

const data = [{ option: '0' }];
const prizeNumber = 0;
const mustStartSpinning = false;

const backgroundColors = ['#3e3e3e', '#df3428'];
const textColors = ['white'];
const outerBorderColor = '#d8a35a';
const outerBorderWidth = 8;
const innerBorderColor = '#d8a35a';
const innerBorderWidth = 17;
const innerRadius = 40;
const radiusLineColor = '#dddddd';
const radiusLineWidth = 3;
const fontSize = 20;
const textDistance = 86;
const onStopSpinning = () => null;

jest.useFakeTimers();

describe('Render Wheel', () => {
  it('required props only', () => {
    const { container } = render(
      <Wheel
        data={data}
        prizeNumber={prizeNumber}
        mustStartSpinning={mustStartSpinning}
      />
    );
    expect(container).toBeTruthy();
  });

  it('innerBorderWidth = 0', () => {
    const { container } = render(
      <Wheel
        data={data}
        prizeNumber={prizeNumber}
        mustStartSpinning={mustStartSpinning}
        innerBorderWidth={0}
      />
    );
    expect(container).toBeTruthy();
  });

  it('outerBorderWidth = 0', () => {
    const { container } = render(
      <Wheel
        data={data}
        prizeNumber={prizeNumber}
        mustStartSpinning={mustStartSpinning}
        outerBorderWidth={0}
      />
    );
    expect(container).toBeTruthy();
  });

  it('radiusLineWidth = 0', () => {
    const { container } = render(
      <Wheel
        data={data}
        prizeNumber={prizeNumber}
        mustStartSpinning={mustStartSpinning}
        radiusLineWidth={0}
      />
    );
    expect(container).toBeTruthy();
  });

  it('all props defined', () => {
    const { container } = render(
      <Wheel
        data={data}
        prizeNumber={prizeNumber}
        mustStartSpinning={mustStartSpinning}
        backgroundColors={backgroundColors}
        textColors={textColors}
        fontSize={fontSize}
        outerBorderColor={outerBorderColor}
        outerBorderWidth={outerBorderWidth}
        innerRadius={innerRadius}
        innerBorderColor={innerBorderColor}
        innerBorderWidth={innerBorderWidth}
        radiusLineColor={radiusLineColor}
        radiusLineWidth={radiusLineWidth}
        perpendicularText
        textDistance={textDistance}
        onStopSpinning={onStopSpinning}
      />
    );
    expect(container).toBeTruthy();
  });

  it('render spin', async () => {
    const { container } = render(
      <Wheel data={data} prizeNumber={prizeNumber} mustStartSpinning />
    );

    act(() => {
      jest.runOnlyPendingTimers();
    });

    await waitFor(() => {
      expect(container).toBeTruthy();
    });
  });

  it('render callback trigger', async () => {
    let hasBeenCalled = false;

    render(
      <Wheel
        data={data}
        prizeNumber={prizeNumber}
        mustStartSpinning
        onStopSpinning={() => {
          hasBeenCalled = true;
          return null;
        }}
      />
    );

    expect(hasBeenCalled).not.toBe(true);

    act(() => {
      jest.runAllTimers();
    });

    await waitFor(() => {
      expect(hasBeenCalled).toBe(true);
    });
  });
});
