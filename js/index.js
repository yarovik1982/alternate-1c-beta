
import { UserSetPositionNav } from "./modules/UserSetPositionNav.js";



UserSetPositionNav()


const setToggleMenu = () => {
  const lastItemList = document.querySelector(".setting-dropdown-item:last-child");
  let flag = false;

  function toggleMenu() {
    const menu = document.querySelector(".custom-position");
    if (!flag) {
      menu.classList.add("d-none");
      lastItemList.textContent = "Показать меню";
    } else {
      menu.classList.remove("d-none");
      lastItemList.textContent = "Скрыть меню";
    }
  }

  lastItemList.addEventListener("click", () => {
    toggleMenu();
    flag = !flag;
  });
};
setToggleMenu();
