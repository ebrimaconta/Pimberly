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

interface IGitDisplay {
  git: () => { owner: { login: string }; stargazers_count: string; html_url: string }[];
}
function GitDisplay({ git }: IGitDisplay) {
  return (
    <>
      {git()?.length > 0 ? (
        git().map((user: { owner: { login: string }; stargazers_count: string; html_url: string }, index) => {
          return (
            <Git key={index}>
              <Details>
                <Title> {user.owner.login}</Title>
                <div className=''>Number of Stars: {user.stargazers_count} </div>
                <a target={'_blank'} href={user.html_url} rel='noreferrer'>
                  <div className=''> See Repo </div>
                </a>
                <div className=''></div>
              </Details>
            </Git>
          );
        })
      ) : (
        <Git>
          <div>No Results</div>
        </Git>
      )}
    </>
  );
}

export default GitDisplay;
