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


const loadWord = async (lessonId) => {
  // hideLesson("word-container");
  const response = await fetch(
    `https://openapi.programming-hero.com/api/level/${lessonId}`,
  );
  const data = await response.json();

  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";
  displayWord(data.data);
};

const displayWord = async (words) => {
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";

  words.forEach((word) => {
    const wordDiv = document.createElement("div");
    wordDiv.innerHTML = `
  <div class="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center text-center space-y-4 border border-gray-100 h-full">
        <h2 class="text-3xl font-bold text-gray-800">${word.word}</h2>
        
        <div class="space-y-1">
          <p class="text-gray-500 font-medium">Meaning /Pronunciation</p>
          <p class="text-xl text-gray-700 font-semibold">"${word.meaning} / ${word.pronunciation}"</p>
        </div>

        <div class="flex justify-between w-full mt-6">
          <button class="details p-3 bg-blue-50 text-blue-500 rounded-lg hover:bg-blue-100 transition-colors btn">
            <img class = "w-4 h-4" src="./assets/info.png" alt="">
          </button>
          <button onclick="speak('${word.word}')" class="p-3 bg-blue-50 text-blue-500 rounded-lg hover:bg-blue-100 transition-colors btn">
          <img class = "w-4 h-4" src="./assets/speaker-filled-audio-tool.png" alt=""></button>
        </div>
      </div>
    `;
    wordContainer.appendChild(wordDiv);
  });
};

const loadDetails = async () => {
  const response = await fetch(``);
  const data = await response.json();
  console.log(data);
};

const learnBtnContainer = () => {
  const learnBtn = document.getElementById("learn");
  const learnSection = document.getElementById("learn-section");

  if (learnBtn && learnSection) {
    learnBtn.addEventListener("click", () => {
      learnSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
};

const fcqBtnContainer = () => {
  const fcqBtn = document.getElementById("fcq");
  const fcqSection = document.getElementById("fcq-section");

  if (fcqBtn && fcqSection) {
    fcqBtn.addEventListener("click", () => {
      fcqSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
};


const logoutBtnContainer = () => {
  const logoutBtn = document.getElementById("logout");
  const bannerSection = document.getElementById("banner-section");
  const contentContainer  = document.getElementById("content-container");
  const navContainer  = document.getElementById("nav-container");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {

        bannerSection.classList.remove("hidden")
        contentContainer.classList.add("hidden");
        navContainer.classList.add("hidden");

        bannerSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    });
  }
};


document.addEventListener("DOMContentLoaded", () => {
  loginBtnContainer();
  logoutBtnContainer();
  learnBtnContainer();
  fcqBtnContainer();
  loadLessonButton();
});