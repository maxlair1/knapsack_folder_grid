import React from 'react';
import theme from '../theme';

type IconButtonProps = {
    icon: React.ReactElement;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    size?: 'small' | 'medium' | 'large';
    className?: string;
    disabled?: boolean;
    tabIndex?: number;
    title?: string;
    selected?: boolean;
};

const sizeMap = {
    small: 'w-6 h-6 p-1',
    medium: 'w-8 h-8 p-2',
    large: 'w-12 h-12 p-3',
};

export const IconButton: React.FC<IconButtonProps> = ({
    selected,
    icon,
    title,
    size = 'medium',
    className = '',
    disabled = false,
    tabIndex,
    ...buttonProps
}) => (
    <button
        role='button'
        title={title}
        type="button"
        className={`
            flex-shrink-0 transition-all rounded-md inline-flex items-center justify-center rounded enabled:hover:bg-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition disabled:cursor-not-allowed disabled:opacity-50 active:scale-[0.90] 
            ${sizeMap[size]} 
            ${className} 
            ${selected && 'bg-primary-200'}
        `}
        disabled={disabled}
        tabIndex={tabIndex}
        {...buttonProps}
    >
        {React.cloneElement(icon, {
            className: `w-full h-full ${icon.props.className || ''}`,
            'aria-hidden': true,
            focusable: false,
            color: selected ? theme.colors.primary[800] : icon.props.color
        })}
    </button>
);

export default IconButton;
