/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { useEffect, useState } from 'react';
import { QuestionList } from './QuestionList';
import { getUnansweredQuestions, QuestionData } from './QuestionsData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';
import { PrimaryButton } from './Styles';
import { useNavigate } from 'react-router-dom';
import { QuestionPage } from './QuestionPage';

export const HomePage = () => {
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const handleAskQuestionClick = () => {
    navigate('ask');
  };
  console.log('render');
  useEffect(() => {
    const doGetUnansweredQuestions = async () => {
      const unansweredQuestions = await getUnansweredQuestions();
      setQuestions(unansweredQuestions);
      setIsLoading(false);
    };
    doGetUnansweredQuestions();
  }, []);
  return (
    <Page>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <PageTitle>Unanswered Question</PageTitle>
        <PrimaryButton onClick={handleAskQuestionClick}>
          Ask a Question
        </PrimaryButton>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <QuestionList data={questions || []} />
      )}
      {/* <QuestionList data={getUnansweredQuestions()} /> */}
    </Page>
  );
};
