// React
import type {FC,ReactElement} from 'react';
import {memo} from 'react';

// Interface
import IContainer from './index.d';

// Styled
import ContainerStyled from './styled';

const Container:FC<IContainer> = ({
    query,
    width,
    children,
    ...rest
}:IContainer):ReactElement<IContainer> => {
    return(
        <ContainerStyled query={query} width={width} {...rest}>
            {children}
        </ContainerStyled>
    );
};

export type {
    IContainer
}

export default memo(Container);