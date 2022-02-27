const movies = [
  {
    id: 123,
    title: "Великий Гэтсби",
    poster: "https://st.kp.yandex.net/images/film_iphone/iphone360_463724.jpg"
  },
  {
    id: 234,
    title: "Дневник баскетболиста",
    poster: "https://www.kinopoisk.ru/images/film_big/6175.jpg"
  },
  {
    id: 175,
    title: "Авиатор",
    poster:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/9/9e/TheAviatorPoster.jpg/211px-TheAviatorPoster.jpg"
  },
  {
    id: 131,
    title: "Поймай меня, если сможешь",
    poster:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/e38dd6f9-610e-4c90-8540-dc48560cb9cc/360"
  },
  {
    id: 355,
    title: "Настоящий детектив",
    poster:
      "https://i.pinimg.com/originals/6f/51/73/6f5173a19bc4647296b4760df30ec681.jpg"
  },
  {
    id: 441,
    title: "Интерстеллар",
    poster: "https://upload.wikimedia.org/wikipedia/ru/c/c3/Interstellar_2014.jpg"
  },
  {
    id: 382,
    title: "Джентльмены",
    poster:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/637271d5-61b4-4e46-ac83-6d07494c7645/600x900"
  },
  {
    id: 501,
    title: "Начало",
    poster:
      "https://st.kp.yandex.net/im/poster/1/3/1/kinopoisk.ru-Inception-1310268.jpg"
  },
  {
    id: 662,
    title: "Выживший",
    poster: "https://www.kinobusiness.com/upload/resize_cache/iblock/f99/360_560_1/f9989a291d2bcf769afd0ee11bc4b70f.jpg"
  },
  {
    id: 431,
    title: "Тёмный рыцарь: Возрождение легенды",
    poster:
      "https://st.kp.yandex.net/im/poster/7/9/7/kinopoisk.ru-The-Dark-Knight-797796.jpg"
  }
];

const movieListTag = document.querySelector(".movie-list");
const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

function createMovie(movieData) {
  const articleTag = document.createElement("article");
  articleTag.classList.add("movie");

  const img = document.createElement("img");
  img.classList.add("movie__poster");
  img.src = movieData.poster;

  const titleTag = document.createElement("h1");
  titleTag.textContent = movieData.title;

  articleTag.append(img, titleTag);
  return articleTag;
}

movies.forEach((movie) => {
  movieListTag.append(createMovie(movie))
})

searchInput.oninput = () => {
  movieListTag.innerHTML = ""
  movies
  .filter((movie) => movie.title.toLowerCase().includes(searchInput.value.toLowerCase()))
  .forEach((movie) => {
    movieListTag.append(createMovie(movie))
  })
}
