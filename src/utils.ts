import { WEB_FONTS } from './strings';

interface RotationOptions {
  prizeNumber: number;
  numberOfPrizes: number;
  randomDif?: boolean;
  spinRevolutions?: number;
}

// Rotation Funtions
/**
 * @param prizeNumber - (0-based)
 * @param numberOfPrizes 
 * @param randomDif - (default: true)
 * @param spinRevolutions -(default: 4)
 * @returns
 * 
 * @example
 * getRotationDegrees(3, 8) // returns ~135°
 */
export const getRotationDegrees = (
  prizeNumber: number,
  numberOfPrizes: number,
  randomDif = true,
  spinRevolutions = 4
): number => {
  if (numberOfPrizes <= 0) {
    console.error('numberOfPrizes must be greater than 0');
    return 0;
  }

  if (prizeNumber < 0 || prizeNumber >= numberOfPrizes) {
    console.error(
      `prizeNumber (${prizeNumber}) must be between 0 and ${numberOfPrizes - 1}`
    );
    return 0;
  }

  const degreesPerPrize = 360 / numberOfPrizes;

  const initialRotation = 43 + degreesPerPrize / 2;

  const randomDifference = randomDif
    ? (-1 + Math.random() * 2) * degreesPerPrize * 0.35
    : 0;

  const baseRotation =
    degreesPerPrize * (numberOfPrizes - prizeNumber) - initialRotation;

  const prizeRotation = baseRotation + randomDifference;

  const totalRotation = prizeRotation + 360 * spinRevolutions;

  return numberOfPrizes - prizeNumber > numberOfPrizes / 2
    ? -360 + totalRotation
    : totalRotation;
};

export const getRotationDegreesWithOptions = ({
  prizeNumber,
  numberOfPrizes,
  randomDif = true,
  spinRevolutions = 4,
}: RotationOptions): number => {
  return getRotationDegrees(
    prizeNumber,
    numberOfPrizes,
    randomDif,
    spinRevolutions
  );
};

// Math funtions

/**
 * @param min - Value min
 * @param max - Value máx
 * @param val - Value limit
 * @returns Value (min - max)
 * 
 * @example
 * clamp(0, 100, 150) // returns => 100
 * clamp(0, 100, -10) // returns => 0
 * clamp(0, 100, 50)  // returns => 50
 */
export const clamp = (min: number, max: number, val: number): number => {
  if (min > max) {
    console.warn(`clamp: min (${min}) is greater than max (${max}), swapping`);
    [min, max] = [max, min];
  }

  return Math.min(Math.max(min, +val), max);
};

/* 0-360 */
export const normalizeAngle = (angle: number): number => {
  return ((angle % 360) + 360) % 360;
};

export const degreesToRadians = (degrees: number): number => {
  return (degrees * Math.PI) / 180;
};

export const radiansToDegrees = (radians: number): number => {
  return (radians * 180) / Math.PI;
};

/**
 * @param font - font family
 * @returns true - personality font
 * 
 * @example
 * isCustomFont('Arial') // false
 * isCustomFont('Nunito') // true
 */
export const isCustomFont = (font: string): boolean => {
  if (!font || typeof font !== 'string') return false;
  
  const normalizedFont = font.trim().toLowerCase();
  return normalizedFont !== '' && !WEB_FONTS.includes(normalizedFont);
};

export const extractCustomFonts = (fonts: string[]): string[] => {
  return fonts
    .map(font => font.trim())
    .filter(isCustomFont)
    .filter((font, index, self) => self.indexOf(font) === index);
};

// FUNCIONES DE PRIZE MAP

/**
 * @param prizeMap - rewards maps
 * @returns - n segments 
 * 
 * @example
 * getQuantity([[0], [1, 2], [3]]) // return 4
 */
export const getQuantity = (prizeMap: number[][]): number => {
  if (!prizeMap || prizeMap.length === 0) {
    console.warn('getQuantity: prizeMap is empty');
    return 0;
  }

  const lastArray = prizeMap[prizeMap.length - 1];
  
  if (!lastArray || lastArray.length === 0) {
    console.warn('getQuantity: last array in prizeMap is empty');
    return 0;
  }

  return lastArray[lastArray.length - 1] + 1;
};

export const validatePrizeMap = (prizeMap: number[][]): boolean => {
  if (!prizeMap || prizeMap.length === 0) return false;

  let expectedNumber = 0;
  for (const array of prizeMap) {
    if (!array || array.length === 0) return false;
    
    for (const num of array) {
      if (num !== expectedNumber) {
        console.error(
          `Invalid prize map: expected ${expectedNumber}, got ${num}`
        );
        return false;
      }
      expectedNumber++;
    }
  }

  return true;
};

export const getPrizeIndexFromSegment = (
  segment: number,
  prizeMap: number[][]
): number => {
  for (let i = 0; i < prizeMap.length; i++) {
    if (prizeMap[i].includes(segment)) {
      return i;
    }
  }
  return -1;
};

const CHARACTERS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

/**
 * @param length - Long key
 * @returns Aletory Key
 * 
 * @example
 * makeClassKey(5) // return "aB3xZ"
 */
export const makeClassKey = (length: number): string => {
  if (length <= 0) {
    console.warn('makeClassKey: length must be greater than 0');
    return '';
  }

  let result = '';
  const charactersLength = CHARACTERS.length;
  
  for (let i = 0; i < length; i++) {
    result += CHARACTERS.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

export const generateUniqueId = (): string => {
  return `wheel-${Date.now()}-${makeClassKey(8)}`;
};

export const isInRange = (
  value: number,
  min: number,
  max: number
): boolean => {
  return value >= min && value <= max;
};

export const validateWheelData = (data: any[]): boolean => {
  if (!Array.isArray(data) || data.length === 0) {
    console.error('Wheel data must be a non-empty array');
    return false;
  }

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    
    if (!item.option && !item.image) {
      console.error(`Item ${i} must have either 'option' or 'image'`);
      return false;
    }

    if (item.optionSize && (item.optionSize <= 0 || !Number.isInteger(item.optionSize))) {
      console.error(`Item ${i} has invalid optionSize: ${item.optionSize}`);
      return false;
    }
  }

  return true;
};

export const calculateSegmentFromRotation = (
  rotation: number,
  totalSegments: number
): number => {
  if (totalSegments <= 0) return -1;

  const normalizedRotation = normalizeAngle(rotation);
  const segmentAngle = 360 / totalSegments;
  const adjustedRotation = normalizeAngle(360 - normalizedRotation + 90);
  
  return Math.floor(adjustedRotation / segmentAngle) % totalSegments;
};

export const getRotationFromMatrix = (matrix: string): number => {
  if (!matrix || matrix === 'none') return 0;

  const values = matrix.split('(')[1].split(')')[0].split(',');
  const a = parseFloat(values[0]);
  const b = parseFloat(values[1]);
  
  return Math.atan2(b, a) * (180 / Math.PI);
};

export const formatNumber = (num: number, decimals = 2): string => {
  return num.toFixed(decimals);
};

/* hex an RGB */
export const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};
