import React from "react"
import { Icon } from '@iconify/react';

export default function Info() {
    return (
        <info>
            <div className="info--headshot"></div>
            <div className="info--card"></div>
            <div className="info--name">Jeff Headley</div>
            <div className="info--title">Software Developer</div>
            <div className="info--addy">jeffheadley.website</div>
            <a href="mailto: jheadley228@gmail.com">
                <div className="mail--butt">
                    <Icon className="mail--icon" icon="fluent:mail-12-filled" />
                    <div className="mail--text">Email</div>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/jheadley228/">
                <div className="linked--butt">
                    <Icon className="linked--icon" icon="akar-icons:linkedin-fill" />
                    <div className="linked--text">LinkedIn</div>
                </div>
            </a>
            
        </info>
    )
}