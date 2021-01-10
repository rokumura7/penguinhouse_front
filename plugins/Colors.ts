export type Color = 'default' | 'primary' | 'success' | 'warning' | 'danger'
export const colors = ['default', 'primary', 'success', 'warning', 'danger']
export const getColorSet = (color: Color) => colorSets[color]

interface ColorSet {
  bg: string
  bgHover: string
  text: string
}

interface Colors {
  default: ColorSet
  primary: ColorSet
  success: ColorSet
  warning: ColorSet
  danger: ColorSet
}

const colorSets = {
  default: {
    bg: 'bg-gray-500',
    bgHover: 'hover:bg-gray-600',
    text: 'text-white',
  },
  primary: {
    bg: 'bg-indigo-500',
    bgHover: 'hover:bg-indigo-600',
    text: 'text-white',
  },
  success: {
    bg: 'bg-green-500',
    bgHover: 'hover:bg-green-600',
    text: 'text-white',
  },
  warning: {
    bg: 'bg-yellow-500',
    bgHover: 'hover:bg-yellow-600',
    text: 'text-white',
  },
  danger: {
    bg: 'bg-red-500',
    bgHover: 'hover:bg-red-600',
    text: 'text-white',
  },
} as Colors
