import styled from 'styled-components';

const ButtonStyle = styled.button`
  font-size: 18px;
  margin-right: 20px;
  padding: 10px;
`;
interface IButton {
  className: string;
  onClick: () => void;
  children: string;
}
function Button({ className, onClick, children }: IButton) {
  return (
    <>
      <ButtonStyle className={className} onClick={onClick}>
        {children}
      </ButtonStyle>
    </>
  );
}

export default Button;
