const userFormEl = document.querySelector("#userForm");
const userInputEl = document.querySelector("#username-input");
const titleInputEl = document.querySelector("#title-input");
const contentInputEl = document.querySelector("#content-input");


const formSubmitHandler = function (event) {
    event.preventDefault();


    let postlist = {
        username: userInputEl.value.trim(),
        title: titleInputEl.value.trim(),
        content: contentInputEl.value.trim()
    }
   

    if (postlist.title== '' && postlist.username== '' && postlist.content=='') {
        alert('Please provide a response before submitting.')
        return;
    }
    else{
        let allBlogPosts = JSON.parse(localStorage.getItem("BlogPosts")) || [] ;
        allBlogPosts.push(postlist); //Add the lastest post list to the allBlogPosts
        localStorage.setItem('BlogPosts', JSON.stringify(allBlogPosts));//Saves blog posts to local storage.
        //localStorage.setItem('title1', JSON.stringify(title));
        //localStorage.setItem('username1', JSON.stringify(username));
        //localStorage.setItem('content1', JSON.stringify(content));
    }

    window.location.href = "./blog.html";
}



userFormEl.addEventListener('submit', formSubmitHandler);