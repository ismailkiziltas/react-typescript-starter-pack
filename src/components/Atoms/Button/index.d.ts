import type { ReactNode } from 'react';
import type { IHTMLElement } from './../../../types'

export default interface IButton extends IHTMLElement {
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'bordered-secondary' | 'link';
    children?: ReactNode;
}