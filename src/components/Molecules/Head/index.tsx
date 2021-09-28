//React
import type { FC, ReactElement } from 'react';

// Next
import Head from 'next/head';

// Interface
import IHead from './index.d';

const LayoutHead: FC<IHead> = ({ 
    title, 
    description, 
    keywords, 
    author, 
    twitter, 
    favicon, 
    children 
}: IHead): ReactElement<IHead> => {
    return(
        <Head>
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords} />}
            {author && <meta name="author" content={author} />}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {twitter && <meta name="twitter:title" content={twitter} />}
            {favicon && <link rel="shortcut icon" href={favicon} type="image/x-icon" />}
            {title && <title>{title}</title>}
            {children}
        </Head>
    );
};

export type {
    IHead
}
export default LayoutHead;