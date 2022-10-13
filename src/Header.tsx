/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { fontFamily, fontSize, gray1, gray2, gray5 } from './Styles';
import { UserIcon } from './Icons';
import { Link, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
export const Header = () => {
  const [searchParams] = useSearchParams();
  const criteria = searchParams.get('criteria') || '';
  const [search, setSearch] = useState(criteria);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
  };
  return (
    <div
      css={css`
        font-size: 24px;
        font-weight: bold;
        color: ${gray1};
        text-decoration: none;
        display: flex;
        text-align: center;
      `}
    >
      <Link
        to="/"
        css={css`
          font-size: 24px;
          font-weight: bold;
          color: ${gray1};
          text-decoration: none;
        `}
      >
        QnA
      </Link>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearchInputChange}
        css={css`
          box-sizing: border-box;
          font-family: ${fontFamily};
          font-size: ${fontSize};
          padding: 8px 10px;
          border: 1px solid ${gray5};
          border-radius: 3px;
          color: white;
          background-color: #ffffff;
          width: 200px;
          height: 30px;
          :focus {
            outline-color: ${gray5};
          }
        `}
      />
      <Link
        to="signin"
        css={css`
          font-family: ${fontFamily};
          font-size: ${fontSize};
          padding: 5px 10px;
          background-color: transparent;
          color: ${gray2};
          text-decoration: none;
          cursor: pointer;
          :focus {
            outline-color: ${gray5};
          }
          span {
            margin-left: 7px;
          }
        `}
      >
        <UserIcon />
        <span>Sign In</span>
      </Link>
    </div>
  );
};
