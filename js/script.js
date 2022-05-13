
// filter out posts by category


const postUrl='https://blog.norgetamil.com/wp-json/wp/v2/posts?_embed&per_page=6&page=1';
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const allPost=document.querySelector(".all-post-container");
const latest=document.querySelector(".latest-container");

 //url to fetch data from
fetch(postUrl)
    .then(response => response.json())
    .then(data => {
        allPosts(data);
        console.log(data);
    })
    .catch(error => allPost.innerHTML = "Something is wrong!");

function allPosts(posts) {
    let myList = "";
    for (let post of posts)

     {
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
 allPost.innerHTML = myList;


}

function newLatest(){
    const latestUrl='https://blog.norgetamil.com/wp-json/wp/v2/posts?_embed';
    fetch(latestUrl)
    .then(response => response.json())
    .then(data => {
        newList(data);
        console.log(data);
        
    }
    )
    .catch(error => latest.innerHTML = "Something is wrong!");

}
newLatest();
function newList(posts){
    const latestList=posts.slice(0,3);
    console.log(latestList);
    let latestP="";
    for(let post of latestList){
        latestP += `
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
    latest.innerHTML=latestP;
}
