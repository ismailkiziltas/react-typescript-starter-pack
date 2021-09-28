// Styled
import styled, { css } from 'styled-components';
import useTheme from '../../../hooks/useTheme';

// Interface
import IFlexItem, { IFlexItemProperties } from './index.d';

const FlexItemStyled = styled.div(({
    xxl,
    xl,
    lg,
    md,
    sm,
    flexBasis,
    flexGrow = 0,
    flexShrink = 0,
    ySpacing,
    xSpacing,
    flex
}: IFlexItem) => {
    const { breakpoints, spacing } = useTheme();

    const FlexItemStyle = (FlexItem: IFlexItemProperties, query?: number) => {
        return css`
            ${query ? `@media (min-width: ${query}px) {` : ''}
                ${FlexItem.flexBasis ? `
                    ${FlexItem.flexBasis === 'auto' ? `
                        flex-basis: auto;
                        width: auto;
                        max-width: 100%;
                    `: `flex-basis:${FlexItem.flexBasis};`}
                `: `
                    width: 100%;
                `}
                ${FlexItem.flexGrow ? `
                    flex-grow:${FlexItem.flexGrow};
                    ${!FlexItem.flexBasis && `
                        flex-basis: 0;
                    `}
                ` : ''}
                ${FlexItem.flexShrink ? `flex-shrink: ${FlexItem.flexShrink};` : ''}
                ${FlexItem.xSpacing ? `padding-left: ${spacing[FlexItem.xSpacing]}` : '0'};
                ${FlexItem.xSpacing ? `padding-right: ${spacing[FlexItem.xSpacing]}` : '0'};
                ${FlexItem.ySpacing ? `padding-top: ${spacing[FlexItem.ySpacing]}` : '0'};
                ${FlexItem.ySpacing ? `padding-right: ${spacing[FlexItem.ySpacing]}` : '0'};
                ${FlexItem.flex ? `flex:${FlexItem.flex}` : ''};
            ${query ? '}' : ''}
        `;
    }

    return css`
        

        ${FlexItemStyle({
        flexBasis,
        flexGrow,
        flexShrink,
        xSpacing,
        ySpacing,
        flex
    })}
        ${sm && FlexItemStyle(sm, breakpoints.sm)}
        ${md && FlexItemStyle(md, breakpoints.md)}
        ${lg && FlexItemStyle(lg, breakpoints.lg)}
        ${xl && FlexItemStyle(xl, breakpoints.xl)}
        ${xxl && FlexItemStyle(xxl, breakpoints.xxl)}
    `;
});

export default FlexItemStyled;