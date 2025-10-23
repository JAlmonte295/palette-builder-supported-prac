import { Link } from 'react-router';

function NavBar() {
  const pages = [
    {
      text: 'Home',
      path: '/palettes',
    },
    {
      text: 'New',
      path: '/palettes/new',
    },
  ];

  return (
    <nav>
      {pages.map((page, idx) => {
        return (
          <div key={idx}>
            <Link to={page.path}>{page.text}</Link>
            <br />
          </div>
        );
      })}
    </nav>
  );
}

export default NavBar;
