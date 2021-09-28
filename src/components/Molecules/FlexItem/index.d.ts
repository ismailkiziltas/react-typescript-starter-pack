import type { ReactNode } from 'react';
import { IHTMLElement } from '../../../types';

export interface IFlexItemProperties {
    flexBasis?: string;
    flexGrow?: number;
    flexShrink?: number;
    flex?: string;
    xSpacing?: 'xSmall' | 'small' | 'normal' | 'medium' | 'large' | 'xLarge' | 'xxLarge';
    ySpacing?: 'xSmall' | 'small' | 'normal' | 'medium' | 'large' | 'xLarge' | 'xxLarge';
}

export default interface IFlexItem extends IHTMLElement, IFlexItemProperties {
    xxl?: IFlexItemProperties
    xl?: IFlexItemProperties
    lg?: IFlexItemProperties
    md?: IFlexItemProperties
    sm?: IFlexItemProperties
    children?: ReactNode
}