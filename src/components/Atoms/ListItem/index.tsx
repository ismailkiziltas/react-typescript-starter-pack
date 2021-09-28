// React
import React, { FC, forwardRef, memo, ReactElement } from 'react';

// Interface
import IListItem from './index.d';

// Styled
import LIStyled from './styled';

const ListItem: FC<IListItem> = forwardRef<HTMLLIElement, IListItem>(({
    children,
    ...rest
}, ref): ReactElement<IListItem> => {
    return (
        <LIStyled {...rest} ref={ref}>
            {children}
        </LIStyled>
    )
});

ListItem.displayName = "ListItem";

export type {
    IListItem
}
export default memo(ListItem);