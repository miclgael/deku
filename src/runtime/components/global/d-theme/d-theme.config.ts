type Theme = {
  [key: string]: {
    backgroundColor: string
    color: string
  }
}

type ThemeName = keyof Theme

export const themes: Theme = {
  'gray-1': {
    backgroundColor: 'var(--color-gray-1)',
    color: 'var(--color-black)',
  },
  'gray-2': {
    backgroundColor: 'var(--color-gray-2)',
    color: 'var(--color-black)',
  },
  'gray-3': {
    backgroundColor: 'var(--color-gray-3)',
    color: 'var(--color-black)',
  },
  'black': {
    backgroundColor: 'var(--color-black)',
    color: 'var(--color-white)',
  },
  'white': {
    backgroundColor: 'var(--color-white)',
    color: 'var(--color-black)',
  },
  'primary': {
    backgroundColor: 'var(--color-primary)',
    color: 'var(--color-white)',
  },
  'secondary': {
    backgroundColor: 'var(--color-secondary)',
    color: 'var(--color-white)',
  },
  'tertiary': {
    backgroundColor: 'var(--color-tertiary)',
    color: 'var(--color-white)',
  },
  'info': {
    backgroundColor: 'var(--color-info)',
    color: 'var(--color-white)',
  },
  'success': {
    backgroundColor: 'var(--color-success)',
    color: 'var(--color-white)',
  },
  'warning': {
    backgroundColor: 'var(--color-warning)',
    color: 'var(--color-black)',
  },
  'danger': {
    backgroundColor: 'var(--color-danger)',
    color: 'var(--color-white)',
  },
  'error': {
    backgroundColor: 'var(--color-danger)',
    color: 'var(--color-white)',
  },
}

export const exclude = (names: ThemeName[], themes: Theme) =>
  Object.keys(themes)?.filter(name => !names?.includes(name))
