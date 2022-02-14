const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  content: [
    './build/**/*.{html,js}',
    './assets/**/*.{css,js}'
  ],
  presets: [],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px',
      '2xl': '1320px',
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      'primary': '#e91e63',
      'secondary': '#7b809a',
      'info': '#03a9f4',
      'success': '#4caf50',
      'danger': '#f44335',
      'warning': '#fb8c00',
      'gray': {
        '100': '#f8f9fa',
        '200': '#e9ecef',
        '300': '#dee2e6',
        '400': '#ced4da',
        '500': '#adb5bd',
        '600': '#6c757d',
        '700': '#495057',
        '800': '#343a40',
        '900': '#212529',
      }
    }),
    columns: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      '3xs': '16rem',
      '2xs': '18rem',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
    },
    spacing: {
      px: '1px',
      0: '0px',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
    animation: {
      none: 'none',
      spin: 'spin 1s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: 'bounce 1s infinite',
    },
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
    },
    backdropBlur: ({ theme }) => theme('blur'),
    backdropBrightness: ({ theme }) => theme('brightness'),
    backdropContrast: ({ theme }) => theme('contrast'),
    backdropGrayscale: ({ theme }) => theme('grayscale'),
    backdropHueRotate: ({ theme }) => theme('hueRotate'),
    backdropInvert: ({ theme }) => theme('invert'),
    backdropOpacity: ({ theme }) => theme('opacity'),
    backdropSaturate: ({ theme }) => theme('saturate'),
    backdropSepia: ({ theme }) => theme('sepia'),
    backgroundColor: ({ theme }) => theme('colors'),
    backgroundImage: {
      none: 'none',
      'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
      'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
      'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      'gradient-to-bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
      'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
      'gradient-to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))',
    },
    backgroundOpacity: ({ theme }) => theme('opacity'),
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },
    blur: {
      0: '0',
      none: '0',
      sm: '4px',
      DEFAULT: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
      '2xl': '40px',
      '3xl': '64px',
    },
    brightness: {
      0: '0',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5',
      200: '2',
    },
    borderColor: ({ theme }) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.200', 'currentColor'),
    }),
    borderOpacity: ({ theme }) => theme('opacity'),
    borderRadius: {
      none: '0px',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      none: 'none',
    },
    boxShadowColor: ({ theme }) => theme('colors'),
    caretColor: ({ theme }) => theme('colors'),
    accentColor: ({ theme }) => ({
      ...theme('colors'),
      auto: 'auto',
    }),
    contrast: {
      0: '0',
      50: '.5',
      75: '.75',
      100: '1',
      125: '1.25',
      150: '1.5',
      200: '2',
    },
    container: {
      padding: '1.5rem',
    },
    content: {
      none: 'none',
    },
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      help: 'help',
      'not-allowed': 'not-allowed',
      none: 'none',
      'context-menu': 'context-menu',
      progress: 'progress',
      cell: 'cell',
      crosshair: 'crosshair',
      'vertical-text': 'vertical-text',
      alias: 'alias',
      copy: 'copy',
      'no-drop': 'no-drop',
      grab: 'grab',
      grabbing: 'grabbing',
      'all-scroll': 'all-scroll',
      'col-resize': 'col-resize',
      'row-resize': 'row-resize',
      'n-resize': 'n-resize',
      'e-resize': 'e-resize',
      's-resize': 's-resize',
      'w-resize': 'w-resize',
      'ne-resize': 'ne-resize',
      'nw-resize': 'nw-resize',
      'se-resize': 'se-resize',
      'sw-resize': 'sw-resize',
      'ew-resize': 'ew-resize',
      'ns-resize': 'ns-resize',
      'nesw-resize': 'nesw-resize',
      'nwse-resize': 'nwse-resize',
      'zoom-in': 'zoom-in',
      'zoom-out': 'zoom-out',
    },
    divideColor: ({ theme }) => theme('borderColor'),
    divideOpacity: ({ theme }) => theme('borderOpacity'),
    divideWidth: ({ theme }) => theme('borderWidth'),
    dropShadow: {
      sm: '0 1px 1px rgb(0 0 0 / 0.05)',
      DEFAULT: ['0 1px 2px rgb(0 0 0 / 0.1)', '0 1px 1px rgb(0 0 0 / 0.06)'],
      md: ['0 4px 3px rgb(0 0 0 / 0.07)', '0 2px 2px rgb(0 0 0 / 0.06)'],
      lg: ['0 10px 8px rgb(0 0 0 / 0.04)', '0 4px 3px rgb(0 0 0 / 0.1)'],
      xl: ['0 20px 13px rgb(0 0 0 / 0.03)', '0 8px 5px rgb(0 0 0 / 0.08)'],
      '2xl': '0 25px 25px rgb(0 0 0 / 0.15)',
      none: '0 0 #0000',
    },
    fill: ({ theme }) => theme('colors'),
    grayscale: {
      0: '0',
      DEFAULT: '100%',
    },
    hueRotate: {
      0: '0deg',
      15: '15deg',
      30: '30deg',
      60: '60deg',
      90: '90deg',
      180: '180deg',
    },
    invert: {
      0: '0',
      DEFAULT: '100%',
    },
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexBasis: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      full: '100%',
    }),
    flexGrow: {
      0: '0',
      DEFAULT: '1',
    },
    flexShrink: {
      0: '0',
      DEFAULT: '1',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['"Roboto Slab"', 'serif'],
      body: ['Roboto', 'sans-serif'],
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    gap: ({ theme }) => theme('spacing'),
    gradientColorStops: ({ theme }) => theme('colors'),
    gridAutoColumns: {
      auto: 'auto',
      min: 'min-content',
      max: 'max-content',
      fr: 'minmax(0, 1fr)',
    },
    gridAutoRows: {
      auto: 'auto',
      min: 'min-content',
      max: 'max-content',
      fr: 'minmax(0, 1fr)',
    },
    gridColumn: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-7': 'span 7 / span 7',
      'span-8': 'span 8 / span 8',
      'span-9': 'span 9 / span 9',
      'span-10': 'span 10 / span 10',
      'span-11': 'span 11 / span 11',
      'span-12': 'span 12 / span 12',
      'span-full': '1 / -1',
    },
    gridColumnEnd: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
    },
    gridColumnStart: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
    },
    gridRow: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-full': '1 / -1',
    },
    gridRowStart: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
    },
    gridRowEnd: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
    },
    gridTemplateColumns: {
      none: 'none',
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
      7: 'repeat(7, minmax(0, 1fr))',
      8: 'repeat(8, minmax(0, 1fr))',
      9: 'repeat(9, minmax(0, 1fr))',
      10: 'repeat(10, minmax(0, 1fr))',
      11: 'repeat(11, minmax(0, 1fr))',
      12: 'repeat(12, minmax(0, 1fr))',
    },
    gridTemplateRows: {
      none: 'none',
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
    },
    height: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      full: '100%',
      screen: '100vh',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    }),
    inset: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      full: '100%',
    }),
    keyframes: {
      spin: {
        to: {
          transform: 'rotate(360deg)',
        },
      },
      ping: {
        '75%, 100%': {
          transform: 'scale(2)',
          opacity: '0',
        },
      },
      pulse: {
        '50%': {
          opacity: '.5',
        },
      },
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
          animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
        },
        '50%': {
          transform: 'none',
          animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
        },
      },
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      3: '.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },
    margin: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
    }),
    maxHeight: ({ theme }) => ({
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    }),
    maxWidth: ({ theme, breakpoints }) => ({
      none: 'none',
      0: '0rem',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
      prose: '65ch',
      ...breakpoints(theme('screens')),
    }),
    minHeight: {
      0: '0px',
      full: '100%',
      screen: '100vh',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    },
    minWidth: {
      0: '0px',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    },
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    opacity: {
      0: '0',
      5: '0.05',
      10: '0.1',
      20: '0.2',
      25: '0.25',
      30: '0.3',
      40: '0.4',
      50: '0.5',
      60: '0.6',
      70: '0.7',
      75: '0.75',
      80: '0.8',
      90: '0.9',
      95: '0.95',
      100: '1',
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
    },
    padding: ({ theme }) => theme('spacing'),
    placeholderColor: ({ theme }) => theme('colors'),
    placeholderOpacity: ({ theme }) => theme('opacity'),
    outlineColor: ({ theme }) => theme('colors'),
    outlineOffset: {
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    outlineWidth: {
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    ringColor: ({ theme }) => ({
      DEFAULT: theme('colors.blue.500', '#3b82f6'),
      ...theme('colors'),
    }),
    ringOffsetColor: ({ theme }) => theme('colors'),
    ringOffsetWidth: {
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    ringOpacity: ({ theme }) => ({
      DEFAULT: '0.5',
      ...theme('opacity'),
    }),
    ringWidth: {
      DEFAULT: '3px',
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    rotate: {
      0: '0deg',
      1: '1deg',
      2: '2deg',
      3: '3deg',
      6: '6deg',
      12: '12deg',
      45: '45deg',
      90: '90deg',
      180: '180deg',
    },
    saturate: {
      0: '0',
      50: '.5',
      100: '1',
      150: '1.5',
      200: '2',
    },
    scale: {
      0: '0',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5',
    },
    scrollMargin: ({ theme }) => ({
      ...theme('spacing'),
    }),
    scrollPadding: ({ theme }) => theme('spacing'),
    sepia: {
      0: '0',
      DEFAULT: '100%',
    },
    skew: {
      0: '0deg',
      1: '1deg',
      2: '2deg',
      3: '3deg',
      6: '6deg',
      12: '12deg',
    },
    space: ({ theme }) => ({
      ...theme('spacing'),
    }),
    stroke: ({ theme }) => theme('colors'),
    strokeWidth: {
      0: '0',
      1: '1',
      2: '2',
    },
    textColor: ({ theme }) => theme('colors'),
    textDecorationColor: ({ theme }) => theme('colors'),
    textDecorationThickness: {
      auto: 'auto',
      'from-font': 'from-font',
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    textUnderlineOffset: {
      auto: 'auto',
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    textIndent: ({ theme }) => ({
      ...theme('spacing'),
    }),
    textOpacity: ({ theme }) => theme('opacity'),
    transformOrigin: {
      center: 'center',
      top: 'top',
      'top-right': 'top right',
      right: 'right',
      'bottom-right': 'bottom right',
      bottom: 'bottom',
      'bottom-left': 'bottom left',
      left: 'left',
      'top-left': 'top left',
    },
    transitionDelay: {
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms',
    },
    transitionDuration: {
      DEFAULT: '150ms',
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms',
    },
    transitionProperty: {
      none: 'none',
      all: 'all',
      DEFAULT:
        'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
      colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform',
    },
    transitionTimingFunction: {
      DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    translate: ({ theme }) => ({
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      full: '100%',
    }),
    width: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      full: '100%',
      screen: '100vw',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    }),
    willChange: {
      auto: 'auto',
      scroll: 'scroll-position',
      contents: 'contents',
      transform: 'transform',
    },
    zIndex: {
      auto: 'auto',
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',
    },
  },
  variants: {
    display: ['responsive', 'dropdown']
  },
  variantOrder: [
    'first',
    'last',
    'odd',
    'even',
    'visited',
    'checked',
    'empty',
    'read-only',
    'group-hover',
    'group-focus',
    'focus-within',
    'hover',
    'focus',
    'focus-visible',
    'active',
    'disabled',
  ],
  plugins: [
  
    plugin(function({ addComponents }) {
      const typography = {
        '*': {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        },
        'h1,h2,h3,h4,h5,h6': {
          'font-weight': '400',
          'font-family': 'Roboto Slab,sans-serif',
          'letter-spacing': '-.05rem',
          'margin-bottom': '.5rem',
          'color': '#344767'
        },
        'a': {
          'color': '#344767'
        },
        'h1,.h1': {
          'font-size': '3rem',
          'line-height': '1.25'
        },
        'h2,.h2': {
          'font-size': '2.25rem',
          'line-height': '1.3'
        },
        'h3,.h3': {
          'font-size': '1.875rem',
          'line-height': '1.375'
        },
        'h4,.h4': {
          'font-size': '1.5rem',
          'line-height': '1.375'
        },
        'h5,.h5': {
          'font-size': '1.25rem',
          'line-height': '1.375'
        },
        'h6,.h6': {
          'font-size': '1rem',
          'line-height': '1.625',
          'text-transform': 'uppercase'
        },
        '.lead': {
          'font-size': '1.25rem',
          'line-height': '1.625',
          'font-weight': '400',
        },
        'p': {
          'line-height': '1.625',
          'font-weight': '300',
        }
      }
      const buttons = {
        '.button': {
          'padding': '.625rem 1.5rem',
          'borderRadius': '.5rem',
          'fontWeight': '700',
          'fontSize': '.75rem',
          'color': '#fff',
          'display': 'inline-block',
          'lineHeight': '1.45',
          'textAlign': 'center',
          'verticalAlign': 'middle',
          'transition': 'all .15s ease-in',
          'cursor': 'pointer',
          'margin-bottom': '1rem',
          'letter-spacing': '0',
          'background-size': '150%',
          'background-position-x': '25%',
          'position': 'relative',
          'overflow': 'hidden',
          'text-transform': 'uppercase'
        },
        '.button-primary': {
           'box-shadow': '0 3px 3px 0 rgba(233, 30, 99, .15), 0 3px 1px -2px rgba(233, 30, 99, .2), 0 1px 5px 0 rgba(233, 30, 99, .15)',
           'background-color': '#e91e63',
           '&:hover': {
            'box-shadow': '0 14px 26px -12px rgba(233, 30, 99, .4), 0 4px 23px 0 rgba(233, 30, 99, .15), 0 8px 10px -5px rgba(233, 30, 99, .2)'
           }
        },
        '.button-secondary': {
          'box-shadow': '0 3px 3px 0 rgba(70, 69, 68, .15), 0 3px 1px -2px rgba(104, 102, 102, .2), 0 1px 5px 0 rgba(143, 143, 143, .15)',
          'background-color': '#7b809a',
          '&:hover': {
            'box-shadow': '0 14px 26px -12px rgba(70, 69, 68, .4), 0 4px 23px 0 rgba(104, 102, 102, .15), 0 8px 10px -5px rgba(143, 143, 143, .2)'
           }
        },
        '.button-info': {
          'box-shadow': '0 3px 3px 0 rgba(26, 115, 232, .15), 0 3px 1px -2px rgba(26, 115, 232, .2), 0 1px 5px 0 rgba(26, 115, 232, .15)',
          'background-color': '#1a73e8',
          '&:hover': {
            'box-shadow': '0 14px 26px -12px rgba(26, 115, 232, .4), 0 4px 23px 0 rgba(26, 115, 232, .15), 0 8px 10px -5px rgba(26, 115, 232, .2)'
          }
        },
        '.button-success': {
          'box-shadow': '0 3px 3px 0 rgba(76, 175, 80, .15), 0 3px 1px -2px rgba(76, 175, 80, .2), 0 1px 5px 0 rgba(76, 175, 80, .15)',
          'background-color': '#4caf50',
          '&:hover': {
            'box-shadow': '0 14px 26px -12px rgba(76, 175, 80, .4), 0 4px 23px 0 rgba(76, 175, 80, .15), 0 8px 10px -5px rgba(76, 175, 80, .2)'
          }
        },
        '.button-warning': {
          'box-shadow': '0 3px 3px 0 rgba(251, 140, 0, .15), 0 3px 1px -2px rgba(251, 140, 0, .2), 0 1px 5px 0 rgba(251, 140, 0, .15)',
          'background-color': '#fb8c00',
          '&:hover': {
            'box-shadow': '0 14px 26px -12px rgba(251, 140, 0, .4), 0 4px 23px 0 rgba(251, 140, 0, .15), 0 8px 10px -5px rgba(251, 140, 0, .2)'
          }
        },
        '.button-danger': {
          'box-shadow': '0 3px 3px 0 rgba(244, 67, 53, .15), 0 3px 1px -2px rgba(244, 67, 53, .2), 0 1px 5px 0 rgba(244, 67, 53, .15)',
          'background-color': '#f44335',
          '&:hover': {
            'box-shadow': '0 14px 26px -12px rgba(244, 67, 53, .4), 0 4px 23px 0 rgba(244, 67, 53, .15), 0 8px 10px -5px rgba(244, 67, 53, .2)'
          }
        },
        '.button-dark': {
          'box-shadow': '0 3px 3px 0 rgba(52, 71, 103, .15), 0 3px 1px -2px rgba(52, 71, 103, .20), 0 1px 5px 0 rgba(52, 71, 103, .15)',
          'background-color': '#344767',
          '&:hover': {
            'box-shadow': '0 14px 26px -12px rgba(52, 71, 103, .4), 0 4px 23px 0 rgba(52, 71, 103, .15), 0 8px 10px -5px rgba(52, 71, 103, .2)'
          }
        },
        '.button-light': {
          'box-shadow': '0 3px 3px 0 rgba(240, 242, 245, .15), 0 3px 1px -2px rgba(240, 242, 245, .2), 0 1px 5px 0 rgba(240, 242, 245, .15)',
          'background-color': '#f0f2f5',
          'color': '#495057',
          '&:hover': {
            'box-shadow': '0 14px 26px -12px rgba(240, 242, 245, .4), 0 4px 23px 0 rgba(240, 242, 245, .15), 0 8px 10px -5px rgba(240, 242, 245, .2)'
          }
        },

      }  
      const gradients = {
        '.bg-gradient-primary': {
          'background-image': 'linear-gradient(195deg, #ec407a, #d81b60)',
          '&.button': {
            'box-shadow': '0 3px 3px 0 rgba(233, 30, 99, .15), 0 3px 1px -2px rgba(233, 30, 99, .2), 0 1px 5px 0 rgba(233, 30, 99, .15)',

            '&:hover': {
              'box-shadow': '0 14px 26px -12px rgba(233, 30, 99, .4), 0 4px 23px 0 rgba(233, 30, 99, .15), 0 8px 10px -5px rgba(233, 30, 99, .2)'
            }
          }
        },
        '.bg-gradient-secondary': {
          'background-image': 'linear-gradient(195deg, #747b8a, #495361)',
          '&.button': {
            'box-shadow': '0 3px 3px 0 rgba(70, 69, 68, .15), 0 3px 1px -2px rgba(104, 102, 102, .2), 0 1px 5px 0 rgba(143, 143, 143, .15)',

            '&:hover': {
              'box-shadow': '0 14px 26px -12px rgba(70, 69, 68, .4), 0 4px 23px 0 rgba(104, 102, 102, .15), 0 8px 10px -5px rgba(143, 143, 143, .2)'
            }
          }
        },
        '.bg-gradient-info': {
          'background-image': 'linear-gradient(195deg, #49a3f1, #1a73e8)',
          '&.button': {
            'box-shadow': '0 3px 3px 0 rgba(26, 115, 232, .15), 0 3px 1px -2px rgba(26, 115, 232, .2), 0 1px 5px 0 rgba(26, 115, 232, .15)',

            '&:hover': {
              'box-shadow': '0 14px 26px -12px rgba(26, 115, 232, .4), 0 4px 23px 0 rgba(26, 115, 232, .15), 0 8px 10px -5px rgba(26, 115, 232, .2)'
            }
          }
        },
        '.bg-gradient-success': {
          'background-image': 'linear-gradient(195deg, #66bb6a, #43a047)',
          '&.button': {
            'box-shadow': '0 3px 3px 0 rgba(76, 175, 80, .15), 0 3px 1px -2px rgba(76, 175, 80, .2), 0 1px 5px 0 rgba(76, 175, 80, .15)',

            '&:hover': {
              'box-shadow': '0 14px 26px -12px rgba(76, 175, 80, .4), 0 4px 23px 0 rgba(76, 175, 80, .15), 0 8px 10px -5px rgba(76, 175, 80, .2)'
            }
          }
        },
        '.bg-gradient-warning': {
          'background-image': 'linear-gradient(195deg, #ffa726, #fb8c00)',
          '&.button': {
            'box-shadow': '0 3px 3px 0 rgba(251, 140, 0, .15), 0 3px 1px -2px rgba(251, 140, 0, .2), 0 1px 5px 0 rgba(251, 140, 0, .15)',

            '&:hover': {
              'box-shadow': '0 14px 26px -12px rgba(251, 140, 0, .4), 0 4px 23px 0 rgba(251, 140, 0, .15), 0 8px 10px -5px rgba(251, 140, 0, .2)'
            }
          }
        },
        '.bg-gradient-danger': {
          'background-image': 'linear-gradient(195deg, #ef5350, #e53935)',
          '&.button': {
            'box-shadow': '0 3px 3px 0 rgba(244, 67, 53, .15), 0 3px 1px -2px rgba(244, 67, 53, .2), 0 1px 5px 0 rgba(244, 67, 53, .15)',

            '&:hover': {
              'box-shadow': '0 14px 26px -12px rgba(244, 67, 53, .4), 0 4px 23px 0 rgba(244, 67, 53, .15), 0 8px 10px -5px rgba(244, 67, 53, .2)'
            }
          }
        },
        '.bg-gradient-dark': {
          'background-image': 'linear-gradient(195deg, #42424a, #191919)',
          '&.button': {
            'box-shadow': '0 3px 3px 0 rgba(52, 71, 103, .15), 0 3px 1px -2px rgba(52, 71, 103, .20), 0 1px 5px 0 rgba(52, 71, 103, .15)',

            '&:hover': {
              'box-shadow': '0 14px 26px -12px rgba(52, 71, 103, .4), 0 4px 23px 0 rgba(52, 71, 103, .15), 0 8px 10px -5px rgba(52, 71, 103, .2)'
            }
          }
        },
        '.bg-gradient-light': {
          'background-image': 'linear-gradient(195deg, #ebeff4, #ced4da)',
          'color': '#495057',
          '&.button': {
            'box-shadow': '0 3px 3px 0 rgba(240, 242, 245, .15), 0 3px 1px -2px rgba(240, 242, 245, .2), 0 1px 5px 0 rgba(240, 242, 245, .15)',

            '&:hover': {
              'box-shadow': '0 14px 26px -12px rgba(240, 242, 245, .4), 0 4px 23px 0 rgba(240, 242, 245, .15), 0 8px 10px -5px rgba(240, 242, 245, .2)'
            }
          }
        }
      }
      const card = {
        '.card': {
          'display': 'flex',
          'flex-direction': 'column',
          'word-wrap': 'break-word',
          'background-color': '#fff',
          'background-clip': 'border-box',
          'border-radius': '.75rem',
          'box-shadow': '0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06);',

          '.card-header': {
            'transform': 'translateZ(0)',
            'transition': 'all .3s cubic-bezier(.34,1.61,.7,1)',

            '.img-fluid': {
              'border-radius': '.5rem',
            }
          },
          '.card-body': {
            'padding': '1.5rem',
            'flex': '1 1 auto',
            'color': '#7b809a'
          },
          '.card-footer': {
            'padding': '1.5rem',
            'background-color': 'transparent',
            'color': '#7b809a'
          }
        },
        '.card[data-animation="true"]:hover': {
          '.card-header': {
            'transform': 'translate3d(0,-50px,0)'
          }
        },
        '.colored-shadow': {
          'transform': 'scale(.94)',
          'top': '3.5%',
          'filter': 'blur(12px)',
          'position': 'absolute',
          'left': '0',
          'width': '100%',
          'height': '100%',
          'background-size': 'cover',
          'z-index': '-1'
        }
      }
      const alerts = {
        '.alert': {
          'position': 'relative',
          'padding': '1rem',
          'margin-bottom': '1rem',
          'border': '0 solid transparent',
          'border-radius': '0.375rem',
          'line-height': '1.25rem',
          'opacity': '1',
          'transition': 'opacity .15s linear',

          '&.hide': {
            'opacity': '0',
            'display': 'none'
          }
        }
      }

      const avatars = {
        '.avatar': {
          'color': '#fff',
          'position': 'relative',
          'display': 'inline-flex',
          'align-items': 'center',
          'justify-content': 'center',
          'font-size': '1rem',
          'border-radius': '50rem',
          'height': '48px',
          'width': '48px',
          'transition': 'all .2s ease-in-out',

          'img': {
            // 'border-radius': '50rem',
          },

          '&.avatar-xs': {
            'width': '24px',
            'height': '24px',
            'font-size': '.75rem'
          },
          '&.avatar-sm': {
            'width': '36px',
            'height': '36px',
            'font-size': '.875rem'
          },
          '&.avatar-lg': {
            'width': '58px',
            'height': '58px',
            'font-size': '.875rem'
          },
          '&.avatar-xl': {
            'width': '74px',
            'height': '74px'
          },
        },

        '.avatar-group': {
          '.avatar': {
            'position': 'relative',
            'z-index': '2',
            'border': '2px solid #fff',
            'cursor': 'pointer',

            '&+.avatar': {
              'margin-left': '-1rem'
            },

            '&:hover': {
              'z-index': '3'
            }
          }
        }
      }

      const navbar = {
        '.navbar': {
          'position': 'relative',
          'display': 'flex',
          'padding': '.5rem 1rem',
          'border-radius': '.75rem',
          'box-shadow': '0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06);',
        },
        '.nav-link': {
          'padding': '.5rem 1rem',
          'font-weight': '400',
          'font-size': '.875rem',
          'color': '#344767',
          'align-items': 'center',
          'display': 'flex'
        }
      }
      const dropdown = {
        '.dropdown-menu': {
          'display': 'block',
          'position': 'absolute',
          'opacity': '0',
          'transform-origin': '0 0',
          'inset': '0 auto auto 0',
          'pointer-events': 'none',
          'transform': 'scale(.95)',
          '-webkit-backface-visibility': 'hidden',
          'backface-visibility': 'hidden',
          'will-change': 'transform, box-shadow',
          'box-shadow': '0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
          'transition': 'transform .3s cubic-bezier(.4,0,.2,1),opacity .2s cubic-bezier(.4,0,.2,1)',
          'cursor': 'pointer',
          'z-index': '1000',
          'min-width': '11rem',
          'padding': '.5rem 0',
          'margin': '0',
          'font-size': '.875rem',
          'color': '#7b809a',
          'text-align': 'left',
          'list-style': 'none',
          'background-color': '#fff',
          'background-clip': 'padding-box',
          'border': '0 solid transparent',
          'border-radius': '.375rem',
          'margin-top': '2.8125rem',

          '&::before': {
            'font-family': 'FontAwesome',
            'content': '"\f0d8"',
            'position': 'absolute',
            'top': '0',
            'left': '28px',
            'right': 'auto',
            'font-size': '1.375',
            'color': '#fff',
            'transition': 'top .35s ease',
            'display': 'block',
            'clear': 'both',
            'box-sizing': 'border-box'
          },

          '&.dropdown-end': {
            'right': '0',
            'left': 'auto'
          }
        },

        '.dropdown': {
          'position': 'relative',

          '&.open': {
            '.dropdown-menu': {
              'opacity': '1',
              'pointer-events': 'auto',
              'transform': 'scale(1)',
              'margin-top': '2.8125rem',

              '&:before': {
                'top': '-20px'
              }
            }
          }
        },

        '.dropdown-item': {
          'display': 'block',
          'width': '100%',
          'padding': '.3rem 1rem',
          'clear': 'both',
          'font-weight': '400',
          'color': '#7b809a',
          'text-align': 'inherit',
          'white-space': 'nowrap',
          'border-radius': '.375rem',
          'background-color': 'transparent',
          'border': '0',
          'transition': 'background-color .3s ease, color .3s ease',
        
          '&:hover': {
            'color': '#344767',
            'background-color': '#f0f2f5'
          }
        }
      }

      const misc = {
        '.blurr': {
          'box-shadow': 'inset 0 0 2px #fefefed1',
          '-webkit-backdrop-filter': 'saturate(200%) blur(30px)',
          'backdrop-filter': 'saturate(200%) blur(30px)',
          'background-color': 'hsla(0,0%,100%,.8)'
        },
        '.shadow-blur': {
          'box-shadow': 'inset 0 0 1px 1px hsla(0,0%,100%,.9),0 20px 27px 0 rgba(0,0,0,.05)',
        }
      }
      const icon = {
        '.icon': {
          'width': '48px',
          'height': '48px',
          'background-position': '50%',
          'border-radius': '0.5rem',

          'i': {
            'color': '#fff',
            'top': '11px',
            'position': 'relative'
          },
          '&.icon-xl': {
            'width': '100px',
            'height': '100px',
            'i': {
              'top': '35%',
              'font-size': '2.1rem'
            }
          },
          '&.icon-lg': {
            'width': '64px',
            'height': '64px',
            'i': {
              'top': '31%',
              'font-size': '1.5rem'
            }
          },
          '&.icon-sm': {
            'width': '32px',
            'height': '32px',
            'i': {
              'top': '9px',
              'font-size': '.875rem'
            }
          },
          '&.icon-xs': {
            'width': '24px',
            'height': '24px',
            'i': {
              'top': '-1px',
              'font-size': '.75rem'
            }
          }
        }
      }

      const badges = {
        '.badge': {
          'display': 'inline-block',
          'padding': '0.55em 0.9em',
          'font-size': '.75em',
          'font-weight': '600',
          'line-height': '1',
          'color': '#fff',
          'text-align': 'center',
          'white-space': 'nowrap',
          'vertical-align': 'baseline',
          'border-radius': '0.45rem',
          'text-transform': 'uppercase',

          '&.badge-md': {
            'padding': '0.65em 1em'
          },
          '&.badge-lg': {
            'padding': '.85em 1.375em'
          },

          '&.badge-primary': {
            'color': '#cc084b',
            'background-color': '#f8b3ca'
          },
          '&.badge-secondary': {
            'color': '#6c757d',
            'background-color': '#d7d9e1'
          },
          '&.badge-info': {
            'color': '#095bc6',
            'background-color': '#aecef7'
          },
          '&.badge-success': {
            'color': '#339537',
            'background-color': '#bce2be'
          },
          '&.badge-warning': {
            'color': '#c87000',
            'background-color': '#ffd59f'
          },
          '&.badge-danger': {
            'color': '#f61200',
            'background-color': '#fcd3d0'
          }
        }
      }

      const modal = {
        '.modal': {
          'position': 'fixed',
          'top': '0',
          'left': '0',
          'z-index': '0',
          'width': '100%',
          'height': '100%',
          'overflow-x': 'hidden',
          'overflow-y': 'auto',
          'outline': '0',
          'opacity': '0',
          'visibility': 'hidden',
          'transition': 'opacity .15s linear',

          '.modal-dialog': {
            'transition': 'transform .15s ease-out',
            'transform': 'translateY(-50px)',
            'min-height': 'calc(100% - 15rem)',
            'max-width': '500px',
            'margin': '1.75rem auto',
            'display': 'flex',
            'align-items': 'center',
            'position': 'relative',
            'width': 'auto',
            'pointer-events': 'none'
          },

          '&.open': {
            'visibility': 'visible',
            'opacity': '1',
            'z-index': '1050',

            '.modal-dialog': {
              'transform': 'none',
              'z-index': '1212'
            }
          },

          '.modal-overlay': {
            'position': 'fixed',
            'top': '0',
            'left': '0',
            'width': '100vw',
            'height': '100vh',
            'z-index': '1200',
            'background-color': 'rgba(0,0,0,0.5)',
            'transition': 'opacity .15s linear'
          },

          '.modal-content': {
            'position': 'relative',
            'display': 'flex',
            'flex-direction': 'column',
            'width': '100%',
            'pointer-events': 'auto',
            'background-color': '#fff',
            'background-color': '#fff',
            'background-clip': 'padding-box',
            'border': 'none',
            'border-radius': '0.4rem',
            'box-shadow': '0 27px 24px 0 rgba(0, 0, 0, .2), 0 40px 77px 0 rgba(0, 0, 0, .22)',
            'outline': '0',
            'z-index': '1300'
          },

          '.modal-header': {
            'display': 'flex',
            'flex-shrink': '0',
            'align-items': 'center',
            'justify-content': 'space-between',
            'padding': '1rem',
            'border-bottom': '1px solid #dee2e6',
            'border-top-left-radius': 'calc(0.5rem - 1px)',
            'border-top-right-radius': 'calc(0.5rem - 1px)',

            '.button-close': {
              'box-sizing': 'content-box',
              'padding': '0.25em',

              'i': {
                'color': '#344767',
                'font-size': '.875rem'
              }
            }
          },

          '.modal-body': {
            'position': 'relative',
            'flex': '1 1 auto',
            'padding': '1rem'
          },

          '.modal-footer': {
            'display': 'flex',
            'flex-wrap': 'wrap',
            'flex-shrink': '0',
            'align-items': 'center',
            'justify-content': 'flex-end',
            'padding': '0.75rem',
            'border-top': '1px solid #dee2e6',
            'border-bottom-right-radius': 'calc(0.5rem - 1px)',
            'border-bottom-left-radius': 'calc(0.5rem - 1px)'
          }

        }
      }
      
      const inputs = {
        '.form-control': {
          'display': 'block',
          'width': '100%',
          'padding': '0.5rem 0',
          'font-size': '.875rem',
          'font-weight': '400',
          'line-height': '1.15rem',
          'color': '#495057',
          'background-color': 'transparent',
          'background-clip': 'padding-box',
          'border': '1px solid #d2d6da',
          'appearance': 'none',
          'border-radius': '0.375rem',
          'transition': '.2s ease',

          '&:focus-visible': {
            'outline': 'none'
          }
        },

        '.form-label': {
          'position': 'absolute'
        },

        '.form-label,label': {
          'font-size': '.875rem',
          'font-weight': '400',
          'margin-bottom': '0.5rem',
          'color': '#7b809a',
          'margin-left': '0',
          'transition': 'all .2s ease',
        },

        '.input-group': {
          'position': 'relative',
          'display': 'flex',
          'flex-wrap': 'wrap',
          'align-items': 'stretch',
          'width': '100%',
          'transition': '.2s ease',
          'border': 'none',

          '&.input-group-outline': {
            '.form-label': {
              'display': 'flex',
              'line-height': '3.925',
              'top': '-0.375rem',
              'margin-bottom': '0',

              '&:before,&:after': {
                'content': '""',
                'border-top': '1px solid',
                'border-top-color': '#d2d6da',
                'pointer-events': 'none',
                'margin-top': '0.375rem',
                'box-sizing': 'border-box',
                'display': 'block',
                'height': '0.5rem',
                'width': '0.625rem',
                'border-width': '1px 0 0',
                'border-color': 'transparent'
              },

              '&:before': {
                'margin-right': '4px',
                'border-left': '1px solid transparent',
                'border-radius': '6px 0'
              },

              '&:after': {
                'flex-grow': '1',
                'margin-left': '4px',
                'border-right': '1px solid transparent',
                'border-radius': '0 6px'
              }
            },

            '.form-control': {
              'background': 'none',
              'border': '1px solid #d2d6da',
              'border-radius': '0.375rem',
              'border-top-left-radius': '0.375rem',
              'border-bottom-left-radius': '0.375rem',
              'padding': '0.625rem 0.75rem',
              'line-height': '1.25rem',
              'z-index': '20'
            }
          },

          '&.input-group-dynamic,&.input-group-static,': {
            '.form-control': {
              'border-radius': '0',
              'border': '0',
              'background': 'no-repeat bottom,50% calc(100% - 1px)',
              'background-image': 'linear-gradient(0deg,#e91e63 2px,rgba(156,39,176,0) 0),linear-gradient(0deg,#d2d2d2 1px,hsla(0,0%,82%,0) 0)',
              'background-size': '0 100%,100% 100%',
              'transition': '.2s ease',
            },
            '.form-label': {
              'top': '0.4rem'
            }
          },

          '&.input-group-static': {
            'label': {
              'margin-bottom': '0'
            },
          },

          '&.focused,&.is-filled': {
            '.form-label': {
              'width':' 100%',
              'height': '100%',
              'font-size': '.6875rem',
              'color': '#e91e63',
              'display': 'flex',
              'line-height': '1.25',

              '&:before': {
                'opacity': '1',
                'border-top-color': '#e91e63',
                'box-shadow': 'inset 0 1px #e91e63'
              },

              '&:after': {
                'opacity': '1',
                'border-top-color': '#e91e63',
                'box-shadow': 'inset 0 1px #e91e63'
              }
            },

            '&.input-group-outline': {
              '.form-label+.form-control': {
                'border-color': '#e91e63',
                'border-top-color': 'transparent',
                'box-shadow': 'inset 1px 0 #e91e63, inset -1px 0 #e91e63, inset 0 -1px #e91e63'
              },
            },

            '&.input-group-dynamic': {
              '.form-label': {
                'top': '-0.7rem'
              }
            },

            '&.input-group-static': {
              'label': {
                'color': '#e91e63'
              }
            },

            '.form-control': {
              'background-size': '100% 100%,100% 100%'
            }
          },

          '&:focus-visible': {
            'outline': 'none'
          }
        }
      } 

      const checkbox = {
        '.form-check': {
          'display': 'flex',
          'min-height': 'auto',
          'margin-bottom': '.125rem',

          '.form-check-input': {
            'width': '1.23rem',
            'height': '1.23rem',
            'background-color': '#fff',
            'background-repeat': 'no-repeat',
            'background-position': '50%',
            'background-size': 'contain',
            'border': 'none',
            'transition': 'background-color .25s ease,border-color .25s ease,background-position .15s ease-in-out,opacity .15s ease-out,box-shadow .15s ease-in-out'
          },

          'div[type="checkbox"]': {
            'border': '1px solid #cbd3da',
            'position': 'relative',
            'background-image': 'none',
            'border-radius': '0.35rem',
            'cursor': 'pointer',
            'margin-right': '7px',
          }
        }
      }
  
      addComponents(typography),
      addComponents(alerts),
      addComponents(avatars),
      addComponents(badges),
      addComponents(buttons),
      addComponents(card),
      addComponents(dropdown),
      addComponents(gradients),
      addComponents(navbar),
      addComponents(icon),
      addComponents(misc),
      addComponents(modal),
      addComponents(inputs),
      addComponents(checkbox)
    })
  ]
}
