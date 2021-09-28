import { ReactNode } from "react";
import { IHTMLElement } from '../../../types';


export default interface IListItem extends IHTMLElement {
    children?: ReactNode
}