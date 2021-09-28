// React
import type { FC, ReactElement } from 'react';
import { memo } from 'react';

// Interface
import IFlex from "./index.d";

// Styled
import FlexStyled from './styled';

const Flex: FC<IFlex> = ({
    xxl,
    xl,
    lg,
    md,
    sm,
    children,
    ...rest
}: IFlex): ReactElement<IFlex> => {
    return (
        <FlexStyled xxl={xxl} xl={xl} lg={lg} md={md} sm={sm} {...rest}>
            {children}
        </FlexStyled>
    );
};

export type {
    IFlex
}

export default memo(Flex)