// React
import type {FC, ReactElement} from 'react';
import { forwardRef, memo } from "react";

// Interface
import IInput from './index.d';

// Styled
import InputStyled from './styled';

const Input : FC<IInput> = forwardRef<HTMLInputElement, IInput>(({
    type='text',
    defaultValue='',
    placeholder='',
    ...rest
},ref):ReactElement<IInput> => {
    return(
        <InputStyled type={type} defaultValue={defaultValue} placeholder={placeholder} {...rest} ref={ref}/>
    )
});

Input.displayName="Input";

export type {
    IInput
}
export default memo(Input)