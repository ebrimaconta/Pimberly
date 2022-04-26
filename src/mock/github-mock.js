const gitMock = {
  items: [
    {
      id: 430822283,
      owner: {
        login: 'Shokhrukhmirzo',
      },
      html_url: 'https://github.com/Shokhrukhmirzo/adventure-game-lord-of-the-rings',
      size: 2,
      stargazers_count: 1,
    },
  ],
};
let fill = Array(30).fill(gitMock.items[0]);
const gitAlot = {
  items: fill,
};

export { gitMock, gitAlot };
