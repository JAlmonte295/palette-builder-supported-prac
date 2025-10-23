function PaletteViewer({ palette, handleColorRemove }) {
  return (
    <div>
      <h5>{palette.name}</h5>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {palette.colors.map((color, i) => {
          return (
            <div
              key={i}
              style={{
                background: color,
                width: '60px',
                height: '100px',
                borderRadius: '15px',
                cursor: 'pointer',
              }}
              onClick={() => handleColorRemove(color)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default PaletteViewer;
