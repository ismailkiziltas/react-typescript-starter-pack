// Style
import styled, { css } from 'styled-components';
import useTheme from 'hooks/useTheme';

// Interface
import IContainer from './index.d';

const ContainerStyled = styled.div(({ query, width }: IContainer) => {
    const { breakpoints } = useTheme();
    return css`
        margin:0 auto;

        ${query && width && query >= width ? `
            @media(max-width: ${query - 1}px){
                max-width:100%;
            }

            @media(min-width: ${query} px){
                max-width:${width}px;
            }`:
            `
                @media (max-width: ${breakpoints.lg - 1}px) {
                    max-width: 100%;
                }
    
                @media (min-width: ${breakpoints.lg}px) {
                    max-width: ${breakpoints.lg}px;
                }
    
                @media (min-width: ${breakpoints.xl}px) {
                    max-width: ${breakpoints.xl}px;
                }
    
                @media (min-width: ${breakpoints.xxl}px) {
                    max-width: ${breakpoints.xxl}px;
                }
            `}
    `;
});

export default ContainerStyled;
