import React from 'react';

import styles from './Button.module.scss';

type Props = {
  type: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({
  type = 'button',
  children,
}) => (
  <button
    type={type}
    className="test"
  >
    {children}
  </button>
);

export default Button;
