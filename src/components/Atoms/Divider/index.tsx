// React
import type { FC, ReactElement } from 'react';
import { memo, forwardRef } from "react";

// Type
import IDivider from './index.d';

// Styled
import DividerStyled from './styled';

const Divider: FC<IDivider> = forwardRef<HTMLDivElement, IDivider>(({
    children,
    ...rest
}, ref): ReactElement<IDivider> => {
    return (
        <DividerStyled {...rest} ref={ref}>
            {children}
        </DividerStyled>
    )
});

Divider.displayName = "Divider";
export type {
    IDivider
}

export default memo(Divider);