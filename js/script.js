// show all category post ,max 6 post
// filter out posts by category


const postUrl='https://blog.norgetamil.com/wp-json/wp/v2/posts?_embed&per_page=8&page=1';
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const allPost=document.querySelector(".all-post-container");
const latest=document.querySelector(".latest");

 //url to fetch data from
fetch(postUrl)
    .then(response => response.json())
    .then(data => {
        allPosts(data);
        console.log(data);
    })
    .catch(error => allPost.innerHTML = "Something is wrong!");

function allPosts(posts) {
  let allPostsList=posts.slice(0,8);
    let myList = "";
    for (let post of allPostsList)

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
// first 3 latest post displayed
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
    const latestList=posts.slice(0,4);
    console.log(latestList);
    let latestP="";
    for(let post of latestList){
        latestP += `
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
    latest.innerHTML=latestP; // latest post displayed
}
// slider section for the main page 
const leftArrow=document.querySelector(".left-arrow");
const rightArrow=document.querySelector(".right-arrow");

leftArrow.addEventListener("click",function(){
  console.log("left arrow clicked");
}
);
rightArrow.addEventListener("click",function(){
 console.log("right arrow clicked");

}
);



// filter out posts by category
//6 post only displayed,when clicking on category btn it should load 6 post that related to the category


  const categoryUrl='https://blog.norgetamil.com/wp-json/wp/v2/posts?_embed';
  fetch(categoryUrl)
  .then(response => response.json())
  .then(data => {
      categoryList(data);
      //console.log(data);
      //console.log(catName);
      
  }
  )
  .catch(error => allPost.innerHTML = "Something is wrong!");
  
  const postLabel=document.querySelector(".post-label");

  

function categoryList(cats){
  postLabel.addEventListener("click",function(e){
  const catChosen=e.target.id;
console.log(catChosen);
  let filteredList=[];
  for(let cat of cats){
    console.log(cat);
if(cat._embedded["wp:term"][0][0].name==catChosen){
 filteredList=cats.filter((item)=>item.value === catChosen);
}
else{
  filteredList=cats.slice();
}


  }
  console.log(filteredList);
  let catList="";
  for(let post of filteredList){
    catList += `
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
  allPost.innerHTML = catList;
});
}


