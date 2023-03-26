import Card from "../commponents/share/Card";
import { Link } from "react-router-dom";

function About() {
  return (
    <Card>
      <div className="about">
        <h1>The About Page</h1>
        <p>This is a small project I astarted to help learn react</p>
        <p>
          <Link to="/">Back To Main Page</Link>
        </p>
      </div>
    </Card>
  );
}

export default About;
