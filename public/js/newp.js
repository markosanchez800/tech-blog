const newPosting = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#newp-title').value.trim();
    const content = document.querySelector('#newp-body').value.trim();
    console.log('function running');
    if (title && content){
      const response = await fetch('/api/post/newp',{
        method:'POST',
        body: JSON.stringify({title,content}),
        headers: {'Content-Type': 'application/json'},
      });
      if (response.ok) {
        document.location.replace('/api/post/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };

const deletePost = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/post/delete');
    if (response.ok){
        document.location.replace('/api/post/dashboard');
    } else {
        alert(response.statusText);
    }
};

  document.querySelector('.newp-form').addEventListener('submit',newPosting);
  document.querySelector('#deletebutton').addEventListener('click',deletePost);