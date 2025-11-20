document.getElementById('blogPostForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const title = document.getElementById('blogTitle').value;
    const content = document.getElementById('blogContent').value;

    const postElement = document.createElement('div');
    postElement.className = 'blog-card';
    
    postElement.innerHTML = `
        <h3>${title}</h3>
        <p>By You</p>
        <p>${content}</p>
    `;

    document.getElementById('posts-container').prepend(postElement);

    document.getElementById('blogPostForm').reset();
});
