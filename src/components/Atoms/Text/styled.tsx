// Style
import styled, { css } from 'styled-components';
import useTheme from 'hooks/useTheme';

// Interface
import IText from './index.d';

const TextStyled = styled.span(({ display, textAlign, color, size, lineHeight }:IText) => {
    const { font, colors } = useTheme();

    return css`
        font-size:${size ? font.size[size] : font.size.normal};
        font-weight:${font.weight.regular};
        display: ${display};
        text-align:${textAlign};
        line-height:${lineHeight};
        ${color ? `color:${colors[color]}`:''}
    `;
})

export default TextStyled;