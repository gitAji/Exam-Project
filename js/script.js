const out=document.querySelector(".blog-posts");
const url='https://blog.norgetamil.com/wp-json/wp/v2/posts?_embed';
const category='https://blog.norgetamil.com/wp-json/wp/v2/categories?_embed';
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
 //url to fetch data from
fetch(url)
    .then(response => response.json())
    .then(data => {
        listPosts(data);
        console.log(data);
    })
    .catch(error => out.innerHTML = "Something is wrong!");

function listPosts(posts) {
    let myList = "";
    for (let post of posts) {
        console.log(post);

        myList += `
       
    <div class="post">
    <a href="post.html?id=${post.id}">
      <div class="post-img">
      <img src="${post._embedded['wp:featuredmedia']['0'].source_url}" alt="">

      </div>
      <div class="post-details">
        <p>
          Date: <span>${post.date}</span>
          <p>
            <p>Category: <span>${post._embedded['wp:term'][0].category_name} </span></p>

      </div>
      <div class="post-title">
        <h4>
        ${post.title.rendered}   
        </h4>
      </div>
    </a>
    </div>
        `;
 
    
    }
    out.innerHTML = myList;
}