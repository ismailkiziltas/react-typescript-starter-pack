import type { ReactNode } from 'react';
import type { IHTMLElement } from 'types';

export default interface ITextarea extends IHTMLElement {
    id?: string;
    display?: 'block' | 'inline' | 'inline-block';
    textAlign?: 'center' | 'left' | 'right';
    lineHeight?: 'none' | 'small' | 'normal' | 'large' | 'xLarge' | 'xxLarge';
    color?: 'primary' | 'primaryHover' | 'secondary' | 'text' | 'white';
    name?: string;
    cols?: number;
    rows?: number;
    readonly?:boolean;
    placeholder?:string;
    size?: 'xSmall' | 'small' | 'normal' | 'regular' | 'medium' | 'large' | 'xLarge';
    children?:ReactNode;
}