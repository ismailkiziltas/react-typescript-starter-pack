// Styled
import styled, { css } from "styled-components";
import useTheme from "hooks/useTheme";

// Interface
import type IDropdown from './index.d';


const DropdownStyled = styled.div(({
    dropdown,
    chevron
}: IDropdown) => {
    const { colors, transition } = useTheme();
    return css`
        position:relative;

        .dropdownMenu{
            position:absolute;
            top:100%;
            left:0;
            width:100%;
            background-color: ${colors.white};
            z-index:3;

            ${dropdown ? `` : `visibility:hidden; opacity:0;`}
            transition: all ${transition};
        }
    `;
});

export default DropdownStyled;