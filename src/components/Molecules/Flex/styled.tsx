// Style
import styled, { css } from "styled-components";
import useTheme from "hooks/useTheme";

// Interface
import IFlex, { IFlexProperties } from './index.d';

const FlexStyled = styled.div(({
    xxl,
    xl,
    lg,
    md,
    sm,
    alignContent = 'stretch',
    alignItems = 'stretch',
    flexDirection = 'row',
    flexWrap = 'wrap',
    justifyContent = 'flex-start'
}: IFlex) => {
    const { breakpoints } = useTheme();
    const flexContainerStyle = (flexProperty: IFlexProperties) => {
        return css`
        display:flex;
        ${flexProperty.alignContent ? `align-content: ${flexProperty.alignContent};` : ''}
        ${flexProperty.alignItems ? `align-items: ${flexProperty.alignItems};` : ''}
        ${flexProperty.flexDirection ? `flex-direction: ${flexProperty.flexDirection};` : ''}
        ${flexProperty.flexWrap ? `flex-wrap: ${flexProperty.flexWrap};` : ''}
        ${flexProperty.justifyContent ? `justify-content: ${flexProperty.justifyContent};` : ''}
    `;
    };

    if (xxl) {
        return css`
            @media (min-width: ${breakpoints.xxl}px){
                ${flexContainerStyle(xxl)}
            }
        `;
    }

    if (xl) {
        return css`
            @media (min-width: ${breakpoints.xl}px){
                ${flexContainerStyle(xl)}
            }
        `;
    }
    if (lg) {
        return css`
            @media (min-width: ${breakpoints.lg}px) {
                ${flexContainerStyle(lg)}
            }
        `
    }

    if (md) {
        return css`
            @media (min-width: ${breakpoints.md}px) {
                ${flexContainerStyle(md)}
            }
        `
    }

    if (sm) {
        return css`
            @media (min-width: ${breakpoints.sm}px) {
                ${flexContainerStyle(sm)}
            }
        `
    }
    return flexContainerStyle({
        alignContent,
        alignItems,
        flexDirection,
        flexWrap,
        justifyContent
    });
});
export default FlexStyled;
