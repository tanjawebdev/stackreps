import {FooterNav} from "./footernav";
import {ArrowIcon} from "./svgIcons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h1>Effizient lernen,
          leicht bestehen</h1>
        <ul className="footernav">
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="/rss"
            >
              <ArrowIcon />
              <p>rss</p>
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/tanjawebdev/stackreps"
            >
              <ArrowIcon />
              <p>github</p>
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://vercel.com/tanjawebdevs-projects"
            >
              <ArrowIcon />
              <p>view source</p>
            </a>
          </li>
        </ul>
        <FooterNav />
        <p>
          © {new Date().getFullYear()} Tanja Kobler
        </p>
      </div>
    </footer>
  )
}
