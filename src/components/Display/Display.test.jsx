import Display from './Display';
import { screen, waitFor, render } from '@testing-library/react';

jest.mock('@octokit/core', () => {
  return {
    Octokit: jest.fn().mockImplementation(() => {
      return {
        request: jest.fn().mockImplementation(() => {
          return {
            data: {
              items: [
                {
                  owner: {
                    login: 'Shokhrukhmirzo',
                  },
                  html_url: 'https://github.com/Shokhrukhmirzo/adventure-game-lord-of-the-rings',
                  stargazers_count: 1,
                },
              ],
            },
          };
        }),
      };
    }),
  };
});

describe('<Display/>', () => {
  const renderComponent = () => {
    const utils = render(<Display />);

    return {
      ...utils,
    };
  };
  it('should render', async () => {
    renderComponent();
    await waitFor(() => {
      screen.debug();
    });
  });
});
