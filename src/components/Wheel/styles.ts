import styled from 'styled-components';
import { NonDraggableImage } from '../common/styledComponents';

interface RotationContainerProps {
  $classKey: string;
  $startSpinningTime: number;
  $continueSpinningTime: number;
  $stopSpinningTime: number;
  $startRotationDegrees: number;
  $finalRotationDegrees: number;
  $disableInitialAnimation: boolean;
  $spinRevolutions?: number;
  $easingFunction?: string;
}

interface PointerStyleProps {
  position?: 'top' | 'right' | 'bottom' | 'left';
  size?: number;
  offset?: { x: number; y: number };
}

export const RouletteContainer = styled.div`
  position: relative;
  width: 80vw;
  max-width: 445px;
  height: 80vw;
  max-height: 445px;
  object-fit: contain;
  flex-shrink: 0;
  z-index: 5;
  pointer-events: none;
`;

export const RotationContainer = styled.div<RotationContainerProps>`
  position: absolute;
  width: 100%;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(${props => props.$startRotationDegrees}deg);

  &.started-spinning {
    animation: 
      spin-${({ $classKey }) => $classKey} 
      ${({ $startSpinningTime }) => $startSpinningTime / 1000}s 
      ${props => props.$easingFunction || `cubic-bezier(
        0.71,
        ${props.$disableInitialAnimation ? 0 : -0.29},
        0.96,
        0.9
      )`} 
      0s 1 normal forwards running,
      
      continueSpin-${({ $classKey }) => $classKey} 
      ${({ $continueSpinningTime }) => $continueSpinningTime / 1000}s 
      linear 
      ${({ $startSpinningTime }) => $startSpinningTime / 1000}s 
      1 normal forwards running,
      
      stopSpin-${({ $classKey }) => $classKey} 
      ${({ $stopSpinningTime }) => $stopSpinningTime / 1000}s 
      ${props => props.$easingFunction || 'cubic-bezier(0, 0, 0.35, 1.02)'} 
      ${({ $startSpinningTime, $continueSpinningTime }) =>
        ($startSpinningTime + $continueSpinningTime) / 1000}s 
      1 normal forwards running;
  }

  @keyframes spin-${({ $classKey }) => $classKey} {
    from {
      transform: rotate(${props => props.$startRotationDegrees}deg);
    }
    to {
      transform: rotate(${props => props.$startRotationDegrees + 360}deg);
    }
  }
  
  @keyframes continueSpin-${({ $classKey }) => $classKey} {
    from {
      transform: rotate(${props => props.$startRotationDegrees}deg);
    }
    to {
      transform: rotate(${props => props.$startRotationDegrees + 360}deg);
    }
  }
  
  @keyframes stopSpin-${({ $classKey }) => $classKey} {
    from {
      transform: rotate(${props => props.$startRotationDegrees}deg);
    }
    to {
      transform: rotate(${props => 
        (360 * (props.$spinRevolutions || 4)) + props.$finalRotationDegrees}deg);
    }
  }
`;

export const RoulettePointerImage = styled(NonDraggableImage)<PointerStyleProps>`
  position: absolute;
  z-index: 5;
  width: ${props => props.size || 17}%;
  
  ${props => {
    const pos = props.position || 'right';
    const offset = props.offset || { x: 0, y: 0 };
    
    switch(pos) {
      case 'top':
        return `
          top: ${6 + offset.y}px;
          left: 50%;
          transform: translateX(-50%) rotate(-90deg);
        `;
      case 'right':
        return `
          right: ${6 + offset.x}px;
          top: ${15 + offset.y}px;
        `;
      case 'bottom':
        return `
          bottom: ${6 + offset.y}px;
          left: 50%;
          transform: translateX(-50%) rotate(90deg);
        `;
      case 'left':
        return `
          left: ${6 + offset.x}px;
          top: ${15 + offset.y}px;
          transform: rotate(180deg);
        `;
      default:
        return `
          right: ${6 + offset.x}px;
          top: ${15 + offset.y}px;
        `;
    }
  }}
`;

export const CustomPointerWrapper = styled.div<PointerStyleProps>`
  position: absolute;
  z-index: 5;
  width: ${props => props.size || 17}%;
  
  ${props => {
    const pos = props.position || 'right';
    const offset = props.offset || { x: 0, y: 0 };
    
    switch(pos) {
      case 'top':
        return `
          top: ${6 + offset.y}px;
          left: 50%;
          transform: translateX(-50%) rotate(-90deg);
        `;
      case 'right':
        return `
          right: ${6 + offset.x}px;
          top: ${15 + offset.y}px;
        `;
      case 'bottom':
        return `
          bottom: ${6 + offset.y}px;
          left: 50%;
          transform: translateX(-50%) rotate(90deg);
        `;
      case 'left':
        return `
          left: ${6 + offset.x}px;
          top: ${15 + offset.y}px;
          transform: rotate(180deg);
        `;
      default:
        return `
          right: ${6 + offset.x}px;
          top: ${15 + offset.y}px;
        `;
    }
  }}
`;