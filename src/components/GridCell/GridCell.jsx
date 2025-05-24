
function GridCell({index, set}) {
    const handleClick = (link) => {
    window.open(link); // opens in a new tab
  };
  return (
    <div className="cell">
          <div
            className="imgcontainer xclone"
            style={{
             backgroundImage: `url(${set?.[index]?.image || ''})`

            }}
          ></div>
          <div className="cellcard">
            <h3 className="projecttitle">{set[index]?.title}</h3>
          </div>

          <div className="overlay">
            {set[index]?.link ? (
              <button
                className="overlay-text"
                onClick={() => handleClick(set[index]?.link)}
              >
                Github
              </button>
            ) : null}

            {set[index]?.demo_link ? (
              <button
                className="overlay-text"
                onClick={() => handleClick(set[index]?.demo_link)}
              >
                Demo
              </button>
            ) : null}
          </div>
    </div>
  );
}

export default GridCell;
