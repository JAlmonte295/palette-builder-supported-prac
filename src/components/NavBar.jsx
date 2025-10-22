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
          <Link key={idx} to={page.path}>
            {page.text}
          </Link>
        );
      })}
    </nav>
  );
}

export default NavBar;
