// React
import type { FC, ReactElement } from 'react';
import { memo } from 'react';

// Interface
import ITextarea from './index.d';

// Styled
import TextareaStyled from './styled';

const Textarea: FC<ITextarea> = ({
    name,
    cols,
    rows,
    size = 'regular',
    placeholder = 'JSON Viewer',
    id,
    lineHeight,
    display = 'inline-block',
    textAlign = 'left',
    color = 'text',
    children,
    ...rest
}: ITextarea): ReactElement<ITextarea> => {

    return (
        <TextareaStyled placeholder={placeholder}
            style={{ ...rest.style, display }} {...rest} display={display} textAlign={textAlign} size={size} id={id} lineHeight={lineHeight} color={color} name={name} cols={cols} rows={rows}>
            {children}
        </TextareaStyled>
    );
}

export default memo(Textarea);