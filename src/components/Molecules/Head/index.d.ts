import type { ReactNode } from 'react';

export default interface IHead {
    title?: string;
    description?: string;
    keywords?: string;
    author?: string;
    twitter?: string;
    favicon?: string;
    children?: ReactNode;
}