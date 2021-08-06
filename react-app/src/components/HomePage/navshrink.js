useEffect(() => {
    const navShrink = () => {

        if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
            document.querySelector(".navbar-container")?.classList.add("navbar-container_shrunk");
            document.querySelector(".navbar-element_logo")?.classList.add("navbar-element_logo_shrunk");
            document.querySelector(".navbar-element-sessionCont")?.classList.add("navbar-element-sessionCont_shrunk");
            document.querySelector(".navbar-button-container")?.classList.add("navbar-button-container_shrunk");

        } else if (document.body.scrollTop < 50 || document.documentElement.scrollTop < 50) {
            document.querySelector(".navbar-container")?.classList.remove("navbar-container_shrunk");
            document.querySelector(".navbar-element_logo")?.classList.remove("navbar-element_logo_shrunk");
            document.querySelector(".navbar-element-sessionCont")?.classList.remove("navbar-element-sessionCont_shrunk");
            document.querySelector(".navbar-button-container")?.classList.remove("navbar-button-container_shrunk");
        };
    };
    window.onscroll = function () { navShrink() };

})
