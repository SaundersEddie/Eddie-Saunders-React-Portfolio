import React from "react";
import EddieImage from "../../assets/Images/Eddie_ProfilePic.png";
import HappeningsImage from "../../assets/Images/happenings.png";

import "./body.css";

const Body = () => {
  return (
    <div className="w-128">
      <h1 className="text-center myTitleText">
        Please Allow Me to Introduce Myself...
      </h1>
      <h1 className="text-center myTitleText">Eddie Saunders</h1>
      <br></br>
      <img className="eddieImage" src={EddieImage} />
      <p>
        I started coding way back in 1983, when the in thing was 6510A (6502)
        Machine Code on a Commodore 64, after working on the Commodore 64 for
        many years I turned my attention to the wonderful world of 16Bit and
        started coding on the Commodore Amiga in 680x0 and the PC in 80x86. Over
        time I migrated away from the gaming industry, the "crunch time"
        problems of people not leaving an office for days that had no shower
        facilties pushed me to move onto pastures new.
      </p>
      <p>
        <br></br>
        In 1998 I moved to the USA and started my career fresh, working in the
        IT field for UPS, although I also looked after a small workforce
        managament group and done the odd bit of QA type work on proprietary
        systems being used at the time. 18 years later I had to opportunity to
        relocate to Cary, NC to work on automation and human emulation projects
        for a company where I remained until 2019.
      </p>
      <br></br>
      <p>
        When my contract ended, I decided to take a small break while
        considering where to go next, cue January 2020 when I decided to go into
        Full Stack Web Development (really, this was my spouses idea, I think
        she wanted me to do something other than gardening with visions of
        feeding the neighbourhood), this was quite a leap considering the
        technologies and code were pretty much a red raw reversal of what I'd
        been doing prior, we'll see where this leads.
      </p>
      <br></br>
      <hr></hr>
      <br></br>
      <h1 className="text-center myTitleText">My github stats</h1>
      <img
        className="image-center"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=SaundersEddie"
      ></img>
      <img
        className="image-center"
        src="https://github-readme-stats.vercel.app/api?username=SaundersEddie"
      ></img>
      <h1 className="text-center myTitleText">My Experience</h1>

      <h1 className="text-center myTitleText">My Projects</h1>
      <div className="myProjectImages">
        <a
          href="https://what-happenings.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={HappeningsImage} alt="Happenings App" />
        </a>
      </div>

      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
      <h1>All your base are belong to us</h1>
    </div>
  );
};

export default Body;
