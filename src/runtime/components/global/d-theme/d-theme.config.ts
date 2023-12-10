export type Theme = {
  [key: string]: {
    backgroundColor: string
    color: string
  }
}

export type ThemeName = keyof Theme

export const themes: Theme = {
  'gray-1': {
    backgroundColor: 'var(--gray-1)',
    color: 'var(--black)',
  },
  'gray-2': {
    backgroundColor: 'var(--gray-2)',
    color: 'var(--black)',
  },
  'gray-3': {
    backgroundColor: 'var(--gray-3)',
    color: 'var(--black)',
  },
  'black': {
    backgroundColor: 'var(--black)',
    color: 'var(--white)',
  },
  'white': {
    backgroundColor: 'var(--white)',
    color: 'var(--black)',
  },
  'primary': {
    backgroundColor: 'var(--primary)',
    color: 'var(--white)',
  },
  'secondary': {
    backgroundColor: 'var(--secondary)',
    color: 'var(--white)',
  },
  'tertiary': {
    backgroundColor: 'var(--tertiary)',
    color: 'var(--white)',
  },
  'info': {
    backgroundColor: 'var(--info)',
    color: 'var(--white)',
  },
  'success': {
    backgroundColor: 'var(--success)',
    color: 'var(--white)',
  },
  'warning': {
    backgroundColor: 'var(--warning)',
    color: 'var(--black)',
  },
  'danger': {
    backgroundColor: 'var(--danger)',
    color: 'var(--white)',
  },
  'error': {
    backgroundColor: 'var(--danger)',
    color: 'var(--white)',
  },
  'invert': {
    backgroundColor: 'var(--always-dark)',
    color: 'var(--always-light)',
  },
}

export const exclude = (names: ThemeName[], themes: Theme) =>
  Object.keys(themes)?.filter(name => !names?.includes(name))
