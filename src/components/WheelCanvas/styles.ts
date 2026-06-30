import styled from 'styled-components';

export const WheelCanvasStyle = styled.canvas`
  width: 100%;
  height: 100%;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
`;
