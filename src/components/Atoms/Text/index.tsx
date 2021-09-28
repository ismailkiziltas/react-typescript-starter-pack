// React
import type { FC, ReactElement } from 'react';
import { memo } from 'react';

// Interface
import IText from './index.d';

// Styled
import TextStyled from './styled';

const Text: FC<IText> = ({
    as = 'p',
    display = 'inline-block',
    textAlign = 'left',
    color = 'text',
    size = 'normal',
    lineHeight = 'none',
    children,
    ...rest
}, ref): ReactElement<IText> => {
    return (
        <TextStyled display={display} color={color} textAlign={textAlign} size={size} lineHeight={lineHeight} {...rest}>
            {as === 'p' ? <p {...rest} style={{
                ...rest.style,
                display
            }}>
                {children}
            </p> : as === 'span' ? <span {...rest} style={{
                ...rest.style,
                display
            }}>
                {children}
            </span> : as === 'h1' ? <h1 {...rest} style={{
                ...rest.style,
                display
            }}>
                {children}
            </h1> : as === 'h2' ? <h2 {...rest} style={{
                ...rest.style,
                display
            }}>
                {children}
            </h2> : as === 'h3' ? <h3 {...rest} style={{
                ...rest.style,
                display
            }}>
                {children}
            </h3> : as === 'h4' ? <h4 {...rest} style={{
                ...rest.style,
                display
            }}>
                {children}
            </h4> : as === 'h5' ? <h5 {...rest} style={{
                ...rest.style,
                display
            }}>
                {children}
            </h5> : as === 'h6' ? <h6 {...rest} style={{
                ...rest.style,
                display
            }}>
                {children}
            </h6> :
            <div {...rest} style={rest.style}>{children}</div>}
        </TextStyled>
    );
};

export type { IText }

export default memo(Text);
