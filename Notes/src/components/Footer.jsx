import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <center>
      <footer>
        <p>
          Notes ⓒ {year} Developed by Saptak Chakraborty{" "}
          <a href="https://www.facebook.com/Saptak10" target="_blank">
            <i className="lni lni-facebook-original"></i>
          </a>
          <a href="https://github.com/Saptak10" target="_blank">
            <i className="lni lni-github-original"></i>
          </a>
          <a href="https://www.instagram.com/saptak10/" target="_blank">
            <i className="lni lni-instagram-original"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/saptak-chakraborty-aa2bab134"
            target="_blank"
          >
            <i className="lni lni-linkedin-original"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UC7VlXXvUZhxoo2ux617y_Gg"
            target="_blank"
          >
            <i className="lni lni-youtube"></i>
          </a>
          <a
            href="mailto:saptak.bugatti20@gmail.com,1929114@kiit.ac.in"
            target="_blank"
          >
            <i className="lni lni-google"></i>
          </a>
        </p>
      </footer>
    </center>
  );
}

export default Footer;
