function loadVideoDetails() {

  let selected = sessionStorage.getItem("selectedVideo");

  if (!selected) {

    selected = JSON.stringify(videos.burger);
    sessionStorage.setItem("selectedVideo", selected);
  }


  const savedVideo = sessionStorage.getItem("selectedVideo");

  if (savedVideo) {
    const video = JSON.parse(savedVideo);

    document.getElementById("detail-title").textContent = video.title;
    document.getElementById("details-head").innerHTML = `
        <div class="head">
          <div class="head-data">
            <div class="me">
              <div>
                <img src="/assets/img/Screenshot 2024-12-29 124206.png" alt="" />
              </div>
              <div>
                <p>Mahmoud Abu zaid</p>
                <p>13 April 2025</p>
              </div>
            </div>

            <div class="prepTime">
              <div>
                <i class="fa-solid fa-clock"></i>
              </div>
              <div>
                <p>PREP TIME</p>
                <p>${video.prepTime}</p>
              </div>
            </div>

            <div class="cookTime">
              <div>
                <i class="fa-solid fa-clock"></i>
              </div>
              <div>
                <p>COOK TIME</p>
                <p>${video.cookTime}</p>
              </div>
            </div>

            <div>
              <i class="fa-solid fa-utensils"></i>
              <span>${video.Type}</span>
            </div>
          </div>

          <div class="icons-shere-and-print">
            <div class="print">
            <i class="fa-solid fa-print icons"></i>
            <p>PRINT</p>
            </div>

            <div class="shire">
            <i class="fa-solid fa-arrow-up-from-bracket icons"></i>
            <p>SHIRE</p>
            </div>
          </div>
        </div>
    `;

    document.title = `${video.title}`;

    const videoPlayer = document.getElementById("video-player");
    videoPlayer.innerHTML = `
      <source src="${video.src}" type="video/mp4">
    `;

    document.getElementById("nutrition-info").innerHTML = `
    <div class="nutrition-information">
    <div class="nutrition">
    <h3>Nutrition Information</h3>
    <div class="information">
    <div><p>Calories</p></div>
    <div><p>${video.Calories}</p></div>
    </div>

    <div class="information">
    <div><p>Protein</p></div>
    <div><p>${video.Protein}</p></div>
    </div>

    <div class="information">
    <div><p>Cholesterol</p></div>
    <div> <p> ${video.Carbohydrates}</p></div>
    </div>
    <div class="footer-information">
    <p>
    adipiscing elit, sed do eiusmod tempor <br/> 
    incididunt ut labore et dolore magna aliqua. 
    </p>
    </div>

    </div>
    </div>
    `;
  }
}
window.addEventListener("DOMContentLoaded", loadVideoDetails);

function atherVideo() {
  const vidioAther = document.getElementById("other-recipe");

  const videosArray = Object.values(videos);
  videosArray.sort(() => Math.random() - 0.5);
  const selectedVideos = videosArray.slice(0, 3);

  selectedVideos.forEach((videoItem) => {
    const recipeAtherVideo = document.createElement("div");
    recipeAtherVideo.classList.add("videoAther");
    recipeAtherVideo.innerHTML = `
    <div class="info">
    <div class="">
       <a href="recipes.html?id=${videoItem.id}" class="">
       <img src="${videoItem.img}" alt="${videoItem.title}" />
       </a>
    </div>
    <div class="info-to-video">
    <h4>${videoItem.title}</h4>
    <p><p>${videoItem.Type}</p></p>
    </div>
    </div>

    `;
    const link = recipeAtherVideo.querySelector("a");
    link.addEventListener("click", (e) => {
      e.preventDefault();
      sessionStorage.setItem("selectedVideo", JSON.stringify(videoItem));
      window.location.href = link.href;
    });
    vidioAther.appendChild(recipeAtherVideo);
  });
}
window.addEventListener("DOMContentLoaded", atherVideo);


function radioClick(hoverRadio) {
  const labels = document.querySelectorAll("label");
  labels.forEach((labels) => hoverRadio.classList.add("active-label"));
}
