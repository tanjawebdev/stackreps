import {FooterNav} from "./footernav";
import {ArrowIcon, LogoSvg} from "./svgIcons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logo">
          <LogoSvg/>
        </div>
        <div className="footer-top">
          <span className="h1">Effizient lernen, <br/>
            leicht bestehen</span>

          <FooterNav/>
        </div>
        <hr/>
        <div className="footer-bottom">
          <p>
            © Stackreps {new Date().getFullYear()}
          </p>
          <p>
            Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
)
}
