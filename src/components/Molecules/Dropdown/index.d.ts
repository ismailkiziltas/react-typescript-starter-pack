import React, { ReactNode } from "react";
import { IHTMLElement } from "types";


export default interface IDropdown extends IHTMLElement {
    dropdown?: boolean;
    value?: ReactNode;
    children?: ReactNode;
    chevron?: boolean;
}