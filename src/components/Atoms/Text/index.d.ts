import type { ReactNode } from 'react';
import type { IHTMLElement } from '../../../types';

export default interface IText extends IHTMLElement {
    as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div';
    textAlign?: 'center' | 'left' | 'right';
    display?: 'block' | 'inline-block';
    color?: 'primary' | 'primaryHover' | 'secondary' | 'text' | 'white';
    size?: 'xSmall' | 'small' | 'normal' | 'regular' | 'medium' | 'large' | 'xLarge';
    lineHeight?: 'none' | 'small' | 'normal' | 'large' | 'xLarge' | 'xxLarge';
    children?: ReactNode
}