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
const arrayOfGalleryImages = [
  "bobers.jpg",
  "doctor.jpg"
]
;
let galleryImage = 0

document.getElementById("main-image").setAttribute('src',`img/gallery/${arrayOfGalleryImages[galleryImage]}`)

document.getElementById('right-arrow').addEventListener('click',()=>{
   galleryImage++
   console.log(galleryImage)

   if(galleryImage == arrayOfGalleryImages.length) galleryImage = 0

   document.getElementById("main-image").setAttribute('src',`img/gallery/${arrayOfGalleryImages[galleryImage]}`)
})

document.getElementById('left-arrow').addEventListener('click',()=>{
   galleryImage--
   console.log(galleryImage)

   if(galleryImage == -1) galleryImage = arrayOfGalleryImages.length - 1

   document.getElementById("main-image").setAttribute('src',`img/gallery/${arrayOfGalleryImages[galleryImage]}`)
})

const arrayOfVitamins = [
  {
     id:1,
     title:"Вітамін А",
     photo:"vitamin-a.png",
     description:"Вітамін А — група близьких за хімічною будовою речовин, яка включає ретиноїди: ретинол (вітамін A1, аксерофтол), дегідроретинол (вітамін А2), ретиналь (ретинен, альдегід вітаміну A1), ретиноєву кислоту і кілька провітамінів — каротиноїдів, серед яких найважливішим є β-каротин.",
     rating:4,
     type:"кристалічні"
  },
  {
     id:2,
     title:"Вітамін С",
     photo:"vitamin-c.png",
     description:"Аскорбíнова кислотá (лат. Ascorbic acid (BP, JP, USP)[1][2][3], лат. Acidum ascorbinicum (PhEur)[1], гамма-лактон 2,3-дегідро-L-гулонової кислоти, вітамін C) — відносно проста органічна кислота.",
     rating:3,
     type:"водорозчинні"
  },
  {
     id:3,
     title:"Вітамін D",
     photo:"",
     description:"",
     rating:5,
     type:""
  },
  {
     id:4,
     title:"Вітамін B3",
     photo:"",
     description:"",
     rating:5,
     type:""
  },
  {
     id:5,
     title:"Омега-3",
     photo:"",
     description:"",
     rating:3,
     type:""
  },
  {
     id:6,
     title:"Magnium-B6",
     photo:"",
     description:"",
     rating:3,
     type:""
  },
  
]

//console.log(arrayOfVitamins)


arrayOfVitamins.forEach((item,index) =>{
  //console.log("елемент №",index,item)

  let divVitamin = document.createElement('div')
  divVitamin.classList.add('vitamin')

  divVitamin.innerHTML = `
        <span>${item.id}</span>
        <h3>${item.title}</h3>
        <hr>
        <img src="img/vitamins/${item.photo}" alt="">
        <p>${item.description}</p>
        <span>${'💚'.repeat(item.rating)+'🤍'.repeat(5-item.rating)}</span>
        <p>${item.type}</p> 
     `
  document.getElementById("p-vitamins").appendChild(divVitamin)}) 


