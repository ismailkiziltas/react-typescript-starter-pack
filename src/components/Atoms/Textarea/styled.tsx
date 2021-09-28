import useTheme from "hooks/useTheme";
import styled, { css } from "styled-components"
import ITextarea from "./index.d";

const TextareaStyled = styled.textarea(({
    size,
    display,
    textAlign,
    color,
    lineHeight
}: ITextarea
) => {
    const { font, colors, spacing } = useTheme();
    return css`
        font-size:${size ? font.size[size] : font.size.normal};
        font-weight: ${font.weight.regular};
        display:${display};
        text-align:${textAlign};
        ${lineHeight ? `line-height: ${lineHeight}` : ''};
        width:100%;
        height:200px;
        border-radius:5px;
        ${color ? `color: ${colors[color]} !important` : ''};
        margin-bottom:20px;
        border:1px solid ${colors.border};
    `;

})

export default TextareaStyled;