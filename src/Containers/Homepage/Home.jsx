import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="image-container">
        <img src="/ross.jpg" alt="me" />
      </div>
      <div className="text-container">
        <div>UI Designer</div>
        <div>3D Generalist</div>
        <div>Videomaker </div>
        <div className="country">
          From &nbsp; <div style={{ color: "red" }}> ITALY </div>
        </div>
      </div>
      <div className="social-container">
        <a
          className="social-icon link"
          href="https://www.linkedin.com"
          rel="noreferrer"
          target="_blank"
        >
          <img src="/linkedin-in.svg" width="30px" height="30px" alt="lnk" />
        </a>
        <a
          className="social-icon ig"
          href="https://www.instagram.com/pvthtrace/"
          rel="noreferrer"
          target="_blank"
        >
          <img src="/instagram.svg" width="30px" height="30px" alt="ig" />
        </a>
        <a
          className="social-icon bhc"
          href="https://www.linkedin.com"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="/behance.svg"
            width="30px"
            height="30px"
            alt="bhc"
            target="_blank"
          />
        </a>
      </div>
    </div>
  );
};

export default Home;
