async function getPost(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return await response.json(response);
}

module.exports = getPost;
