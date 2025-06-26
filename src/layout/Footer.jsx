import { Link } from "react-router-dom";

import footer_logo from "../assets/icon/logo.svg";
import footer_email from "../assets/icon/icon_email.svg";
import footer_linkedin from "../assets/icon/icon_linkedin.svg";
import footer_behance from "../assets/icon/icon_behance.svg";
import Resume from "../assets/adrian_albuera_cv.pdf"

export default function Footer() {
  return (
    <section className="" id="footer">
      <div className="footer">
        <div className="row g-0 justify-content-center py-5 aa-bg-primary aa-text-white  text-center w-100">
          <div className="col-lg-8 px-3">
            <h1 className="aa-fs-header-1 mt-5 mb-4">
              Let's <span className="aa-text-accent">Work Together?</span>
            </h1>
            <p className="mb-4 fs-5">
              Got a project in mind? Let’s connect and create something
              meaningful together.
            </p>
            <div className="d-flex justify-content-center flex-wrap gap-3">
              <Link
                to="/contacts"
                className="aa-btn-accent "
                aria-label="Contact me"
              >
                LET'S TALK
              </Link>
              <a
                href= {Resume}
                download="adrian_albuera_cv"
                className="aa-btn-outline "
                aria-label="Download my CV"
              >
                DOWNLOAD RESUME
              </a>
            </div>
          </div>

          <hr className="border-3 opacity-25 mt-5" />
          <div className="row mt-3 justify-content-center g-0">
            <div className="col-md-4">
              <img src={footer_logo} />
            </div>

            <div className="col-md-4 d-grid text-center text-md-start my-auto">
              <h4 className="mt-3">QUICK LINKS</h4>

              <div className="d-flex justify-content-center justify-content-md-start">
                <ul className="navbar-nav flex-row gap-4 poppins aa-fs-p-3 ">
                <li>
                  <Link to="/home" className="aa-text-white">
                    {" "}
                    Home{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/aboutMe" className="aa-text-white">
                    About Me
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="aa-text-white">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/contacts" className="aa-text-white">
                    Contact
                  </Link>
                </li>
              </ul>
              </div>
            </div>

            <div className="col-md-4 my-auto text-center text-md-start">
              <h4 className="mt-3">My Socials</h4>
               <div className="d-flex justify-content-center justify-content-md-start">
              <ul className="navbar-nav flex-row gap-4 poppins aa-fs-p-3">
                <li>
                    <a href="https://facebook.com">
                  <img src={footer_email} height={"32"} width={"32"} />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/adrian-albuera/"/>
                  <img src={footer_linkedin} height={"32"} width={"32"} />
                </li>
                <li>
                <a href="https://www.behance.net/aalbuera25"/>
                  <img src={footer_behance} height={"32"} width={"32"} />
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
