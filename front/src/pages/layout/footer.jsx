import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import '../../design/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} <strong>Rivision</strong>. All rights reserved.
        </p>

        <div className="footer-links">
          <a href="mailto:contact@nerdycenter.com" title="Email">
            <FaEnvelope />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
