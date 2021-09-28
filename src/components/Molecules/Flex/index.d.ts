import type { ReactNode } from 'react';
import { IHTMLElement, IBreakpoints } from "../../../types";

export interface IFlexProperties {
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
    alignContent?: 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | 'center' | 'flex-start' | 'flex-end';
    justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between' | 'space-evenly';
    flexDirection?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
    flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
}

export default interface IFlex extends IFlexProperties,IHTMLElement{
    xxl?: IFlexProperties
    xl?: IFlexProperties
    lg?: IFlexProperties
    md?: IFlexProperties
    sm?: IFlexProperties
    children?: ReactNode;
}