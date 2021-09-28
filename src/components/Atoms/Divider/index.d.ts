import { ReactNode } from 'react';
import { IHTMLElement } from '../../../types';

export default interface IDivider extends IHTMLElement {
    children?: ReactNode
}