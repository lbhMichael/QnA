/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { gray2, gray3 } from './Styles';
import React from 'react';
import { QuestionData } from './QuestionsData';
import { Link } from 'react-router-dom';
interface Props {
  data: QuestionData;
  showContent?: boolean;
}

export const Question = ({ data, showContent = true }: Props) => (
  <div
    css={css`
      padding: 10px;
      font-size: 19px;
    `}
  >
    <div
      css={css`
        padding-bottom: 10px;
        font-size: 15px;
        color: ${gray2};
      `}
    >
      <Link
        css={css`
          text-decoration: none;
          color: ${gray2};
        `}
        to={`/questions/${data.questionId}`}
      >
        {data.title}
      </Link>
    </div>
    {showContent && (
      <div>
        {data.content.length > 50
          ? `${data.content.substring(0, 50)}...`
          : data.content}
      </div>
    )}
    <div
      css={css`
        margin-top: 4px;
        font-size: 12px;
        font-style: italic;
        color: ${gray3};
      `}
    >
      {`Asked By ${data.userName} on date ${data.created.toLocaleDateString()}`}
    </div>
  </div>
);
