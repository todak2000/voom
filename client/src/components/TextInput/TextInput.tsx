import * as React from 'react'

import clsx from 'clsx'
enum TextInputVariant {
  'primary',
  'basic',
  'neutral',
  'join'
}

type TextInputProps = {
  variant?: keyof typeof TextInputVariant
} & React.ComponentPropsWithRef<'input'>

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      children,
      className,
      variant = 'join',
      disabled: buttonDisabled,
      ...rest
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        type="text"
        disabled={buttonDisabled}
        placeholder="Enter meeting code"
        className={clsx(
          'py-2 pl-4 font-thin',
          'focus:outline-none',
          'transition duration-100',
          //#region  //*=========== Variant ===========
          variant === 'primary' && [
            'text-primary-500 hover:text-primary-600 active:text-primary-700',
            'disabled:text-primary-200'
          ],
          variant === 'neutral' && [
            'text-white text-lg md:text-4xl bg-transparent border-0 border-b-[0.5px] w-1/3 sm:w-1/2 border-b-white',
            'disabled:text-primary-200'
          ],
          variant === 'join' && [
            'rounded-l-sm border-0 bg-white text-black active:text-black md:h-[54px] md:w-[200px]',
            'disabled:text-primary-200'
          ],
          variant === 'basic' && [
            'text-black hover:text-gray-600 active:text-gray-800',
            'disabled:text-gray-300'
          ],
          //#endregion  //*======== Variant ===========
          'disabled:cursor-not-allowed disabled:brightness-105 disabled:hover:underline',
          className
        )}
        {...rest}
      />
    )
  }
)

export default React.memo(TextInput)
