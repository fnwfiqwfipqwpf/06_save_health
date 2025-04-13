console.log('Script connected!');

const arrayOfLoveWishes = [
  "Пий достатньо води щодня 💧",
  "Старайся спати не менше 7-8 годин 😴",
  "Їж більше овочів та фруктів 🥦🍎",
  "Рухайся хоча б 30 хвилин на день 🏃‍♂️",
  "Роби перерви під час навчання чи роботи 🧠",
  "Скороти вживання цукру та фастфуду 🍔🚫",
  "Не забувай про правильну поставу 🪑",
  "Виходь на свіже повітря щодня 🌳",
  "Регулярно провітрюй кімнату 🪟",
  "Мий руки з милом 🧼",
  "Захищай шкіру від сонця 🧴🌞",
  "Уникай стресу – дихай глибше 😌",
  "Не забувай про сніданок 🍽️",
  "Підтримуй гігієну тіла 🛁",
  "Проводь час із близькими 💞",
  "Слухай своє тіло – не ігноруй біль 🚨",
  "Регулярно обстежуйся у лікаря 🩺",
  "Обмежуй час перед екраном 🖥️📱",
  "Май хобі, яке приносить радість 🎨🎸",
  "Усміхайся частіше – це теж здоров’я 😊"
];

document.getElementById('Wishes_btn').addEventListener('click', function() {
  console.log('Button clicked!');
  let index = Math.floor(Math.random() * arrayOfLoveWishes.length);
  document.getElementById('p_Wishes').innerText = arrayOfLoveWishes[index];
});

let countOfHearts = 5;
console.log('countOfHearts: ' + countOfHearts);

document.getElementById('heartsforwishes').innerText = '💊'.repeat(countOfHearts);

const wishesBtn = document.getElementById('Wishes_btn');
const buyHeartsBtn = document.getElementById('btnbuyhearts');

wishesBtn.addEventListener('click', () => {
    if (countOfHearts > 0) {
        countOfHearts--;
        console.log('countOfHearts: ' + countOfHearts);
        document.getElementById('heartsforwishes').innerText = '💊'.repeat(countOfHearts) + '🤍'.repeat(5 - countOfHearts);
    }
    
    if (countOfHearts <= 0) {
        wishesBtn.disabled = true;
        wishesBtn.style.backgroundColor = 'grey';
        alert("Ліміт натискань досягнуто!");
    }
});

buyHeartsBtn.addEventListener('click', () => {
    countOfHearts = 5;
    document.getElementById('heartsforwishes').innerText = '💊'.repeat(countOfHearts);
    wishesBtn.disabled = false;
    wishesBtn.style.backgroundColor = '';
    document.getElementById('p_Wishes').innerText = '';
    document.getElementById('p_Wishes').style.backgroundColor = '';
    console.log('btnbuyhearts clicked!');
});

const images = [
  "images/pillllls.jpg",
  "images/bobers.jpg",
  "images/doctor.jpg"
];

let currentIndex = 0;
const photo = document.getElementById("photo2");
const prevBtn = document.getElementById("photo1");
const nextBtn = document.getElementById("photo3");

function updateImage(index) {
  photo.style.opacity = 0; // Затемнення перед зміною
  setTimeout(() => {
      photo.src = images[index];
      photo.style.opacity = 1; // Плавне повернення видимості
  }, 300);
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage(currentIndex);
});

fetch('./vitamins.json')
  .then(response => response.json())
  .then(data => {
    const vitaminsContainer = document.getElementById("p_vitamins");
    data.forEach(item => {
      let divVitamin = document.createElement("div");
      divVitamin.classList.add("vitamin");
      divVitamin.innerHTML = `
        <div style="text-align: center; margin-bottom: 20px;">
          <h3 style="font-size: 18px; margin-bottom: 10px;">${item.title}</h3>
          <p style="font-size: 14px; margin-bottom: 10px;">${item.description}</p>
          <img src="${item.image}" alt="Зображення вітаміну" style="width: 120px; height: 120px; object-fit: cover; display: block; margin: 0 auto;" onerror="this.onerror=null; this.src='images/default.jpg';">
          <button style="margin-top: 10px; font-size: 14px; padding: 5px 10px; cursor: pointer;" onclick="showFormula('${item.formula}')">Переглянути формулу</button>
        </div>
      `;
      vitaminsContainer.appendChild(divVitamin);
    });
  })
  .catch(error => console.error('Error fetching vitamins:', error));

// Функція для показу формули
function showFormula(formulaImage) {
  const modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.style.zIndex = "1000";

  const img = document.createElement("img");
  img.src = formulaImage;
  img.alt = "Формула вітаміну";
  img.style.width = "300px";
  img.style.height = "300px";
  img.style.objectFit = "contain";
  img.style.border = "2px solid white";

  const closeButton = document.createElement("button");
  closeButton.innerText = "Закрити";
  closeButton.style.position = "absolute";
  closeButton.style.top = "20px";
  closeButton.style.right = "20px";
  closeButton.style.padding = "10px 20px";
  closeButton.style.fontSize = "16px";
  closeButton.style.cursor = "pointer";
  closeButton.style.backgroundColor = "white";
  closeButton.style.border = "none";
  closeButton.style.borderRadius = "5px";

  closeButton.addEventListener("click", () => {
    document.body.removeChild(modal);
  });

  modal.appendChild(img);
  modal.appendChild(closeButton);
  document.body.appendChild(modal);
}

document.addEventListener("DOMContentLoaded", () => {
  const vitaminsContainer = document.getElementById("p_vitamins");

  arrayOfVitamins.forEach((item) => {
    let divVitamin = document.createElement("div");
    divVitamin.classList.add("vitamin");

    let title = document.createElement("h3");
    title.innerText = item.title;

    let description = document.createElement("p");
    description.innerText = item.description;

    let imgVitamin = document.createElement("img");
    imgVitamin.src = item.image;
    imgVitamin.alt = item.title + " вигляд";
    imgVitamin.style.width = "150px";

    let imgFormula = document.createElement("img");
    imgFormula.src = item.formulaImage;
    imgFormula.alt = item.title + " формула";
    imgFormula.style.width = "150px";

    let buyButton = document.createElement("button");
    buyButton.innerText = "Купити";
    buyButton.classList.add("buy-btn");
    buyButton.addEventListener("click", () => {
      alert(`Ти купив ${item.title}!`);
    });

    divVitamin.appendChild(title);
    divVitamin.appendChild(description);
    divVitamin.appendChild(imgVitamin);
    divVitamin.appendChild(imgFormula);
    divVitamin.appendChild(buyButton);

    vitaminsContainer.appendChild(divVitamin);
  });
});
