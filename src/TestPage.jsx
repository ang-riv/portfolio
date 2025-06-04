const TestPage = () => {
  // styles
  const mainPage = {
    width: "100vh",
    height: "100vh",
    paddingTop: "30px",
    paddingLeft: "15px",
  };

  const mainContainer1 = {
    width: "320px",
    height: "28em",
    outline: "2px solid lightGrey",
    borderRadius: "0.313em",
    padding: "8px",
  };
  const wrapper = {
    borderRadius: "0.313em",
    width: "100%",
    height: "90%",
  };
  const imgStyle = {
    backgroundColor: "orange",
    width: "100%",
    height: "45%",
    borderRadius: "0.625em 0.625em 0 0",
  };
  const textWrapper = {
    width: "100%",
    height: "55%",
  };
  const badgeDiv = {
    width: "100%",
    display: "flex",
  };
  const badgeStyle = {
    padding: "2px 10px",
    outline: "1px solid lightBlue",
    marginTop: "0",
    marginRight: "10px",
    fontSize: "14px",
    borderRadius: "0.625em",
  };
  const description = {
    width: "100%",
    margin: "0",
    padding: "0",
  };
  return (
    <div style={mainPage}>
      <div style={mainContainer1}>
        <div style={wrapper}>
          <div style={imgStyle}></div>
          <div style={textWrapper}>
            <h3
              style={{
                fontSize: "1.7em",
                padding: 0,
                margin: "5px 0",
                textAlign: "start",
              }}
            >
              Dinner Party Generator
            </h3>
            <div style={badgeDiv}>
              <p style={badgeStyle}>React</p>
              <p style={badgeStyle}>TailwindCSS</p>
            </div>
            <p style={description}>
              Web app that generates a printable menu. Users can input guests
              who will be assigned a random dish for the party. Dishes can be
              filtered by inputting specific diet restrictions and allergies.
            </p>
          </div>
        </div>
        <button
          style={{
            width: "100%",
            height: "10%",
            borderRadius: "0.625em",
          }}
        >
          Live Site
        </button>
      </div>
    </div>
  );
};

export default TestPage;
