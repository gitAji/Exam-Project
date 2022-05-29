
const url='https://blog.norgetamil.com/wp-json/wp/v2/posts?_embed&per_page=8&page=1';
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const out=document.querySelector(".blog-posts");
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
      <img src="${post._embedded['wp:featuredmedia']['0'].source_url}" alt="${post.slug}">

      </div>
      <div class="post-details">
        <p>
          Date: <span>${post.date}</span>
          <p>
            <p>Category: <span>${post._embedded["wp:term"][0][0].name} </span></p>

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
    out.innerHTML = myList; //outputs the list of posts
}


// function loadMoreList to load more posts
const loadMore=document.querySelector(".load-more");
loadMore.addEventListener("click",function(){
  console.log("clicked");
  const loadMoreUrl='https://blog.norgetamil.com/wp-json/wp/v2/posts?_embed&per_page=8&page=2';
  fetch(loadMoreUrl)
  .then(response => response.json())
  .then(data => {
      loadMoreList(data);
      console.log(data);
      
  }
  )
  .catch(error => out.innerHTML = "Something is wrong!");
}
);
function loadMoreList(posts){
  let loadMoreList="";
  for(let post of posts){
    loadMoreList += `
    <div class="post">
    <a href="post.html?id=${post.id}">
      <div class="post-img">
      <img src="${post._embedded['wp:featuredmedia']['0'].source_url}" alt="">

      </div>
      <div class="post-details">
        <p>
          Date: <span>${post.date}</span>
          <p>
            <p>Category: <span>${post._embedded["wp:term"][0][0].name} </span></p>

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
  out.innerHTML += loadMoreList;
}



// when all button clicked to filter posts by all category

const all=document.getElementById("all");
const food=document.getElementById("food");
const health=document.getElementById("health");
const lifestyle=document.getElementById("lifestyle");
const travel=document.getElementById("travel");
const fashion=document.getElementById("fashion");

all.addEventListener("click",function(){
  const allUrl='https://blog.norgetamil.com/wp-json/wp/v2/posts?_embed';
  fetch(allUrl)
  .then(response => response.json())
  .then(data => {
      allPosts(data);
      console.log(data);
      
  }
  )
  .catch(error => out.innerHTML = "Something is wrong!");
}
);
function allPosts(posts) {
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
            <p>Category: <span>${post._embedded["wp:term"][0][0].name} </span></p>

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
// if food Category selected
food.addEventListener("click",function(){
  const foodUrl='https://blog.norgetamil.com/wp-json/wp/v2/posts?_embed?post_per_page=8?page=1&categories=3';
  fetch(foodUrl)
  .then(response => response.json())
  .then(data => {
      foodPosts(data);
      console.log(data);
      
  }
  )
}
);
function foodPosts (posts) {
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
            <p>Category: <span>${post._embedded["wp:term"][0][0].name} </span></p>

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

// health Category
health.addEventListener("click",function(){
  const healthUrl='https://blog.norgetamil.com/wp-json/wp/v2/posts?_embed?post_per_page=8?page=1&categories=4';
  fetch(healthUrl)
  .then(response => response.json())
  .then(data => {
      healthPosts(data);
      console.log(data);
      
  }
  )
}
);
function healthPosts (posts) {
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
            <p>Category: <span>${post._embedded["wp:term"][0][0].name} </span></p>

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