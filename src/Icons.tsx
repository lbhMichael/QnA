/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import user from './user.svg';

export const UserIcon = () => {
  return (
    <img
      src={user}
      alt="UserIcon"
      css={css`
        width: 12px;
        opacity: 0.6;
      `}
    />
  );
};
