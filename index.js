// //Javascript code for changing the style of each tab
// const allTabs = document.querySelectorAll(".tab-button");
// const allArticle = document.querySelectorAll(".article-list");

// allTabs.forEach((tab, index) =>{

//     tab.addEventListener("click", (e)=>{

//         allTabs.forEach(tab=>{
//             tab.classList.remove("active-tab");});
//         tab.classList.add("active-tab");
//     })

//     allArticle.forEach(content =>{
//         content.classList.remove("active");
//     });
//     // allArticle[index].classList.add("active");
// })

// //Javascript code for changing the contents of tabs as the tab changes

const allTabs = document.querySelectorAll(".tab-button");
const allArticles = document.querySelectorAll(".article-list");

allTabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    // Remove "active-tab" class from all tabs
    allTabs.forEach((tab) => {
      tab.classList.remove("active-tab");
    });

    // Add "active-tab" class to the clicked tab
    tab.classList.add("active-tab");

    // Hide all articles
    allArticles.forEach((article) => {
      article.classList.remove("active");
    });

    // Show the corresponding article
    allArticles[index].classList.add("active");
  });
});

function myFunction() {
    document.getElementById("moreMenuDropdown").classList.toggle("show");
  }
  
  window.onclick = function (event) {
    if (!event.target.matches(".more-icon")) {
      var dropdowns = document.getElementsByClassName("more-menu-wrap");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
