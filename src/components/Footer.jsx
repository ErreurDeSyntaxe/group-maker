import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      This web app was created by{' '}
      <a
        href="https://github.com/ErreurDeSyntaxe"
        target="_blank"
        rel="noreferrer"
        className={styles.footerLink}
      >
        {' '}
        ErreurDeSyntaxe
      </a>
      . It serves as practice for React, its context API, and React Router.
    </footer>
  );
}

export default Footer;
