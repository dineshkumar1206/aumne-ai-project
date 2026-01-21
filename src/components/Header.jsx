import Video from "./Video";
import heroVideo from "../assets/loop-video.mp4";
import "./Header.css";

const Header = () => {
  return (
    <Video src={heroVideo} overlay className="hero">
      <div className="hero-content">
        <h1>
          The First Agentic Service
          <br />
          Lifecycle Platform
        </h1>

        <p>
          Aumne revolutionizes Service Lifecycle Management with Agentic systems,
          transforming legacy IVRs, chatbots, fragmented workflows, and siloed
          support into Agentic conversational services.{" "}
          <span>Achieve 5x faster modernization.</span>
        </p>

        <button className="hero-btn">Let&apos;s ACT</button>
      </div>
    </Video>
  );
};

export default Header;
