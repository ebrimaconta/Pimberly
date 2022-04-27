import Button from './Button';
import { screen, render, fireEvent } from '@testing-library/react';

describe('<Button />', () => {
  const renderComponent = () => {
    const onClick = jest.fn();
    const utils = render(
      <Button className={`disable`} onClick={onClick}>
        Next
      </Button>
    );

    return {
      ...utils,
      onClick,
    };
  };
  it('should render the component', async () => {
    const { onClick } = renderComponent();

    expect(screen.getByText('Next')).toBeInTheDocument();
    expect(screen.getByText('Next')).toHaveClass('disable');

    const getButton = screen.getByText('Next');
    fireEvent.click(getButton);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
