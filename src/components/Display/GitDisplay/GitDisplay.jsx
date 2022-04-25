import styled from 'styled-components';

const Git = styled.div`
  background-color: white;
  display: flex;
  margin: 20px 40px;
  padding: 10px 20px;
`;
const Details = styled.div`
  padding: 3px 20px;
`;
const Title = styled.div``;
function GitDisplay({ git }) {
  console.log('git', git());
  return (
    <>
      {git().map((user, index) => {
        return (
          <Git key={index}>
            <Details>
              <Title>User: {user.owner.login}</Title>
              <div className=''>Number of Stars: {user.stargazers_count} </div>
              <a target={'_blank'} href={user.html_url} rel='noreferrer'>
                <div className=''> See Repo </div>
              </a>
              <div className=''></div>
            </Details>
          </Git>
        );
      })}
    </>
  );
}

export default GitDisplay;
