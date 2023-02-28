function Footer() {
  return (
    <footer className='page-footer teal accent-4'>
      <div className='footer-copyright'>
        <div className='container'>
          © {new Date().getFullYear()} Michael Veselov's Portfolio Project
          <a
            className='grey-text text-lighten-4 right'
            href='https://github.com/MichaelVeselov/react-movies-functions'
            rel='noreferrer'
            target='_blank'
          >
            Link to GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
