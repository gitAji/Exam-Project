const out = document.querySelector(".post-content");
const meta = document.querySelector("meta[name=description]");
const title = document.querySelector("title");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
//url to fetch data from
const url = "https://blog.norgetamil.com/wp-json/wp/v2/posts/" + id + "";;
//const media="+ id +";
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    listData(data);
  })
  .catch(error => out.innerHTML = "Something is wrong!");

function listData(post) {

  let html = `
   
    <div class="a-post">
        <div class="post-heading"><h4>${post.title.rendered}</h4></div>
       
        <div class="post-image">
        <img src="${post.featured_images.large}" alt="${post.slug}">
        </div>
        <div class="post-date">
        <p>
            Posted Date: <span>${post.date}</span>
            <p>
            
            </div>   
           
            <div class="post-body">
                ${post.content.rendered}
            </div>
    </div>
        

  `;
  out.innerHTML = html;
  title.innerHTML = post.title.rendered;
  meta.setAttribute("content", post.title.rendered);



}

// recent post for the side bar
const recentPosts=document.querySelector(".recent-posts");
const recentUrl='https://blog.norgetamil.com/wp-json/wp/v2/posts?_embed';
fetch(recentUrl)
    .then(response => response.json())
    .then(data => {
    recentPost(data);
        console.log(data);
    })
    .catch(error => recentPosts.innerHTML = "Something is wrong!");

    function recentPost(posts) {
      const latestList=posts.slice(0,3);
      console.log(latestList);
      let recentList="";
      for(let post of latestList){

        recentList += `
        <div class="recent-post">
        <a href="post.html?id=${post.id}">
        <div class="recent-post-img">
        <img src="${post._embedded['wp:featuredmedia']['0'].source_url}" alt="${post.slug}">
        </div>
        <div class="recent-post-title">
        <h4>
        ${post.title.rendered}
        </h4>
        </div>
        </a>
        </div>
        `;
    }
    recentPosts.innerHTML = recentList; //outputs the list of posts
}




        