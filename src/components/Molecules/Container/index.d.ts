import { ReactNode } from "react";
import {IHTMLElement} from '../../../types';


export default interface IContainer extends IHTMLElement{
    query?:number;
    width?:number;
    children?:ReactNode;
}