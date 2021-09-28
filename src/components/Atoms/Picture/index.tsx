// React
import type { FC, ReactElement } from 'react';
import { memo, forwardRef } from 'react';

// Interface
import IPicture from './index.d';

// Styled
import PictureStyled from './styled';

// Utils
import useTheme from 'hooks/useTheme';

const Picture: FC<IPicture> = forwardRef<HTMLPictureElement, IPicture>(({
    desktop,
    mobile,
    image,
    alt,
    width,
    height,
    ...rest
}, ref): ReactElement<IPicture> => {
    const { breakpoints } = useTheme();
    return (
        <PictureStyled ref={ref} {...rest}>
            {desktop && <source media={`(min-width:${breakpoints.lg}px)`} srcSet={desktop} />}
            {mobile && <source media={`(max-width: ${breakpoints.lg - 1}px)`} srcSet={mobile} />}
            {image && <img src={image} alt={alt} width={width} height={height} />}
        </PictureStyled>

    );
});

Picture.displayName="Picture";

export type {
    IPicture
};
export default memo(Picture);
