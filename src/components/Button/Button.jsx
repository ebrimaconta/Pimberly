import styled from 'styled-components';

const ButtonStyle = styled.button`
  font-size: 18px;
  margin-right: 20px;
  padding: 10px;
`;

function Button({ className, onClick, children }) {
  return (
    <>
      <ButtonStyle className={className} onClick={onClick}>
        {children}
      </ButtonStyle>
    </>
  );
}

export default Button;
