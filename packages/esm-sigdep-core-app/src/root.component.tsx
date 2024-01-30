import React from 'react';
import classNames from 'classnames';
import styles from './root.scss';

export default function Root() {
  return <main className={classNames('omrs-main-content', styles.root)}></main>;
}
