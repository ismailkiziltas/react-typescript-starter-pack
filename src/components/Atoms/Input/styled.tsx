// Styled
import styled, { css } from 'styled-components';
import useTheme from 'hooks/useTheme';

// Interface
import IInput from './index.d';

const InputStyled = styled.input(({
    type
}: IInput) => {
    const { colors, spacing, font } = useTheme();

    return css`
        border: 1px solid ${colors.secondary};
        font-size: ${font.size.normal};
        width: 100%;
        border: none;
        text-indent: ${spacing.normal};
        padding: ${spacing.normal} 0;
    `;
});

export default InputStyled;