document.addEventListener("DOMContentLoaded", function () {
  // 遍歷所有的.star-rating 元素
  const starRatings = document.querySelectorAll(".star-rating");

  starRatings.forEach(function (starRating) {
    const score = parseInt(starRating.getAttribute("data-score"), 10);
    const stars = starRating.querySelectorAll(".star");

    for (let i = 0; i < stars.length; i++) {
      if (i < score) {
        stars[i].textContent = "kid_star"; // 使用你的填充星星圖標圖片
      } else {
        stars[i].textContent = ""; // 使用你的空星星圖標圖片
      }
    }
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const starRating = document.querySelector(".star-rating");
//   const score = parseInt(starRating.getAttribute("data-score"), 10);
//   const stars = starRating.querySelectorAll(".star");
//   console.log(stars);

//   for (let i = 0; i < stars.length; i++) {
//     if (i < score) {
//       stars[i].textContent = "kid_star"; /* 使用你的填充星星圖標圖片 */
//     } else {
//       stars[i].textContent = ''; /* 使用你的空星星圖標圖片 */
//     }
//   }
// });
// document.addEventListener("DOMContentLoaded", function () {
//   const starRating = document.getElementById("star-rating");
//   const score = parseInt(starRating.getAttribute("data-score"), 10);
//   const stars = starRating.getElementsByClassName("star");

//   for (let i = 0; i < stars.length; i++) {
//     if (i < score) {
//       stars[i].style.backgroundImage =
//         'url("https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png")'; /* 使用你的填充星星圖標圖片 */
//     } else {
//       stars[i].style.backgroundImage =
//         'url("https://e7.pngegg.com/pngimages/508/846/png-clipart-star-star-angle-triangle.png")'; /* 使用你的空星星圖標圖片 */
//     }
//   }
// });

let currentOpenMenu = null; // 用來追蹤當前開啟的選單

document.querySelectorAll(".dropdown__toggle").forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    // 避免事件冒泡，防止點擊選單內部時觸發按鈕事件
    event.stopPropagation();

    // 獲取點擊按鈕的下一個兄弟元素，即相對應的選單
    const dropdownContent = this.nextElementSibling;

    // 如果當前開啟的選單存在且不是點擊的選單，則關閉它
    if (currentOpenMenu && currentOpenMenu !== dropdownContent) {
      currentOpenMenu.style.display = "none";
    }

    // 切換選單的顯示狀態
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      currentOpenMenu = null; // 清除當前開啟的選單
    } else {
      dropdownContent.style.display = "block";
      currentOpenMenu = dropdownContent; // 設置當前開啟的選單
    }
  });
});

// 為了讓點擊到選單外部時能關閉所有選單，我們需要為文檔添加一個事件監聽器
document.addEventListener("click", function (event) {
  // 如果點擊的不是按鈕或選單，則關閉所有開啟的選單
  if (
    !event.target.matches(".dropdown__toggle") && !event.target.matches(".dropdown__menu *")
  ) {
    document.querySelectorAll(".dropdown__menu").forEach(function (content) {
      content.style.display = "none";
    });
    currentOpenMenu = null; // 清除當前開啟的選單
  }
});
