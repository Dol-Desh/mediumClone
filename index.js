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

//Function for all all modals
function setupModal(modalId, openModalId, closeModalId) {
  const modal = document.getElementById(modalId);
  const openModal = document.getElementById(openModalId);
  const closeModal = document.getElementById(closeModalId);
  const body = document.body;

  if (modal && openModal && closeModal) {
    openModal.addEventListener("click", (e) => {
      e.preventDefault();
      modal.showModal();
      body.classList.add("no-scroll");
    });

    closeModal.addEventListener("click", (e) => {
      e.preventDefault();
      modal.close();
      body.classList.remove("no-scroll");
    });
  }
}

setupModal("get-started-modal", "get-started-menu", "get-started-close");


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

//dropdown code
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

//sticky headr
// const tabNavigation = document.getElementById("#tab-navigation");
// const scrollWatcher = document.createElement("div");

// scrollWatcher.setAttribute("data-scroll-watcher", "");
// tabNavigation.before(scrollWatcher);

// const navObserver = new IntersectionObserver((entries) => {
//   tabNavigation.classList.toggle("sticking", !entries[0].isIntersecting);
// }, {rootMargin: "200px 0px 0px 0px"});

// navObserver.observe(scrollWatcher);
