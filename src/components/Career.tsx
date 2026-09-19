import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary (Science)</h4>
                <h5>Hindmotor Education Centre</h5>
              </div>
              <h3>2021 - 2023</h3>
            </div>
            <p>
              Completed Higher Secondary education in Science.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Data Science</h4>
                <h5>Techno Main – Salt Lake</h5>
              </div>
              <h3>2024 - 2028</h3>
            </div>
            <p>
              Computer Science with Specialization in Data Science. Focusing on Data Analytics, Machine Learning, Python, and SQL.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graphic Designer</h4>
                <h5>IIC TMSL</h5>
              </div>
              <h3>2024 - Present</h3>
            </div>
            <p>
              Create visual communication and promotional content for institutional initiatives, events, and campaigns.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co-Founder</h4>
                <h5>Fusion Productions</h5>
              </div>
              <h3>2025 - Present</h3>
            </div>
            <p>
              Co-founded and operate a custom clothing brand focused on customized apparel and creative product design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
