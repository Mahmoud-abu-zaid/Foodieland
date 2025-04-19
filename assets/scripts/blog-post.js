
function loadPostDetils() {
  const postBlog = sessionStorage.getItem("selectedPost");
  if (postBlog) {
    const post = JSON.parse(postBlog);
    document.title = `${post.title}`;
    document.getElementById("post-Blog-content").innerHTML = `
    <div class="flex content-post">
   
    <div>
    <h2>${post.title}</h2>
    <div class="flex">
    <img src="${post.clintImg}" alt=${post.clint}>
    <span class="clint-name">${post.clint}</span>
    <span class="date-post">${post.date}</span>
    </div>
    <p>${post.description}</p>
    </div>
   
    </div>
     <div class="img-artcale">
     <img src="${post.imgArtcale}" alt=${post.title}>
    </div>
   
    </div>

    </div>
    `;
  }
}
window.addEventListener("DOMContentLoaded", loadPostDetils);
