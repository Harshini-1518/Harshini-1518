console.log("AJIO Clone loaded");
document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll("header nav ul li");
  navItems.forEach((item) => {
    const submenu = item.querySelector(".submenu");
    item.addEventListener("mouseenter", function () {
      item.style.backgroundColor = "#f2f2f2";
      item.style.cursor = "pointer";
      if (submenu) {
        submenu.style.display = "block";
      }
    });
    item.addEventListener("mouseleave", function () {
      item.style.backgroundColor = "";
      if (submenu) {
        submenu.style.display = "none";
      }
    });
  });
});
(function() {
  const offerPopup = document.getElementById("offerPopup");
  const closeOffer = document.getElementById("closeOffer");
  const shopNow = document.getElementById("shopNowBtn");

  
  window.addEventListener("load", () => {
    setTimeout(() => {
      offerPopup.style.display = "block";
    }, 5000);
  });

  closeOffer.addEventListener("click", () => {
    offerPopup.style.display = "none";
  });

  shopNow.addEventListener("click", () => {
    offerPopup.style.display = "none";
  
  });

  window.addEventListener("click", e => {
    if (e.target === offerPopup) {
      offerPopup.style.display = "none";
    }
  });
})();
