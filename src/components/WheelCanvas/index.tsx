import { useRef, useEffect, useCallback, useMemo } from 'react';
import type { JSX } from 'react'; 

import { WheelCanvasStyle } from './styles';
import { WheelData } from '../Wheel/types';
import { clamp, getQuantity } from '../../utils';

interface WheelCanvasProps extends DrawWheelProps {
  width: string;
  height: string;
  data: WheelData[];
}

interface DrawWheelProps {
  outerBorderColor: string;
  outerBorderWidth: number;
  innerRadius: number;
  innerBorderColor: string;
  innerBorderWidth: number;
  radiusLineColor: string;
  radiusLineWidth: number;
  fontFamily: string;
  fontWeight: number | string;
  fontSize: number;
  fontStyle: string;
  perpendicularText: boolean;
  prizeMap: number[][];
  rouletteUpdater: boolean;
  textDistance: number;
}

const drawRadialBorder = (
  ctx: CanvasRenderingContext2D,
  centerX: number,
  centerY: number,
  insideRadius: number,
  outsideRadius: number,
  angle: number
): void => {
  ctx.beginPath();
  ctx.moveTo(
    centerX + (insideRadius + 1) * Math.cos(angle),
    centerY + (insideRadius + 1) * Math.sin(angle)
  );
  ctx.lineTo(
    centerX + (outsideRadius - 1) * Math.cos(angle),
    centerY + (outsideRadius - 1) * Math.sin(angle)
  );
  ctx.closePath();
  ctx.stroke();
};

const WheelCanvas = ({
  width,
  height,
  data,
  outerBorderColor,
  outerBorderWidth,
  innerRadius,
  innerBorderColor,
  innerBorderWidth,
  radiusLineColor,
  radiusLineWidth,
  fontFamily,
  fontWeight,
  fontSize,
  fontStyle,
  perpendicularText,
  prizeMap,
  rouletteUpdater,
  textDistance,
}: WheelCanvasProps): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const QUANTITY = useMemo(() => getQuantity(prizeMap), [prizeMap]);
  const drawWheel = useCallback(() => {
    const canvas = canvasRef.current;
    
    if (!canvas) {
      console.warn('Canvas ref is not available');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Could not get 2D context from canvas');
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'transparent';
    ctx.lineWidth = 0;

    const scaledOuterBorderWidth = outerBorderWidth * 2;
    const scaledInnerBorderWidth = innerBorderWidth * 2;
    const scaledRadiusLineWidth = radiusLineWidth * 2;

    let startAngle = 0;
    const outsideRadius = canvas.width / 2 - 10;

    const clampedContentDistance = clamp(0, 100, textDistance);
    const contentRadius = (outsideRadius * clampedContentDistance) / 100;

    const clampedInsideRadius = clamp(0, 100, innerRadius);
    const insideRadius = (outsideRadius * clampedInsideRadius) / 100;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    if (!data || data.length === 0) {
      console.warn('No data provided to draw wheel');
      return;
    }

    for (let i = 0; i < data.length; i++) {
      const { optionSize, style, option, image } = data[i];

      const arc =
        (optionSize && (optionSize * (2 * Math.PI)) / QUANTITY) ||
        (2 * Math.PI) / QUANTITY;
      const endAngle = startAngle + arc;

      ctx.fillStyle = (style?.backgroundColor || '#cccccc') as string;

      ctx.beginPath();
      ctx.arc(centerX, centerY, outsideRadius, startAngle, endAngle, false);
      ctx.arc(centerX, centerY, insideRadius, endAngle, startAngle, true);
      ctx.stroke();
      ctx.fill();
      ctx.save();

      ctx.strokeStyle =
        scaledRadiusLineWidth <= 0 ? 'transparent' : radiusLineColor;
      ctx.lineWidth = scaledRadiusLineWidth;
      drawRadialBorder(
        ctx,
        centerX,
        centerY,
        insideRadius,
        outsideRadius,
        startAngle
      );
      
      if (i === data.length - 1) {
        drawRadialBorder(
          ctx,
          centerX,
          centerY,
          insideRadius,
          outsideRadius,
          endAngle
        );
      }

      ctx.strokeStyle =
        scaledOuterBorderWidth <= 0 ? 'transparent' : outerBorderColor;
      ctx.lineWidth = scaledOuterBorderWidth;
      ctx.beginPath();
      ctx.arc(
        centerX,
        centerY,
        outsideRadius - ctx.lineWidth / 2,
        0,
        2 * Math.PI
      );
      ctx.closePath();
      ctx.stroke();

      ctx.strokeStyle =
        scaledInnerBorderWidth <= 0 ? 'transparent' : innerBorderColor;
      ctx.lineWidth = scaledInnerBorderWidth;
      ctx.beginPath();
      ctx.arc(
        centerX,
        centerY,
        insideRadius + ctx.lineWidth / 2 - 1,
        0,
        2 * Math.PI
      );
      ctx.closePath();
      ctx.stroke();

      ctx.translate(
        centerX + Math.cos(startAngle + arc / 2) * contentRadius,
        centerY + Math.sin(startAngle + arc / 2) * contentRadius
      );
      let contentRotationAngle = startAngle + arc / 2;

      if (image && image._imageHTML) {
        contentRotationAngle += !image.landscape ? Math.PI / 2 : 0;
        ctx.rotate(contentRotationAngle);

        const img = image._imageHTML;

        if (img.complete && img.naturalWidth > 0) {
          ctx.drawImage(
            img,
            (img.width + (image.offsetX || 0)) / -2,
            -(
              img.height -
              (image.landscape ? 0 : 90) +
              (image.offsetY || 0)
            ) / 2,
            img.width,
            img.height
          );
        }
      } else if (option) {
        contentRotationAngle += perpendicularText ? Math.PI / 2 : 0;
        ctx.rotate(contentRotationAngle);

        const text = option;
        ctx.font = `${style?.fontStyle || fontStyle} ${
          style?.fontWeight || fontWeight
        } ${(style?.fontSize || fontSize) * 2}px ${
          style?.fontFamily || fontFamily
        }, Helvetica, Arial`;
        ctx.fillStyle = (style?.textColor || '#000000') as string;

        ctx.textBaseline = 'middle';
        ctx.fillText(
          text,
          -ctx.measureText(text).width / 2,
          0
        );
      }

      ctx.restore();
      startAngle = endAngle;
    }
  }, [
    data,
    outerBorderColor,
    outerBorderWidth,
    innerRadius,
    innerBorderColor,
    innerBorderWidth,
    radiusLineColor,
    radiusLineWidth,
    fontFamily,
    fontWeight,
    fontSize,
    fontStyle,
    perpendicularText,
    prizeMap,
    textDistance,
    QUANTITY,
  ]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      drawWheel();
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [drawWheel, rouletteUpdater]);

  return (
    <WheelCanvasStyle
      ref={canvasRef}
      width={width}
      height={height}
      key={`canvas-${rouletteUpdater}`}
    />
  );
};

export default WheelCanvas;
