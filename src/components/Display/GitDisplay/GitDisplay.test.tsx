/* eslint-disable testing-library/no-node-access */

import GitDisplay from './GitDisplay';
import { screen, render } from '@testing-library/react';
import { gitMock } from '../../../mock/github-mock';

describe('<GitDisplay/>', () => {
  const getMock = () => gitMock.items;
  const renderComponent = () => {
    const utils = render(<GitDisplay git={getMock} />);

    return {
      ...utils,
    };
  };
  it('should render the component', async () => {
    renderComponent();

    expect(screen.getByText('Shokhrukhmirzo')).toBeInTheDocument();
    expect(screen.getByText('Number of Stars: 1')).toHaveTextContent('Number of Stars: 1');

    expect(screen.getByText('See Repo').closest('a')).toHaveAttribute(
      'href',
      'https://github.com/Shokhrukhmirzo/adventure-game-lord-of-the-rings'
    );
  });
});
