import { useState, useEffect } from 'react';
import styled from 'styled-components';
import GitDisplay from './GitDisplay/GitDisplay';
import FadeLoader from 'react-spinners/FadeLoader';
import fetchData from '../../actions/fetch';
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
  const dataLimit = 25;
  const [searchInput, setSearchInput] = useState('the lord of the rings');
  const [gitInfo, setGitInfo] = useState<any[]>([]);
  const [pages, setPages] = useState<number>(Math.round(gitInfo?.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const results = async () => {
    try {
      const data = await fetchData(searchInput);
      if (data) {
        setGitInfo(data);
        setPages(Math.round(data.length / dataLimit));
        setLoading(false);
      }
    } catch (e) {
      console.log('Error', e);
    }
  };
  useEffect(() => {
    results();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    if (gitInfo?.length > 0) {
      return gitInfo.slice(startIndex, endIndex);
    }
    return [];
  };

  if (loading) {
    return (
      <Spinner>
        <div className=''>Loading</div>
      </Spinner>
    );
  }
  return (
    <>
      <Input
        type='text'
        value={searchInput}
        placeholder='Typing...'
        onChange={(e) => setSearchInput(e.target.value)}
        name='searchbox'
      />
      <GitDisplay git={getPaginatedData} />
      <ButtonContainer>
        <Button className={`${currentPage === 1 ? 'disabled' : ''}`} onClick={() => setCurrentPage(currentPage - 1)}>
          Prev
        </Button>
        <Button
          className={`${currentPage === pages + 1 ? 'disabled' : ''}`}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </Button>
      </ButtonContainer>
    </>
  );
}

export default Display;
