interface ImagePropsLocal extends ImageProps {
    _imageHTML?: HTMLImageElement;
}
export interface WheelData {
    image?: ImagePropsLocal;
    option?: string;
    style?: StyleType;
    optionSize?: number;
}
export interface StyleType {
    backgroundColor?: string;
    textColor?: string;
    fontFamily?: string;
    fontSize?: number;
    fontWeight?: number | string;
    fontStyle?: string;
}
export interface PointerProps {
    src?: string;
    style?: React.CSSProperties;
    type?: 'image' | 'custom';
    component?: React.ReactNode;
    position?: 'top' | 'right' | 'bottom' | 'left';
    size?: number;
    offset?: {
        x: number;
        y: number;
    };
}
export interface ImageProps {
    uri: string;
    offsetX?: number;
    offsetY?: number;
    sizeMultiplier?: number;
    landscape?: boolean;
}
export {};
