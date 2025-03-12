console.log('Scrip connected!');

const arrayOfLoveWishes = [
  "Міцного здоров'я та довгих років життя!",
  "Нехай кожен день буде сповнений енергії та сил!",
  "Бажаю тобі здоров'я, яке ніколи не підводить!",
  "Хай серце б'ється рівно, а тиск завжди буде нормальним!",
  "Міцного імунітету та чудового самопочуття!",
  "Нехай жодна хвороба не затьмарить твої дні!",
  "Сили, витримки та бадьорого настрою щодня!",
  "Хай здоров'я буде твоїм вірним супутником усе життя!",
  "Бажаю тобі завжди залишатися в тонусі та гарному настрої!",
  "Міцного сну, легкого пробудження та чудового дня!",
  "Бережи своє здоров'я, і воно віддячить тобі довголіттям!",
  "Нехай твоє тіло буде сильним, а дух – непохитним!",
  "Міцних нервів і гармонії в душі!",
  "Нехай твоє здоров'я буде таким же міцним, як твоя воля!",
  "Бажаю завжди бути в формі та повним життєвої енергії!",
  "Хай твоє серце б'ється тільки від радості!",
  "Легкості в тілі, ясності в голові та радості в серці!",
  "Бажаю здоров'я, що не знає меж!",
  "Щоб жоден вірус не мав шансів перед твоїм імунітетом!",
  "Нехай твоє здоров'я буде бездоганним, а життя – щасливим!"
];
document.getElementById('Wishes_btn').addEventListener('click', function() {
  // alert('Button clicked!');

  console.log('Button clicked!');

  let index = Math.floor(Math.random() * arrayOfLoveWishes.length);

  // console.log('Номер елементу масиву: ', index);

  document.getElementById('p_Wishes').innerText = arrayOfLoveWishes[index];
})

let countOfHearts = 5;
console.log('countOfHearts: ' + countOfHearts);

document.getElementById('heartsforwishes').innerText = '💊' .repeat(countOfHearts)

document.getElementById('Wishes_btn').addEventListener('click', ()=> { 
countOfHearts--;
console.log('countOfHearts: ' + countOfHearts);
document.getElementById('heartsforwishes').innerText = '💊' .repeat(countOfHearts) + '❌' .repeat(5-countOfHearts);

if (countOfHearts == 0) {
  document.getElementById('Wishes_btn').disabled = true;
  document.getElementById('Wishes_btn').style.display = 'true';
}
});

document.getElementById('btnbuyhearts').addEventListener('click', ()=> {

countOfHearts = 5;
document.getElementById('heartsforwishes').innerText = '💊' .repeat(countOfHearts);
document.getElementById('Wishes_btn').style.display = 'inline-block';
document.getElementById('p_wishes').innerText = '';

console.log('btnbuyhearts clicked!');
});
document.getElementById('changeBackgroundBtn').addEventListener('click', function() {

  document.body.style.backgroundImage = "url('img/background2.png')";
  console.log("Changing background to:", document.body.style.backgroundImage);
});
const images = [
  "img/doctor.jpg",
  "img/bobers.jpg",
  "img/pillllls.jpg"
];
let currentIndex = 0;

showImage(0)

function showImage(index) {
  const imgElement = document.getElementById('galleryImage');
  imgElement.src = images[index];
}

document.getElementById('leftArrow').addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
  showImage(currentIndex);
});

document.getElementById('rightArrow').addEventListener('click', () => {
  currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
  showImage(currentIndex);
});


