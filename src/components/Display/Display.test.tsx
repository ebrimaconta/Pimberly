/* eslint-disable testing-library/no-unnecessary-act */
import Display from './Display';
import { screen, fireEvent, waitFor, render } from '@testing-library/react';
import { gitAlot } from '../../mock/github-mock';
import { act } from 'react-dom/test-utils';
import fetchData from '../../actions/fetch';

jest.mock('../../actions/fetch');

describe('<Display/>', () => {
  beforeEach(() => {
    (fetchData as jest.Mock).mockImplementation(() => Promise.resolve(gitAlot.items));
  });

  const renderComponent = () => {
    const utils = render(<Display />);

    return {
      ...utils,
    };
  };
  it('should render the component', async () => {
    act(() => {
      renderComponent();
    });
    expect(await screen.findByPlaceholderText('Typing...')).toBeInTheDocument();
  });

  it('should render component after loading', async () => {
    act(() => {
      renderComponent();
    });

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalled();
    });
    const getText = await screen.findAllByText('Shokhrukhmirzo');
    expect(getText[0]).toBeInTheDocument();

    const getPreviousButton = await screen.findByText('Prev');
    const getNextButton = await screen.findByText('Next');
    expect(getPreviousButton).toHaveClass('disabled');
    expect(getNextButton).not.toHaveClass('disabled');
  });
  it('should render next page', async () => {
    act(() => {
      renderComponent();
    });
    await waitFor(() => {
      expect(fetchData).toHaveBeenCalled();
    });
    const getNextButton = await screen.findByText('Next');
    fireEvent.click(getNextButton);
    expect(getNextButton).toHaveClass('disabled');
  });
});
