/* Change the Style of the Navigation on Scroll */
document.addEventListener("scroll", () => {
  var navigation = document.getElementById("navigation");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navigation.classList.add("navigation-bar");
  } else {
    navigation.classList.remove("navigation-bar");
  }
});

/* Remove Anchor Tag from URL */
window.addEventListener("hashchange", () => {
  var address = window.location.toString();
  var clean = address.substring(0, address.indexOf("#"));
  history.replaceState(null, "", clean);
});

/* Mobile Navigation: Close Menu on Click of Menu Item */
var i = 0;
var menuItemTexts = document.getElementsByClassName("menu-item-text");
var menuToggle = document.getElementById("menu-toggle");
for (i = 0; i < menuItemTexts.length; i++) {
  menuItemTexts[i].addEventListener("click", () => {
    menuToggle.checked = false;
  });
}
