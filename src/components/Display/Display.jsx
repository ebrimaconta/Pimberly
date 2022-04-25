import { useState, useEffect } from 'react';
import styled from 'styled-components';
import GitDisplay from './GitDisplay/GitDisplay';
import FadeLoader from 'react-spinners/FadeLoader';
import { Octokit } from '@octokit/core';
import Button from '../Button/Button';

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  width: 92%;
  margin: 10px 40px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;
const Spinner = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 20px 0px;
`;
const ButtonContainer = styled.div`
  margin: 30px 40px;
`;
function Display() {
  const [searchInput, setSearchInput] = useState('the lord of the rings');
  const [gitInfo, setGitInfo] = useState([]);
  const [pages, setPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const octokit = new Octokit({ auth: `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` });
  const dataLimit = 25;

  const fetchData = async () => {
    try {
      const response = await octokit.request('GET /search/repositories', {
        q: `${searchInput} in:name`,
        sort: 'stars',
        order: 'desc',
      });
      setGitInfo(response.data.items);
      setLoading(false);
      setPages(Math.ceil(gitInfo.length / dataLimit));
    } catch (e) {
      console.log('Error', e);
    }
  };

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return gitInfo.slice(startIndex, endIndex);
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);
  if (loading) {
    return (
      <Spinner>
        <FadeLoader loading={loading} size={150} />
      </Spinner>
    );
  }
  return (
    <>
     
    </>
  );
}

export default Display;
