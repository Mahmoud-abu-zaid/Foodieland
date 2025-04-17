const articles = {
  wadeWarren: {
    imgArtcale: "/assets/img/image 26.png",
    title: "Crochet Projects for Noodle Lovers",
    description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
    clint: "Wade Warren",
    clintImg: "/assets/img/Ellipse 3.png",
    date: "12 November 2021",
  },
  robertFox: {
    imgArtcale: "/assets/img/image 26-1.png",
    title: "10 Vegetarian Recipes To Eat This Month",
    description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
    clint: "Robert Fox",
    clintImg: "/assets/img/Ellipse 2-1.png",
    date: "12 November 2021",
  },
  dianneRussell: {
    imgArtcale: "/assets/img/image 26-2.png",
    title: "Full Guide to Becoming a Professional Chef",
    description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
    clint: "Dianne Russell",
    clintImg: "/assets/img/Ellipse 2-2.png",
    date: "12 November 2021",
  },
  leslieAlexander: {
    imgArtcale: "/assets/img/image 26-3.png",
    title: "Simple & Delicious Vegetarian Lasagna",
    description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
    clint: "Leslie Alexander",
    clintImg: "/assets/img/Ellipse 2-3.png",
    date: "12 November 2021",
  },
  courtneyHenry: {
    imgArtcale: "/assets/img/image 26.png",
    title: "Plantain and Pinto Stew with Aji Verde",
    description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
    clint: "Courtney Henry",
    clintImg: "/assets/img/Ellipse 2-4.png",
    date: "12 November 2021",
  },
  albertFlores: {
    imgArtcale: "/assets/img/image 26-4.png",
    title: "We’re Hiring a Communications Assistant!",
    description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
    clint: "Albert Flores",
    clintImg: "/assets/img/Ellipse 2-5.png",
    date: "12 November 2021",
  },
};
function blogAndArtices() {
  const contentContainer = document.getElementById("artices");
  Object.values(articles).forEach((article) => {
    const content = document.createElement("div");
    content.classList.add("artice-items");
    content.innerHTML = `
      <div> 
        <div>
        <img src="${article.imgArtcale}" alt="${article.title}">
        </div>
        <div>
        <h2>${article.title}</h2>
        <p>${article.description}</p>
        <div>
        <img src="${article.clintImg}" alt=${article.clint}>
        <span>${article.clint}</span>
        </div>
        </div>
      </div>   
    `;
    contentContainer.appendChild(content);
  });
}
window.addEventListener("DOMContentLoaded", blogAndArtices);
