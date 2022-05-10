const out=document.querySelector(".blog-posts");
const url='https://blog.norgetamil.com/wp-json/wp/v2/posts';
const media='https://blog.norgetamil.com/wp-json/wp/v2/media'    //url to fetch data from
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
      <div class="post-img">
      <img src="${media.source_url}" alt="">

      </div>
      <div class="post-details">
        <p>
          Date: <span>${post.date}</span>
          <p>
            <p>Category: <span>${post.categories}</span></p>

      </div>
      <div class="post-title">
        <h4>
        ${post.title.rendered}   
        </h4>
      </div>
    </div>
    </div>
        `;
 
    
    }
    out.innerHTML = myList;
}

