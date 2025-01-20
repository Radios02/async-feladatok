async function GetAllPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();
      console.log(posts);
      return posts;
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }
  
  async function GetPostById(id) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const post = await response.json();
      console.log(post);
      return post;
    } catch (error) {
      console.error(`Error fetching post with ID ${id}:`, error);
    }
  }
  
  async function CreatePost() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const newPost = await response.json();
      console.log(newPost);
      return newPost;
    } catch (error) {
      console.error('Error creating post:', error);
    }
  }
  
  async function UpdatePost(id) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          id: id,
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const updatedPost = await response.json();
      console.log(updatedPost);
      return updatedPost;
    } catch (error) {
      console.error(`Error updating post with ID ${id}:`, error);
    }
  }
  
  async function PatchPost(id) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          title: 'foo',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const patchedPost = await response.json();
      console.log(patchedPost);
      return patchedPost;
    } catch (error) {
      console.error(`Error patching post with ID ${id}:`, error);
    }
  }
  
  async function DeletePost(id) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        console.log(`Post with ID ${id} deleted successfully.`);
      } else {
        console.error(`Failed to delete post with ID ${id}`);
      }
    } catch (error) {
      console.error(`Error deleting post with ID ${id}:`, error);
    }
  }
  

console.log(await GetAllPosts())
console.log(await GetPostById(3))
console.log(await CreatePost())
console.log(await UpdatePost(4))
console.log(await PatchPost(10))
console.log(await DeletePost(100))
  
