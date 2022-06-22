import React from 'react';

import { ButtonProps } from '@/typings/button';
import styles from './Button.module.scss';

interface Props {
  type?: ButtonProps;
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({
  type = ButtonProps.BUTTON,
  onClick,
  children,
}) => (
  <button
    type={type}
    onClick={onClick}
    className={styles.button}
  >
    {children}
  </button>
);

export default Button;
