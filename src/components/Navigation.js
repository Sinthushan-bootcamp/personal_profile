import '../styles/Navigation.css';


function Nav({currentPage, handlePageChange}) {
    return (
      <nav  className="nav">
        <a
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          href="#aboutMe"
          onClick={() => handlePageChange('Home')}
        >
          About Me
        </a>
        <a
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
          href="#work"
          onClick={() => handlePageChange('Projects')}
        >
          Work
        </a>
        <a
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          href="#contact"
          onClick={() => handlePageChange('Contact')}
        >
          Contact Me
        </a>
        <a
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          href="#resume"
          onClick={() => handlePageChange('Resume')}
        >
          Resume
        </a>
      </nav>
    );
  }
  
export default Nav;