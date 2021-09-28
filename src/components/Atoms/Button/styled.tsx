// Styled
import styled, { css } from 'styled-components';

// Hooks
import useTheme from "hooks/useTheme";

// Interface
import { IButton } from '.';

const ButtonStyled = styled.button(({
    variant,
}: IButton) => {
    const { colors, font, spacing, transition } = useTheme();

    const defaultStyle = () => {
        return css`
            padding:${spacing.xSmall} ${spacing.normal};
            font-size:${font.size.normal};
            transition:${transition};
        `
    }
    switch(variant){
        case 'primary':
            return css`
                ${defaultStyle()}
                border-color:${colors.primary};
                background-color:${colors.primary};
                color:${colors.white};

                &:hover{
                    border-color:${colors.primaryHover};
                    background-color:${colors.primaryHover};
                    color:${colors.white};
                }
            `;
        case 'secondary':
            return css`
                ${defaultStyle()}
                border-color:${colors.secondary};
                background-color: ${colors.secondary};
                color:${colors.white};

                &:hover{
                    border-color:${colors.secondaryHover};
                    background-color:${colors.secondaryHover};
                    color:${colors.white};
                }
            `;
        case 'bordered-secondary':
            return css`
                ${defaultStyle()}
                border-color:${colors.secondary};
                background-color:${colors.secondaryHover};
                color:${colors.white};

                &:hover{
                    border-color:${colors.secondaryHover};
                    background-color:${colors.secondaryHover};
                    color:${colors.white};
                }
            `;
        case 'link':
            return css`
                color:${colors.secondary};

                &:hover{
                    color:${colors.primary};
                }
            
            `;
        default:
            break;
    }
});

export default ButtonStyled;