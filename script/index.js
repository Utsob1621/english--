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

const loadLessonButton = async () => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/levels/all`,
  );
  const data = await response.json();
  displayLesson(data.data);
};

const displayLesson = (lessons) => {
  lessons.forEach((lesson) => {
    const lessonsBtnsContainer = document.getElementById(
      "lessons-btns-container",
    );
    const lessonDiv = document.createElement("div");
    lessonDiv.innerHTML = `
        <button onclick = loadWord('${lesson.level_no}') class = "btn text-[#00BCFF] hover:bg-[#00BCFF] hover:text-white border-2 border-[#00BCFF]">
        <img src="./assets/fa-book-open.png" alt=""> Lesson-${lesson.level_no}</button>
      `;
    lessonsBtnsContainer.appendChild(lessonDiv);
  });
};


