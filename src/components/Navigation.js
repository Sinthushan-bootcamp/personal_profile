import '../styles/Navigation.css';


function Nav({currentPage, handlePageChange}) {
    return (
      <nav  className="nav">
        <a href="#aboutMe">About Me</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact Me</a>
        <a href="https://drive.google.com/file/d/1uSSJg1baCIeiZEsj-x_DHuzv6qGdDVWR/view?usp=sharing">Resume</a>
      </nav>
    );
  }
  
export default Nav;