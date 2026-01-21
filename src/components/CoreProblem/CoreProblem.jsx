import "./CoreProblem.css";
import problemImg from "../../assets/problem-image.png"; 

const CoreProblem = () => {
  return (
    <section className="core-problem">
      <div className="core-problem-container">

        <div className="core-problem-image">
          <img src={problemImg} alt="Service Infrastructure" />
        </div>

        <div className="core-problem-content">
          <h2>The Core Problem</h2>

          <h3>
            No Proactive, End to End Service Lifecycle Management
          </h3>

          <p>
            Service today runs on <strong>outdated IVRs</strong>,{" "}
            <strong>disconnected chatbots</strong>,{" "}
            <strong>siloed workflows</strong>. Unlike products,{" "}
            <strong>services don't evolve continuously</strong>, leaving
            enterprises with <strong>slow, manual, and costly</strong>{" "}
            transformations and no visibility or learning from usage.
          </p>

          <h4>Customer Impact</h4>

          <p>
            Customers feel the impact too with{" "}
            <strong>broken journeys</strong>,{" "}
            <strong>repeated frustrations</strong>, and{" "}
            <strong>poor</strong> omnichannel experiences that erode trust
            and loyalty.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CoreProblem;
