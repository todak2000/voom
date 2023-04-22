import * as React from 'react'
import { IconType } from 'react-icons'
// import { ImSpinner2 } from 'react-icons/im'
import { ImSpinner2 } from 'react-icons/im'

import clsx from 'clsx'

enum ButtonVariant {
  'neutral',
  'allow',
  'start',
  'close-chat',
  'community',
  'join',
  'category',
  'course',
  'reject'
}

enum ButtonSize {
  'sm',
  'base',
  'start',
  'sub'
}

type ButtonProps = {
  isLoading?: boolean
  isDarkBg?: boolean
  variant?: keyof typeof ButtonVariant
  size?: keyof typeof ButtonSize
  leftIcon?: typeof IconType
  rightIcon?: typeof IconType
  leftIconClassName?: string
  rightIconClassName?: string
} & React.ComponentPropsWithRef<'button'>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = 'primary',
      size = 'base',
      isDarkBg = false,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      leftIconClassName,
      rightIconClassName,
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled

    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={clsx(
          'inline-flex items-center justify-center  font-primary font-medium',
          'focus:outline-none',
          'shadow-sm',
          'transition-colors duration-75',
          //#region  //*=========== Size ===========
          [
            size === 'base' && ['text-[14px] leading-[19px]'],
            size === 'sm' && ['px-2 py-1', 'text-xs md:text-sm'],
            size === 'sub' && ['p-3', 'text-[8px] md:text-sm'],
            size === 'start' && [
              'text-[12px] leading-[11px] md:text-[14px] md:leading-[19px]'
            ]
          ],
          //#endregion  //*======== Size ===========
          //#region  //*=========== Variants ===========
          [
            variant === 'neutral' && [
              'h-[19px] w-[69px] rounded-sm bg-transparent text-[#A1A1A1] md:h-[46px] md:w-[137px]',
              'border-0',
              'hover:border-button_bg_color hover:bg-white hover:text-button_bg_color active:bg-gray-700 disabled:bg-gray-700'
            ],
            variant === 'category' && [
              'h-[19px] w-[69px] rounded-sm bg-white text-button_bg_color md:h-[46px] md:w-[137px]',
              'border-0',
              'hover:border-white hover:bg-button_bg_color hover:text-white active:bg-gray-700 disabled:bg-gray-700'
            ],
            variant === 'join' && [
              'h-[54px] w-[123px] rounded-r-sm bg-button_bg_color text-white',
              'border border-white',
              'hover:bg-white hover:text-button_bg_color active:bg-gray-700 disabled:bg-gray-700'
            ],
            variant === 'course' && [
              'h-[27px] w-[83px] rounded-r-sm bg-button_bg_color text-white md:h-[54px] md:w-[209px]',
              'border border-button_bg_color',
              'hover:bg-white hover:text-button_bg_color active:bg-gray-700 disabled:bg-gray-700'
            ],
            variant === 'close-chat' && [
              'h-[27px] w-[73px] rounded-sm bg-white text-button_bg_color md:h-[54px] md:w-[145px]',
              'border-transaprent border',
              'hover:border-white hover:bg-button_bg_color hover:text-white active:bg-gray-700 disabled:bg-gray-700'
            ],
            variant === 'reject' && [
              'h-[54px] w-[123px] rounded-r-sm bg-red-500 text-white',
              'border border-white',
              'hover:bg-white hover:text-red-500 active:bg-gray-700 disabled:bg-gray-700'
            ],
            variant === 'allow' && [
              'h-[54px] w-[123px] rounded-r-sm bg-green-500 text-white',
              'border border-white',
              'hover:bg-white hover:text-green-500 active:bg-gray-700 disabled:bg-gray-700'
            ],
            variant === 'start' && [
              'h-[54px] w-[216px] rounded-sm bg-transparent text-white md:h-[54px] md:w-[216px]',
              'border border-white',
              'hover:border-white hover:bg-white hover:text-button_bg_color active:bg-gray-700 disabled:bg-gray-700'
            ],

            variant === 'community' && [
              'h-[27px] w-[110px] rounded-sm bg-white text-button_bg_color md:h-[54px] md:w-[220px]',
              'border-transaprent border',
              'hover:border-white hover:bg-button_bg_color hover:text-white active:bg-gray-700 disabled:bg-gray-700'
            ]
          ],
          //#endregion  //*======== Variants ===========
          'disabled:cursor-not-allowed',
          isLoading &&
            'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
          className
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={clsx(
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
              {
                'text-white': ['primary', 'dark'].includes(variant),
                'text-black': ['light'].includes(variant),
                'text-primary-500': ['outline', 'ghost'].includes(variant)
              }
            )}
          >
            <ImSpinner2 className="animate-spin" />
          </div>
        )}
        {LeftIcon && (
          <div
            className={clsx([
              size === 'base' && 'mr-1',
              size === 'sm' && 'mr-1.5'
            ])}
          >
            <LeftIcon
              className={clsx(
                [
                  size === 'base' && 'md:text-md text-md',
                  size === 'sm' && 'md:text-md text-sm'
                ],
                leftIconClassName
              )}
            />
          </div>
        )}
        {children}
        {RightIcon && (
          <div
            className={clsx([
              size === 'base' && 'ml-1',
              size === 'sm' && 'ml-1.5'
            ])}
          >
            <RightIcon
              className={clsx(
                [
                  size === 'base' && 'text-md md:text-md',
                  size === 'sm' && 'md:text-md text-sm'
                ],
                rightIconClassName
              )}
            />
          </div>
        )}
      </button>
    )
  }
)

export default Button
