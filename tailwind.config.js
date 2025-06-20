import theme from './src/theme';

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
      spacing: theme.spacing,
      gap: theme.sizes,
      borderRadius: theme.radii,
      borderWidth: theme.borderWidth,
      colors: {
        primary: theme.colors.primary,
        secondary: theme.colors.secondary,
        success: theme.colors.success,
        warning: theme.colors.warning,
        error: theme.colors.error,
        neutral: theme.colors.neutral,
        surface: theme.colors.surface,
        text: theme.colors.text,
      },
      borderColor: {
        primary: theme.colors.primary,
        secondary: theme.colors.secondary,
        success: theme.colors.success,
        warning: theme.colors.warning,
        error: theme.colors.error,
        neutral: theme.colors.neutral,
        surface: theme.colors.surface,
        text: theme.colors.text,
      },
      padding: theme.sizes,
      margin: theme.sizes,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSize,
      fontWeight: theme.typography.fontWeight,
      lineHeight: theme.typography.lineHeight,
      letterSpacing: theme.typography.letterSpacing,
      boxShadow: theme.shadows,
      screens: theme.breakpoints,
      scale: {
        
        0: '0',
        1: '1',
        2: '1.5',
        3: '2',
      },
      zIndex: theme.zIndex,
      transitionProperty: {
        'all': 'all',
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
        'opacity': 'opacity',
        'shadow': 'box-shadow',
        'transform': 'transform',
      },
      transitionDuration: theme.motion.duration,
      transitionTimingFunction: theme.motion.easing,
      container: {
        center: true,
        padding: theme.layout.container.padding,
        screens: theme.layout.container.maxWidth,
      },
      borderWidth: theme.borderWidth,
      opacity: theme.opacity,
      width: theme.sizes,
      height: theme.sizes,
      backgroundImage: {
        'gradient-primary': `linear-gradient(to bottom, ${theme.colors.primary[500]}, ${theme.colors.primary[600]})`,
      },
  },
  plugins: [],
}