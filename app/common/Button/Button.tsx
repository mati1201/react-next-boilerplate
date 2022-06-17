import React from 'react';

import { ButtonProps } from '@/typings/button';
import styles from './Button.module.scss';

type Props = {
  type?: ButtonProps;
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({
  type = ButtonProps.BUTTON,
  children,
}) => (
  <button
    type={type}
    className={styles.button}
  >
    {children}
  </button>
);

export default Button;
