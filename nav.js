const mobile_navOpen = document.querySelector(".open");
    const mobile_navClose = document.querySelector(".close");

    const nav = document.getElementById("navbar");

    

    mobile_navOpen.addEventListener("click", () =>{
      nav.classList.add("active");
      mobile_navOpen.style.display="none";
      mobile_navClose.style.display = "flex";
      document.body.style.overflow="hidden";
    });
    mobile_navClose.addEventListener("click", () => {
      nav.classList.remove("active");
      mobile_navOpen.style.display="flex"
      mobile_navClose.style.display = "none";
      document.body.style.overflow="auto";
    });