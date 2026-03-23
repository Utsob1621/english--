const loginBtnContainer = () => {
  const loginBtn = document.getElementById("get-start");
  const bannerSection = document.getElementById("banner-section");
  const contentContainer  = document.getElementById("content-container");
  const navContainer  = document.getElementById("nav-container");
  const inputPassword = document.getElementById("password")

  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      const inputP = inputPassword.value;

      if(inputP === "123456"){
        bannerSection.classList.add("hidden");

        contentContainer.classList.remove("hidden");
        navContainer.classList.remove("hidden");

        bannerSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      inputPassword.value = "";
      }
      else{
        alert("ভুল পাসওয়ার্ড! সঠিক পাসওয়ার্ড দিন।");
      }
    });
  }
};

