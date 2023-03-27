import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutIcounLink() {
  return (
    <div className="about-link">
      <Link to="/about">
        <FaQuestion sixe={30} />
      </Link>
    </div>
  );
}

export default AboutIcounLink;
