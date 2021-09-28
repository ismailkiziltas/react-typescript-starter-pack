// React
import type { FC, ReactElement } from 'react';
import { memo, forwardRef } from 'react';

// Types
import IList from './index.d';

// Styled
import ULStyled from './styled';

const List: FC<IList> = forwardRef<HTMLUListElement, IList>(({
    children,
    ...rest
},ref):ReactElement<IList> => {
    return (
        <ULStyled {...rest} ref={ref}>
            {children}
        </ULStyled>
    );
});

List.displayName="List";

export default memo(List);