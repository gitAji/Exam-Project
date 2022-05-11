const out = document.querySelector(".post-content");
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

    out.innerHTML = `
    <div class="a-post">
        <div class="post-heading"><h4>${post.title.rendered}</h4></div>
        <div class="post-date">
        <p>
            Posted Date: <span>${post.date}</span>

        </p>
        </div>
        <div class="post-image">
        <img src="${post.featured_images.large}" alt="">
        </div>
            <div class="post-body">
                ${post.content.rendered}
            </div>
    </div>
        

  `;



}