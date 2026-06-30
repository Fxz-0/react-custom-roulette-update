import styled from 'styled-components';

export const NonDraggableImage = styled.img`
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  pointer-events: none;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
`;

export const BaseContainer = styled.div`
  box-sizing: border-box;
  
  *, *::before, *::after {
    box-sizing: inherit;
  }
`;

export const AnimatedWrapper = styled.div`
  transition: all 0.3s ease-in-out;
  will-change: transform, opacity;
`;
