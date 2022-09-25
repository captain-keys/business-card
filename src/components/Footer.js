import React from "react"
import { Icon } from '@iconify/react';

export default function Footer() {
    return (
        <div>
            <div className="footer--card"></div>
            <Icon className="twitter" icon="akar-icons:twitter-fill" />
            <a href="https://github.com/electrickeys">
                <Icon className="github" icon="akar-icons:github-fill" />
            </a>
        </div>

  )
}