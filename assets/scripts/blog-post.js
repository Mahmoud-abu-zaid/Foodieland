function radioClick(hoverRadio) {
  const labels = document.querySelectorAll("label");
  labels.forEach((labels) => hoverRadio.classList.add("active-label"));
}

function loadPostDetils() {
  const postBlog = sessionStorage.getItem("selectedPost");
  if (postBlog) {
    const post = JSON.parse(postBlog);
    document.title = `${post.title}`;
    document.getElementById("post-Blog-title").textContent = post.title;
    document.getElementById("post-Blog-content").innerHTML = `
    <div>
    <img src="${post.imgArtcale}" alt="">
    </div>
    `;
  }
}
window.addEventListener("DOMContentLoaded", loadPostDetils);