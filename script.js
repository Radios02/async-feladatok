async function GetAllPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error('Error fetching all posts:', error);
    }
  }
  
  async function GetPostById(id) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(`Error fetching post with id ${id}:`, error);
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
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  }
  
  async function UpdatePost(id) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(`Error updating post with id ${id}:`, error);
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
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(`Error patching post with id ${id}:`, error);
    }
  }
  
  async function DeletePost(id) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        console.log(`Post with id ${id} deleted successfully.`);
      } else {
        console.error(`Failed to delete post with id ${id}.`);
      }
    } catch (error) {
      console.error(`Error deleting post with id ${id}:`, error);
    }
  }
  