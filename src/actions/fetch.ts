import { Octokit } from '@octokit/core';
const fetchData = async (searchInput:string) => {
  try {
    const octokit = new Octokit();
    const { data } = await octokit.request('GET /search/repositories', {
      q: `${searchInput} in:name`,
      sort: 'stars',
      order: 'desc',
    });
    return data.items;
  } catch (e) {
    console.log('Error', e);
  }
};

export default fetchData;
