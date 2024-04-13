//Function for all all modals
function setupModal(
  modalId,
  openModalId,
  closeModalId,
  sourceID,
  destinationID
) {
  const modal = document.getElementById(modalId);
  const openModal = document.getElementById(openModalId);
  const closeModal = document.getElementById(closeModalId);
  const switchModal = document.getElementById(sourceID);
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

    if (switchModal) {
      switchModal.addEventListener("click", (e) => {
        e.preventDefault();
        modal.close();
        const switchToModal = document.getElementById(destinationID);
        if (switchToModal) {
          switchToModal.showModal();
        }
      });
    }
  }
}

setupModal(
  "sign-up-modal",
  "get-started-menu",
  "sign-up-close",
  "sign-in-button",
  "sign-in-modal"
);

setupModal(
  "sign-in-modal",
  "sign-in-button",
  "sign-in-close",
  "sign-up-button",
  "sign-up-modal"
);

setupModal(
  "email-sign-in-modal",
  "open-gmail-sign-in",
  "sign-in-email-close",
  "all-sign-in-options",
  "sign-in-modal"
);

setupModal(
  "email-sign-up-modal",
  "open-gmail-sign-up",
  "sign-up-email-close",
  "all-sign-up-options",
  "sign-up-modal"
);

//Javascript code for changing the contents of tabs as the tab changes
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

    // Add a line underneath each tab
    var line = document.querySelector(".line");
    line.style.width = e.target.offsetWidth + "px";
    line.style.left = e.target.offsetLeft + "px";

    // Hide all articles
    allArticles.forEach((article) => {
      article.classList.remove("active");
    });

    // Show the corresponding article
    allArticles[index].classList.add("active");
  });
});

// Dropdown code
function dropdownList(dropdownClass, dropdownTrigger) {
  const commonAncestor = document.documentElement;

  commonAncestor.addEventListener("click", function (event) {
    const target = event.target;

    if (target.matches(dropdownTrigger)) {
      const dropdown = target.nextElementSibling;
      dropdown.classList.toggle("show");
    } else if (!target.closest("." + dropdownClass)) {
      const dropdowns = document.querySelectorAll("." + dropdownClass);
      dropdowns.forEach(function (dropdown) {
        dropdown.classList.remove("show");
      });
    }
  });
}

dropdownList("dropdown-content", ".dropdown-trigger");
dropdownList("dropdown-content2", ".dropdown-trigger2");
dropdownList("dot-dropdown-content", ".more-dropdown-trigger");

random = document.getElementById("searchInput");

//search results
function toggleSearch() {
  const container = document.getElementById("searchMobileContainer");

  if (container.style.display === "none") {
    container.style.display = "block";
    random.value = "review";
    console.log(random.value);
  } else {
    container.style.display = "none";
  }
}

document
  .getElementById("toggleSearchFunctionality")
  .addEventListener("click", toggleSearch);

// document.addEventListener("DOMContentLoaded", function () {

//   const allButtons = document.getElementById("toggleSearchFunctionality");
//   const searchBar = document.getElementById("searchMobileContainer");
//   const searchInput = document.getElementById("searchInput");
// });
