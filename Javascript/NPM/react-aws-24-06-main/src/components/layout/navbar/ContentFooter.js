import React from 'react';
import styles from './ContentFooter.module.css'; // Für optionales modulbasiertes CSS

function ContentFooter() {
  return (
    <>
      <div className={styles.content}>Hello from Homepage</div>
      <footer className={styles.footer}>This is my footer</footer>
    </>
  );
}

export default ContentFooter;
