// React
import type { FC, ReactElement } from 'react';
import { memo } from 'react';

// Interface
import IFlexItem, { IFlexItemProperties } from './index.d';

// Styled
import FlexItemStyled from './styled';

const FlexItem: FC<IFlexItem> = ({
    xxl,
    xl,
    lg,
    md,
    sm,
    children,
    ...rest
}: IFlexItem): ReactElement<IFlexItem> => {
    return (
        <FlexItemStyled
            xxl={xxl}
            xl={xl}
            lg={lg}
            md={md}
            sm={sm}
            {...rest}>
            {children}
        </FlexItemStyled>
    )
};
export type {
    IFlexItem,
    IFlexItemProperties
}

export default memo(FlexItem);
