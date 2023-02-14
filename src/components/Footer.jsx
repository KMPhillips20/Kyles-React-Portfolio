import React from "react";

const styles = {
    footer: {
      margin: "auto",
      text: "white",
      background: "navy",
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
    a: {
      fontSize: 58,
      margin: 2,
    },
  };

export default function Footer() {
    return (
      <footer style={styles.footer}>
        <a href="https://github.com/KMPhillips20" target="_blank" rel="noreferrer">
          <FaGithub style={styles.a} />
        </a>
        <a
          href="https://www.linkedin.com/in/kyle-phillips-353239265/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin style={styles.a} />
        </a>
        <a
          href="https://www.facebook.com/kyle.phillips.165/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook style={styles.a} />
        </a>
      </footer>
    );
  }
