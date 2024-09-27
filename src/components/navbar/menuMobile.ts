interface MenuControlProps {
  toggleOn: HTMLElement;
  buttonTop: HTMLElement;
  buttonMiddle: HTMLElement;
  buttonGround: HTMLElement;
  showMenu: HTMLElement;
  deployPortfolio: HTMLElement;
  deployResume: HTMLElement;
  deployAboutMe: HTMLElement;
  deployBlog: HTMLElement;
  deployContact: HTMLElement;
}

export function burgerContol({
  toggleOn,
  buttonTop,
  buttonMiddle,
  buttonGround,
  showMenu,
  deployPortfolio,
  deployResume,
  deployAboutMe,
  deployBlog,
  deployContact,
}: MenuControlProps) {
  let toggle = false;

  toggleOn.addEventListener("click", () => {
    toggle = !toggle;

    console.log("buenas");

    if (toggle) {
      buttonTop.classList.add("button-top-on");
      buttonMiddle.classList.add("button-middle-on");
      buttonMiddle.classList.remove("button-middle-off");
      buttonGround.classList.add("button-ground-on");

      showMenu.classList.add("show-menu");
      showMenu.classList.remove("hidden-menu");

      deployPortfolio.classList.add("deploy-portfolio");
      deployPortfolio.classList.remove("contract-portfolio");

      deployResume.classList.add("deploy-resume");
      deployResume.classList.remove("contract-resume");

      deployAboutMe.classList.add("deploy-aboutme");
      deployAboutMe.classList.remove("contract-aboutme");

      deployBlog.classList.add("deploy-blog");
      deployBlog.classList.remove("contract-blog");

      deployContact.classList.add("deploy-contact");
      deployContact.classList.remove("contract-contact");
    } else {
      buttonTop.classList.remove("button-top-on");
      buttonMiddle.classList.add("button-middle-off");
      buttonMiddle.classList.remove("button-middle-on");
      buttonGround.classList.remove("button-ground-on");

      showMenu.classList.remove("show-menu");
      showMenu.classList.add("hidden-menu");

      deployPortfolio.classList.add("contract-portfolio");
      deployPortfolio.classList.remove("deploy-portfolio");

      deployResume.classList.remove("deploy-resume");
      deployResume.classList.add("contract-resume");

      deployAboutMe.classList.remove("deploy-aboutme");
      deployAboutMe.classList.add("contract-aboutme");

      deployBlog.classList.remove("deploy-blog");
      deployBlog.classList.add("contract-blog");

      deployContact.classList.remove("deploy-contact");
      deployContact.classList.add("contract-contact");
    }
  });
}
