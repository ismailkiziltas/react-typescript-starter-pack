import { IHTMLElement } from "../../../types";

export default interface IPicture extends IHTMLElement {
    desktop?:string;
    mobile?:string;
    image?:string;
    alt?:string;
    width?:number | string;
    height?:number | string;
}