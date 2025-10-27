import { Link } from 'react-router';

function PaletteList({ palettes }) {
  return (
    <div>
      {palettes.length ? (
        <nav style={{ textAlign: 'left' }}>
          {palettes.map((palette) => {
            return (
              <li>
                <Link to={palette.name}>{palette.name}</Link>
              </li>
            );
          })}
        </nav>
      ) : (
        <h3> No Palettes Yet</h3>
      )}
    </div>
  );
}

export default PaletteList;
