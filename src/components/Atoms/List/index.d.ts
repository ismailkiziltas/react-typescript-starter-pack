import { ReactNode } from "react";
import { IHTMLElement } from "./../../../types";


export default interface IList extends IHTMLElement {
    children?:ReactNode;
}