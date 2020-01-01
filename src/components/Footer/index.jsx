import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import styles from "./footer.module.sass"

const Footer = () => {
  const {
    allImageSharp: {
      edges: [facebookEdge, instagramEdge],
    },
  } = useStaticQuery(
    graphql`
      query {
        allImageSharp(
          filter: {
            original: { src: { regex: "/facebook-icon|instagram-icon/" } }
          }
        ) {
          edges {
            node {
              resize(width: 72) {
                src
              }
            }
          }
        }
      }
    `
  )

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <small>
          © {new Date().getFullYear()} Avila Tile. All Rights Reserved
        </small>
        <div className={styles.links}>
          <a className={styles.link} href="#">
            <img
              className={styles.icon}
              src={facebookEdge.node.resize.src}
              alt="Facebook"
            />
          </a>
          <a className={styles.link} href="#">
            <img
              className={[styles.icon, styles.instagramIcon].join(" ")}
              src={instagramEdge.node.resize.src}
              alt="Instagram"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
