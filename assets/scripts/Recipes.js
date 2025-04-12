function loadVideoDetails() {
  const savedVideo = sessionStorage.getItem("selectedVideo");

  if (savedVideo) {
    const video = JSON.parse(savedVideo);

    document.getElementById("detail-title").textContent = video.title;
    document.title = `${video.title}`;
    const videoPlayer = document.getElementById("video-player");
    videoPlayer.innerHTML = `
      <source src="${video.src}" type="video/mp4">
    `;

    document.getElementById("nutrition-info").innerHTML = `
      <div><strong>النوع:</strong> ${video.Type}</div>
      <div><strong>التحضير:</strong> ${video.prepTime}</div>
      <div><strong>الطهي:</strong> ${video.cookTime}</div>
      <div><strong>السعرات:</strong> ${video.Calories}</div>
      <div><strong>البروتين:</strong> ${video.Protein}</div>
      <div><strong>الكربوهيدرات:</strong> ${video.Carbohydrates}</div>
    `;
  }
  
}

window.addEventListener("DOMContentLoaded", loadVideoDetails);
