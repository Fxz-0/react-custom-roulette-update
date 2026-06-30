export { Wheel } from './components/Wheel';

export type { 
  WheelData, 
  StyleType, 
  PointerProps, 
  ImageProps 
} from './components/Wheel/types';

export {
  getRotationDegrees,
  clamp,
  isCustomFont,
  getQuantity,
  validateWheelData,
  calculateSegmentFromRotation,
  normalizeAngle,
} from './utils';

export {
  DEFAULT_BACKGROUND_COLORS,
  DEFAULT_TEXT_COLORS,
  DEFAULT_SPIN_DURATION,
  DEFAULT_SPIN_REVOLUTIONS,
  DEFAULT_FONT_FAMILY,
  DEFAULT_FONT_SIZE,
} from './strings';