import React from "react"
import ContentLoader from "react-content-loader"
import classes from './Preloader.module.css'

const MyPreloader = () => (
  <ContentLoader
    className={classes.preloader}
    speed={2}
    width={245}
    height={330}
    viewBox="0 0 245 330"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"

  >
    <rect x="22" y="40" rx="16" ry="16" width="214" height="157" />
    <rect x="22" y="206" rx="8" ry="8" width="213" height="54" />
    <rect x="192" y="254" rx="0" ry="0" width="13" height="1" />
    <rect x="19" y="272" rx="13" ry="13" width="216" height="31" />
    <rect x="177" y="301" rx="0" ry="0" width="7" height="0" />
  </ContentLoader>
)


export default MyPreloader