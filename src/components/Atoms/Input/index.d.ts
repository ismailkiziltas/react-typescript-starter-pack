import type { IHTMLElement } from './../../../types';

export default interface IInput extends IHTMLElement {
    type?: 'text' | 'email' | 'number' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'file' | 'hidden' | 'radio' | 'search' | 'tel' | 'time' | 'url' | 'week' | 'range' | 'password';
    defaultValue?: string;
    placeholder?: string;
}