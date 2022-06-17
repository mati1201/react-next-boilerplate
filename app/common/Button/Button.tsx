import React from 'react';

import styles from './Button.module.scss';

const Button = ({
  type = 'button',
  children,
}) => (
  <button type={type}>{children}</button>
)

export default Button;
