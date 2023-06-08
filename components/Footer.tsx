import * as React from 'react'

import * as config from '@/lib/config'
import { useDarkMode } from '@/lib/use-dark-mode'

import CoffeLogo from './CoffeLogo'
import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const FooterImpl: React.FC = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { toggleDarkMode } = useDarkMode()

  const onToggleDarkMode = React.useCallback(
    (e) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>Copyright 2022 {config.author}</div>

      <div className={styles.settings}>
        {hasMounted && (
          <a
            className={styles.toggleDarkMode}
            href='#'
            role='button'
            onClick={onToggleDarkMode}
            title='Toggle dark mode'
          >
            <CoffeLogo />
          </a>
        )}
      </div>
      <div className={styles.social}></div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
