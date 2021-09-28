import type {FC, ReactElement} from 'react';
import {memo, forwardRef } from "react";

// Interface
import IButton from './index.d';

// Style
import ButtonStyled from './styled';

const Button: FC<IButton> = forwardRef<HTMLButtonElement | null, IButton>(({
    type='button',
    variant,
    children,
    ...rest
},ref):ReactElement<IButton> => {

    return (
        <ButtonStyled type={type} variant={variant} ref={ref} {...rest}>
            {children}
        </ButtonStyled>
    )
})
Button.displayName="Button";
export type {
    IButton
}
export default memo(Button);