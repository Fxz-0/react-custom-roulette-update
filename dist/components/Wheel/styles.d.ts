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
    offset?: {
        x: number;
        y: number;
    };
}
export declare const RouletteContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
export declare const RotationContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof RotationContainerProps> & RotationContainerProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof RotationContainerProps> & RotationContainerProps, never>>> & string;
export declare const RoulettePointerImage: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, never>>, "as" | "forwardedAs"> & {
    as?: import("styled-components").WebTarget | undefined;
    forwardedAs?: import("styled-components").WebTarget | undefined;
}, keyof PointerStyleProps> & PointerStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, never> & Partial<Pick<import("react").DetailedHTMLProps<import("react").ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, never>>, "as" | "forwardedAs"> & {
    as?: import("styled-components").WebTarget | undefined;
    forwardedAs?: import("styled-components").WebTarget | undefined;
}, keyof PointerStyleProps> & PointerStyleProps, never>>> & string;
export declare const CustomPointerWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof PointerStyleProps> & PointerStyleProps, never> & Partial<Pick<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof PointerStyleProps> & PointerStyleProps, never>>> & string;
export {};
