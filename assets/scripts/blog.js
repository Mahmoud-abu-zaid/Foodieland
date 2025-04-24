const articles = {
  wadeWarren: {
    id: "wadeWarren",
    imgArtcale: "/assets/img/image 26.png",
    title: "Crochet Projects for Noodle Lovers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed <br/> velit a faucibus. In feugiat vestibulum velit vel pulvinar.",
    clint: "Wade Warren",
    clintImg: "/assets/img/Ellipse 3.png",
    date: "12 November 2021",
  },
  robertFox: {
    id: "robertFox",
    imgArtcale: "/assets/img/image 26-1.png",
    title: "10 Vegetarian Recipes To Eat This Month",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed <br/> velit a faucibus. In feugiat vestibulum velit vel pulvinar.",
    clint: "Robert Fox",
    clintImg: "/assets/img/Ellipse 2-1.png",
    date: "12 November 2021",
  },
  dianneRussell: {
    id: "dianneRussell",
    imgArtcale: "/assets/img/image 26-2.png",
    title: "Full Guide to Becoming a Professional Chef",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed <br/> velit a faucibus. In feugiat vestibulum velit vel pulvinar.",
    clint: "Dianne Russell",
    clintImg: "/assets/img/Ellipse 2-2.png",
    date: "12 November 2021",
  },
  leslieAlexander: {
    id: "leslieAlexander",
    imgArtcale: "/assets/img/image 26-3.png",
    title: "Simple & Delicious Vegetarian Lasagna",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed <br/> velit a faucibus. In feugiat vestibulum velit vel pulvinar.",
    clint: "Leslie Alexander",
    clintImg: "/assets/img/Ellipse 2-3.png",
    date: "12 November 2021",
  },
  courtneyHenry: {
    id: "courtneyHenry",
    imgArtcale: "/assets/img/image 26.png",
    title: "Plantain and Pinto Stew with Aji Verde",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed <br/> velit a faucibus. In feugiat vestibulum velit vel pulvinar.",
    clint: "Courtney Henry",
    clintImg: "/assets/img/Ellipse 2-4.png",
    date: "12 November 2021",
  },
  albertFlores: {
    id: "albertFlores",
    imgArtcale: "/assets/img/image 26-4.png",
    title: "We’re Hiring a Communications Assistant!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed <br/> velit a faucibus. In feugiat vestibulum velit vel pulvinar.",
    clint: "Albert Flores",
    clintImg: "/assets/img/Ellipse 2-5.png",
    date: "12 November 2021",
  },
};

function blogAndArtices(data = Object.values(articles)) {
  const contentContainer = document.getElementById("artices");
  contentContainer.innerHTML = ""; // مسح المحتوى الحالي قبل العرض

  if (data.length === 0) {
    contentContainer.innerHTML = "<p class='not-found-search'>Search not found.</p>";
    return;
  }

  data.forEach((article) => {
    const content = document.createElement("div");
    content.classList.add("artice-items");

    content.innerHTML = `
      <div class="img-article">
        <a href="blog-post.html?id=${article.id}">
          <img src="${article.imgArtcale}" alt="${article.title}">
        </a>
      </div>
      <div class="info"> 
        <h2>${article.title}</h2>
        <p>${article.description}</p>
        <div class="info-clint">
          <div class="clint">
            <img src="${article.clintImg}" alt=${article.clint}>
            <span>${article.clint}</span>
            <span class="date-article">${article.date}</span>
          </div>
        </div>
      </div> 
    `;

    const link = content.querySelector("a");
    link.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.setItem("selectedPost", JSON.stringify(article));
      window.location.href = link.href;
    });

    contentContainer.appendChild(content);
  });
}

window.addEventListener("DOMContentLoaded", () => blogAndArtices());

function handleSearch() {
  const searchInput = document.getElementById("searchInput");
  const filter = searchInput.value.toLowerCase();

  const filtered = Object.values(articles).filter((item) => item.title.toLowerCase().includes(filter) || item.clint.toLowerCase().includes(filter));

  blogAndArtices(filtered);
}
