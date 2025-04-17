document.querySelector(".menu-button").addEventListener("click", function () {
  const dropdown = document.getElementById("dropdown-content");
  dropdown.classList.toggle("show");
});
const videos = {
  burger: {
    id: "burger",
    src: "/assets/videos/AI Burger Commercial.mp4",
    img: "/assets/img/image 28 .png",
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    Type: "Meat",
    prepTime: "25 Seconds",
    cookTime: "20 Minutes",
    Calories: "500",
    totalFat: "25g",
    SaturatedFat: "10g",
    Protein: "30g",
    Carbohydrates: "40g",
    cholesterol: "80mg",
  },
  fish: {
    id: "fish",
    src: "/assets/videos/Mures Tasmania_ Wholesale Fresh Fish advertisement 2012.mp4",
    img: "/assets/img/image 27 (1).png",
    title: "Fresh Lime Roasted Salmon with Ginger Sauce",
    Type: "Fish",
    prepTime: "15 Seconds",
    cookTime: "20 minutes",
    Calories: "500",
    totalFat: "25g",
    SaturatedFat: "10g",
    Protein: "30g",
    Carbohydrates: "40g",
    cholesterol: "80mg",
  },
  strawberry: {
    id: "strawberry",
    src: "/assets/videos/AI Burger Commercial.mp4",
    img: "/assets/img/image 30 (1).png",
    title: "Strawberry Oatmeal Pancake with Honey Syrup",
    Type: "Breakfast",
    prepTime: "16 Seconds",
    cookTime: "20 minutes",
    Calories: "500",
    totalFat: "25g",
    SaturatedFat: "10g",
    Protein: "30g",
    Carbohydrates: "40g",
    cholesterol: "80mg",
  },
  salad: {
    id: "salad",
    src: "/assets/videos/How to Make a Garden Salad.mp4",
    img: "/assets/img/image 26-1.png",
    title: "Fresh and Healthy Mixed Mayonnaise Salad",
    Type: "Healthy",
    prepTime: "33 Seconds",
    cookTime: "20 minutes",
    Calories: "500",
    totalFat: "25g",
    SaturatedFat: "10g",
    Protein: "30g",
    Carbohydrates: "40g",
    cholesterol: "80mg",
  },
  meatballs: {
    id: "meatballs",
    src: "/assets/videos/My Video1.mp4",
    img: "/assets/img/image 30 (2).png",
    title: "Chicken Meatballs with Cream Cheese",
    Type: "Meat",
    prepTime: "4 Seconds",
    cookTime: "20 minutes",
    Calories: "500",
    totalFat: "25g",
    SaturatedFat: "10g",
    Protein: "30g",
    Carbohydrates: "40g",
    cholesterol: "80mg",
  },

  fruity: {
    id: "fruity",
    src: "/assets/videos/How to Make Orange & Ricotta Pancakes _ Woolworths.mp4",
    img: "/assets/img/image 30.png",
    title: "Fruity Pancake with Orange & Blueberry",
    Type: "Sweet",
    prepTime: "15 Seconds",
    cookTime: "20 minutes",
    Calories: "500",
    totalFat: "25g",
    SaturatedFat: "10g",
    Protein: "30g",
    Carbohydrates: "40g",
    cholesterol: "80mg",
  },
  chickenandRice: {
    id: "chickenandRice",
    src: "/assets/videos/My Video7.mp4",
    img: "/assets/img/image 30 (3).png",
    title: "The Best Easy One Pot Chicken and Rice",
    Type: "Snack",
    prepTime: "7 Seconds",
    cookTime: "20 minutes",
    Calories: "500",
    totalFat: "25g",
    SaturatedFat: "10g",
    Protein: "30g",
    Carbohydrates: "40g",
    cholesterol: "80mg",
  },
  pasta: {
    id: "pasta",
    src: "/assets/videos/My Video4.mp4",
    img: "/assets/img/image 26-5.png",
    title: "The Creamiest Creamy Chicken and Bacon Pasta",
    Type: "Noodles",
    prepTime: "7 Seconds",
    cookTime: "20 minutes",
    Calories: "500",
    totalFat: "25g",
    SaturatedFat: "10g",
    Protein: "30g",
    Carbohydrates: "40g",
    cholesterol: "80mg",
  },
};
function video() {
  const contentContainer = document.getElementById("Link-video");
  Object.values(videos).forEach((video) => {
    const div = document.createElement("div");
    div.classList.add("video-item");
    div.innerHTML = `
       <div class="content">
        <div class="img-link-video">
          <a href="recipes.html?id=${video.id}" class="video-thumbnail">
            <img src="${video.img}" alt="${video.title}" />
          </a>
          <h3>${video.title}</h3>
          <div class="type-time">
            <div>
              <i class="fa-solid fa-clock"></i>
              <span>${video.prepTime}</span>
            </div>
            <div>
              <i class="fa-solid fa-utensils"></i>
              <span>${video.Type}</span>
            </div>
          </div>
        </div>
      </div>
      `;

    const link = div.querySelector("a");
    link.addEventListener("click", (e) => {
      e.preventDefault();
      sessionStorage.setItem("selectedVideo", JSON.stringify(video));
      window.location.href = link.href;
    });
    contentContainer.appendChild(div);

    
    document.getElementById("chicked-video").addEventListener("click", function (e) {
      e.preventDefault();
      const chickedVideo = sessionStorage.getItem("video");
      if (!chickedVideo) {
        document.getElementById("recipes").scrollIntoView({
          behavior: "smooth",
        });
      } else {
        window.location.href = "video.html?id=" + JSON.parse(chickedVideo).id;
      }
    });
  });
}

window.addEventListener("DOMContentLoaded", video);

function scrollToRecipes() {
  const viewRecipes = document.getElementById("recipes");
  if (viewRecipes) {
    viewRecipes.scrollIntoView({ behavior: "smooth" });
  }
}
