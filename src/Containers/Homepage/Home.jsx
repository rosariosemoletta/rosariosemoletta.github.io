import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="image-container">
        <img src="/Foto1.jpg" alt="me" />
      </div>
      <div className="text-container">
        <div>UI Designer</div>
        <div>3D Generalist</div>
        <div>Videomaker </div>
        <div className="country">
          From &nbsp; <div style={{ color: "#e40037" }}> ITALY </div>
        </div>
      </div>
      <div className="social-container">
        <a
          className="social-icon link"
          href="https://www.linkedin.com"
          rel="noreferrer"
          target="_blank"
        >
          <img src="/linkedin-in.svg" width="45px" height="45px" alt="lnk" />
        </a>
        <a
          className="social-icon ig"
          href="https://www.instagram.com/pvthtrace/"
          rel="noreferrer"
          target="_blank"
        >
          <img src="/instagram.svg" width="45px" height="45px" alt="ig" />
        </a>
        <a
          className="social-icon bhc"
          href="https://www.linkedin.com"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="/behance.svg"
            width="45px"
            height="45px"
            alt="bhc"
            target="_blank"
          />
        </a>
      </div>
    </div>
  );
};

export default Home;
