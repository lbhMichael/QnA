/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useSearchParams } from 'react-router-dom';
import { QuestionList } from './QuestionList';
import { searchQuestions, QuestionData } from './QuestionsData';
import { useState, useEffect } from 'react';
import React from 'react';
import { Page } from './Page';

export const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const search = searchParams.get('criteria') || '';

  useEffect(() => {
    const doSearch = async (criteria: string) => {
      const results = await searchQuestions(criteria);
      setQuestions(results);
    };
    doSearch(search);
  }, [search]);
  return (
    <Page title="Search Results">
      {search && (
        <p
          css={css`
            font-size: 16px;
            font-style: italic;
            margin-top: 0px;
          `}
        >
          Search Results for "{search}"
        </p>
      )}
      <QuestionList data={questions} />
    </Page>
  );
};
