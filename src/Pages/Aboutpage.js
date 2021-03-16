import React from 'react';
import { Container } from 'react-bootstrap'

export default function Aboutpage() {
    return (
        <Container>
            <h1>Please Allow Me to Introduce Myself</h1>
            <hr></hr>
            <p className="eAbout">
                I started coding way back in 1983, when the in thing was 6510A (6502)
                Machine Code on a Commodore 64, after working on the Commodore 64 for
                many years I turned my attention to the wonderful world of 16Bit and
                started coding on the Commodore Amiga in 680x0 and the PC in 80x86. Over
                time I migrated away from the gaming industry, the "crunch time"
                problems of people not leaving an office for days that had no shower
                facilties pushed me to move onto pastures new.
            </p>
            <p className="eAbout">
                In 1998 I moved to the USA and started my career fresh, working in the
                IT field for UPS, although I also looked after a small workforce
                managament group and done the odd bit of QA type work on proprietary
                systems being used at the time. 18 years later I had to opportunity to
                relocate to Cary, NC to work on automation and human emulation projects
                for a company where I remained until 2019.
            </p>
            <p className="eAbout">
                When my contract ended, I decided to take a small break while
                considering where to go next, cue January 2020 when I decided to go into
                Full Stack Web Development, this was quite a leap considering the
                technologies and code were pretty much a red raw reversal of what I'd
                been doing prior.
            </p>
        </Container>
    )
}
