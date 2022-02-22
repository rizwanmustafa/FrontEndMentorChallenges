const desktopWidth: number = 769;

// Code for showing menu items
let lastOpenedMenu: HTMLDivElement = null;

const ShowMenu = (extendedMenu: HTMLDivElement) => {
  // Show the menu to users by setting the max height
  extendedMenu.style.maxHeight = extendedMenu.scrollHeight + "px";
  // Set the padding by javascript to ensure smooth transition for max-height
  extendedMenu.style.padding = "20px";
};

const HideMenu = (extendedMenu: HTMLDivElement) => {
  // Hide the menu from users by setting the max height to 0
  extendedMenu.style.maxHeight = "0";
  // Set the padding by javascript to ensure smooth transition for max-height
  extendedMenu.style.padding = " 0px";
};

document.querySelectorAll(".menuItm").forEach(menuItm => {
  // Add event listeners for each menu

  const extendedMenu: HTMLDivElement = menuItm.querySelector(".extendedMenu")

  if (screen.availWidth >= desktopWidth) {
    // Events for desktop that are triggered by hover

    menuItm.addEventListener("mouseenter", () => {
      // Show the menu to users by setting the max height
      menuItm.classList.add("active");
      ShowMenu(extendedMenu);
    });

    menuItm.addEventListener("mouseleave", () => {
      // Hide the menu from users by setting the max height to 0
      menuItm.classList.remove("active");
      HideMenu(extendedMenu);
    });
  }

  else {
    // Events for mobile that are triggered by click
    console.log("Hi There!")

    menuItm.querySelector(".menuTxt").addEventListener("click", () => {
      // Toggle the class
      menuItm.classList.toggle("active");

      if (menuItm.classList.contains("active")) {
        if (lastOpenedMenu) {
          HideMenu(lastOpenedMenu)
          lastOpenedMenu.parentElement.classList.remove("active")
        }
        ShowMenu(extendedMenu);
        lastOpenedMenu = extendedMenu;
      }
      else {
        HideMenu(extendedMenu);
        HideMenu(lastOpenedMenu);
        lastOpenedMenu.parentElement.classList.remove("active")
        lastOpenedMenu = null;
      }
    });
  }
});

// Code for showing menu in mobile
const menuToggler: HTMLDivElement = document.querySelector("#mobileMenuToggler");

menuToggler.addEventListener("click", () => {
  const outerMenuDiv: HTMLDivElement = document.querySelector("#outerMenuDiv");

  outerMenuDiv.classList.toggle("active");
  menuToggler.classList.toggle("active");

  if (outerMenuDiv.classList.contains("active")) {
    outerMenuDiv.style.maxHeight = "1000px";
    outerMenuDiv.style.padding = "20px 0px";
  }
  else {
    outerMenuDiv.style.maxHeight = "0";
    outerMenuDiv.style.padding = "0";
  }

});