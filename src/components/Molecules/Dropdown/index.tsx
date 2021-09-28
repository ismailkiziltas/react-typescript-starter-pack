// React
import type { FC, ReactElement } from 'react';
import { memo } from 'react';

// Interface
import IDropdown from './index.d';

// Styled
import DropdownStyled from './styled';

// Atoms
import Text from 'components/Atoms/Text';

// Icon
import { BsChevronDown } from 'react-icons/bs';

const Dropdown: FC<IDropdown> = ({
    dropdown,
    value,
    children,
    chevron,
    ...rest
}: IDropdown): ReactElement<IDropdown> => {

    return (
        <DropdownStyled dropdown={dropdown} chevron={chevron} {...rest}>
            <div className="dropdownOpener">
                <Text as="span" display="inline-block">{value}</Text>
            </div>
            <div className="dropdownMenu">
                {children}
            </div>
        </DropdownStyled>
    );
};

export type {
    IDropdown
}
export default memo(Dropdown);