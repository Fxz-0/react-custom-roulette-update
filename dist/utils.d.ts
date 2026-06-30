interface RotationOptions {
    prizeNumber: number;
    numberOfPrizes: number;
    randomDif?: boolean;
    spinRevolutions?: number;
}
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
export declare const getRotationDegrees: (prizeNumber: number, numberOfPrizes: number, randomDif?: boolean, spinRevolutions?: number) => number;
export declare const getRotationDegreesWithOptions: ({ prizeNumber, numberOfPrizes, randomDif, spinRevolutions, }: RotationOptions) => number;
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
export declare const clamp: (min: number, max: number, val: number) => number;
export declare const normalizeAngle: (angle: number) => number;
export declare const degreesToRadians: (degrees: number) => number;
export declare const radiansToDegrees: (radians: number) => number;
/**
 * @param font - font family
 * @returns true - personality font
 *
 * @example
 * isCustomFont('Arial') // false
 * isCustomFont('Nunito') // true
 */
export declare const isCustomFont: (font: string) => boolean;
export declare const extractCustomFonts: (fonts: string[]) => string[];
/**
 * @param prizeMap - rewards maps
 * @returns - n segments
 *
 * @example
 * getQuantity([[0], [1, 2], [3]]) // return 4
 */
export declare const getQuantity: (prizeMap: number[][]) => number;
export declare const validatePrizeMap: (prizeMap: number[][]) => boolean;
export declare const getPrizeIndexFromSegment: (segment: number, prizeMap: number[][]) => number;
/**
 * @param length - Long key
 * @returns Aletory Key
 *
 * @example
 * makeClassKey(5) // return "aB3xZ"
 */
export declare const makeClassKey: (length: number) => string;
export declare const generateUniqueId: () => string;
export declare const isInRange: (value: number, min: number, max: number) => boolean;
export declare const validateWheelData: (data: any[]) => boolean;
export declare const calculateSegmentFromRotation: (rotation: number, totalSegments: number) => number;
export declare const getRotationFromMatrix: (matrix: string) => number;
export declare const formatNumber: (num: number, decimals?: number) => string;
export declare const hexToRgb: (hex: string) => {
    r: number;
    g: number;
    b: number;
} | null;
export {};
