console.log("hi")
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const result = document.querySelector('.latest-container');
const url = "https://blog.norgetamil.com/wp-json/wp/v2/posts?_embed";
fetch(url)
    .then(response => response.json())
    .then(data => {
        latestList(data);
        //console.log(data);
        
    }
    )
    .catch(error => result.innerHTML = "Something is wrong!");
function latestList(posts){
        let latest = "";
        console.log(posts);
for(let post of posts){

latest += `
<div class="post">
    <a href="post.html?id=${post.id}">
      <div class="post-img">
      <img src="${post._embedded['wp:featuredmedia']['0'].source_url}" alt="">

      </div>
      <div class="post-details">
        <p>
          Date: <span>${post.date}</span>
          <p>
            <p>Category: <span>${post.categories} </span></p>

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
result.innerHTML = latest; //displaying latest post
    
}

