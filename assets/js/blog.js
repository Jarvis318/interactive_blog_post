function displayBlogPosts(){
    let savedBlogPosts = JSON.parse(localStorage.getItem("BlogPosts")) || [] ;
    let blogElement = document.getElementById("blog-post");
    for(let i = 0; i <savedBlogPosts.length; i++){
        let singlePost = savedBlogPosts[i];
        let titleElement = document.createElement("h1"); //Used to make tags
        let contentElement = document.createElement("p");
        let userNameElement = document.createElement("p");
        titleElement.textContent = singlePost.title;
        contentElement.textContent = singlePost.content;
        userNameElement.textContent = singlePost.username;
        let blogWrapperElement = document.createElement("div"); //Creates a empty div
        blogWrapperElement.classList.add("blog-wrapper");
        blogWrapperElement.appendChild(titleElement);
        blogWrapperElement.appendChild(userNameElement);
        blogWrapperElement.appendChild(contentElement);
        blogElement.appendChild(blogWrapperElement); //Adds the blogpost to the page.
        //console.log(singlePost);
    }
}

displayBlogPosts();