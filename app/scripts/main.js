function openMenu() {
  var menu = document.getElementById('mobile-menu-section')
    if (menu.style.height === '0px') {
        menu.style.height = "200px";
    } else {
        menu.style.height = "0px";
    }
};
