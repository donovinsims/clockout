import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__statement">
          <em>Built local.</em> Installed in 7 days. Owned by you forever.
        </p>
        <div className="footer__meta">
          <p className="footer__line tnum">
            Clockout · Roscoe · Rockford · Beloit · Northern IL
          </p>
          <ul className="footer__links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/agents">What we fix</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/assessment">Assessment</Link>
            </li>
            <li>
              <a href="mailto:hello@clockout.work">hello@clockout.work</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
