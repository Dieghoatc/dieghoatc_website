interface MenuControlProps {
  toggleOn: HTMLElement;
  buttonTop: HTMLElement;
  buttonMiddle: HTMLElement;
  buttonGround: HTMLElement;
  showMenu: HTMLElement;
  portfolio: HTMLElement;
  resume: HTMLElement;
  aboutMe: HTMLElement;
  blog: HTMLElement;
  contact: HTMLElement;
  listMenu: HTMLElement;
}

export function burgerContol({
  toggleOn,
  buttonTop,
  buttonMiddle,
  buttonGround,
  showMenu,
  portfolio,
  resume,
  aboutMe,
  blog,
  contact,
  listMenu,
}: MenuControlProps) {
  let toggle = false;

  if (listMenu) {
    listMenu.addEventListener("click", () => {
      menuOff();
    });
  }

  function menuOn() {
    buttonTop.classList.add("button-top-on");
    buttonMiddle.classList.add("button-middle-on");
    buttonMiddle.classList.remove("button-middle-off");
    buttonGround.classList.add("button-ground-on");

    showMenu.classList.add("show-menu");
    showMenu.classList.remove("hidden-menu");

    portfolio.classList.add("deploy-portfolio");
    portfolio.classList.remove("contract-portfolio");

    resume.classList.add("deploy-resume");
    resume.classList.remove("contract-resume");

    aboutMe.classList.add("deploy-aboutme");
    aboutMe.classList.remove("contract-aboutme");

    blog.classList.add("deploy-blog");
    blog.classList.remove("contract-blog");

    contact.classList.add("deploy-contact");
    contact.classList.remove("contract-contact");
  }

  function menuOff() {
    buttonTop.classList.remove("button-top-on");
    buttonMiddle.classList.add("button-middle-off");
    buttonMiddle.classList.remove("button-middle-on");
    buttonGround.classList.remove("button-ground-on");

    showMenu.classList.remove("show-menu");
    showMenu.classList.add("hidden-menu");

    portfolio.classList.add("contract-portfolio");
    portfolio.classList.remove("deploy-portfolio");

    resume.classList.remove("deploy-resume");
    resume.classList.add("contract-resume");

    aboutMe.classList.remove("deploy-aboutme");
    aboutMe.classList.add("contract-aboutme");

    blog.classList.remove("deploy-blog");
    blog.classList.add("contract-blog");

    contact.classList.remove("deploy-contact");
    contact.classList.add("contract-contact");
  }

  toggleOn.addEventListener("click", () => {
    toggle = !toggle;

    if (toggle) {
      menuOn();
    } else {
      menuOff();
    }
  });
}
