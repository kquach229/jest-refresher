const getPost = require('./async');

it('should return data of a post based on id of 2', async () => {
  const post = await getPost(2);
  expect(post.id).toBe(2);
});
