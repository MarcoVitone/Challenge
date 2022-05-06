const handleTrailers = async () => {
  const trailerBackground = document.getElementById("background");
  let id = "";
  try {
    const respose = await axios.get(
      "https://imdb-api.com/en/API/ComingSoon/k_iqskuj22"
    );
    const data = await respose.data;
    id = data.items[0].id;
    for (let i = 0; i < 4; i++) {
      document.getElementById(
        `Title-${i + 1}`
      ).innerHTML = `${data.items[i].title}`;
      document.getElementById(`poster-${i + 1}`).src = `${data.items[i].image}`;
      console.log(data.items[i].image);
    }
    const setBackground = async () => {
      try {
        const respose = await axios.get(
          `https://imdb-api.com/en/API/Trailer/k_iqskuj22/${id}`
        );
        const data = await respose.data;
        trailerBackground.style.backgroundImage = `url("${data.thumbnailUrl}")`;
      } catch (error) {
        console.log(error);
      }
    };
    setBackground();
  } catch (error) {
    console.log(error);
  }
};
handleTrailers();

const inTheatreHandler = async () => {
  try {
    const respose = await axios.get(
      "https://imdb-api.com/en/API/InTheaters/k_iqskuj22"
    );
    const data = await respose.data;
    console.log(data);
    data.items.map((value) => {
      const movie = document.getElementById("pippo");
      const card = document.createElement("div");
      card.className = "container-main-explore-cinema-movie-card";
      // Create Image poster
      const cardImg = document.createElement("div");
      cardImg.className = "container-main-explore-cinema-movie-card-img";
      const img = document.createElement("img");
      movie.appendChild(card);
      card.appendChild(cardImg);
      cardImg.appendChild(img);
      img.src = value.image;
      const bookmark = document.createElement("i");
      bookmark.className = "fa-solid fa-bookmark";
      const plus = document.createElement("i");
      plus.className = "fa-solid fa-plus";
      bookmark.appendChild(plus);
      cardImg.appendChild(bookmark);
      //create description part
      const description = document.createElement("div");
      description.className =
        "container-main-explore-cinema-movie-card-description";
      card.appendChild(description);
      //create rating
      const rating = document.createElement("div");
      rating.className =
        "container-main-explore-cinema-movie-card-description-rating";
      description.appendChild(rating);
      const spanRating = document.createElement("span");
      const solidStar = document.createElement("i");
      solidStar.className = "fa-solid fa-star";
      spanRating.appendChild(solidStar);
      const ratingVote = document.createElement("p");
      ratingVote.innerHTML = "6.5";
      spanRating.appendChild(ratingVote);
      rating.appendChild(spanRating);
      const starButton = document.createElement("button");
      const regularStar = document.createElement("i");
      regularStar.className = "fa-regular fa-star";
      starButton.appendChild(regularStar);
      rating.appendChild(starButton);
      // create film title
      const title = document.createElement("div");
      title.className =
        "container-main-explore-cinema-movie-card-description-title";
      description.appendChild(title);
      const filmTitle = document.createElement("h3");
      filmTitle.innerHTML = value.title;
      title.appendChild(filmTitle);
      //create cinema ticket
      const cinema = document.createElement("div");
      cinema.className =
        "container-main-explore-cinema-movie-card-description-cinema";
      description.appendChild(cinema);
      const cinemaLink = document.createElement("a");
      cinema.appendChild(cinemaLink);
      const ticket = document.createElement("i");
      ticket.className = "fa-solid fa-ticket-simple";
      cinemaLink.appendChild(ticket);
      cinemaLink.appendChild(document.createTextNode(" Orari degli spett..."));
      const cinemaTrailer = document.createElement("div");
      cinemaTrailer.className =
        "container-main-explore-cinema-movie-card-description-trailer";
      description.appendChild(cinemaTrailer);
      const trailerLink = document.createElement("a");
      cinemaTrailer.appendChild(trailerLink);
      const play = document.createElement("i");
      play.className = "fa-solid fa-play";
      trailerLink.appendChild(play);

      return;
    });
  } catch (error) {
    console.log(error);
  }
};
inTheatreHandler();

const boxOffice = async () => {
  try {
    const response = await axios.get(
      "https://imdb-api.com/en/API/BoxOffice/k_iqskuj22"
    );
    const data = await response.data.items;

    const left = document.getElementById("left");

    for (let i = 0; i < 3; i++) {
      const movie = document.createElement("div");
      movie.className =
        "container-main-explore-bestBoxOffice-movies-left-movie";
      left.appendChild(movie);
      const position = document.createElement("div");
      position.className =
        "container-main-explore-bestBoxOffice-movies-left-movie-position";
      position.innerHTML = `<h3>${data[i].rank}</h3>`;
      movie.appendChild(position);
      const add = document.createElement("div");
      add.className =
        "container-main-explore-bestBoxOffice-movies-left-movie-add";
      movie.appendChild(add);
      const bookmark = document.createElement("i");
      bookmark.className = "fa-solid fa-bookmark";
      const plus = document.createElement("i");
      plus.className = "fa-solid fa-plus";
      bookmark.appendChild(plus);
      add.appendChild(bookmark);
      const title = document.createElement("div");
      movie.appendChild(title);
      title.className =
        "container-main-explore-bestBoxOffice-movies-left-movie-title";
      const movieTitle = document.createElement("h3");
      movieTitle.innerHTML = data[i].title;
      title.appendChild(movieTitle);
      const money = document.createElement("p");
      money.innerHTML = data[i].weekend;
      title.appendChild(money);
      const ticket = document.createElement("div");
      ticket.className =
        "container-main-explore-bestBoxOffice-movies-left-movie-ticket";
      movie.appendChild(ticket);
      const ticketFont = document.createElement("i");
      ticketFont.className = "fa-solid fa-ticket-simple";
      ticket.appendChild(ticketFont);
    }

    const right = document.getElementById("right");

    for (let i = 3; i < 6; i++) {
      const movie = document.createElement("div");
      movie.className =
        "container-main-explore-bestBoxOffice-movies-right-movie";
      right.appendChild(movie);
      const position = document.createElement("div");
      position.className =
        "container-main-explore-bestBoxOffice-movies-right-movie-position";
      position.innerHTML = `<h3>${data[i].rank}</h3>`;
      movie.appendChild(position);
      const add = document.createElement("div");
      add.className =
        "container-main-explore-bestBoxOffice-movies-right-movie-add";
      movie.appendChild(add);
      const bookmark = document.createElement("i");
      bookmark.className = "fa-solid fa-bookmark";
      const plus = document.createElement("i");
      plus.className = "fa-solid fa-plus";
      bookmark.appendChild(plus);
      add.appendChild(bookmark);
      const title = document.createElement("div");
      movie.appendChild(title);
      title.className =
        "container-main-explore-bestBoxOffice-movies-right-movie-title";
      const movieTitle = document.createElement("h3");
      movieTitle.innerHTML = data[i].title;
      title.appendChild(movieTitle);
      const money = document.createElement("p");
      money.innerHTML = data[i].weekend;
      title.appendChild(money);
      const ticket = document.createElement("div");
      ticket.className =
        "container-main-explore-bestBoxOffice-movies-right-movie-ticket";
      movie.appendChild(ticket);
      const ticketFont = document.createElement("i");
      ticketFont.className = "fa-solid fa-ticket-simple";
      ticket.appendChild(ticketFont);
    }
  } catch (error) {
    console.log(error);
  }
};

boxOffice();

const comingSoon = async () => {
  const response = await axios.get(
    "https://imdb-api.com/en/API/ComingSoon/k_iqskuj22"
  );
  const data = response.data.items;

  document.getElementById("date-1").innerHTML = data[0].releaseState;
  document.getElementById("date-2").innerHTML = data[1].releaseState;
  document.getElementById("date-3").innerHTML = data[2].releaseState;
  document.getElementById("title-1").innerHTML = data[0].title;
  document.getElementById("title-2").innerHTML = data[1].title;
  document.getElementById("title-3").innerHTML = data[2].title;

  const ids = [data[0].id, data[1].id, data[2].id];
  const image = async () => {
    try {
      for (let i = 0; i < ids.length; i++) {
        const response = await axios.get(
          `https://imdb-api.com/en/API/Trailer/k_iqskuj22/${ids[i]}`
        );
        const data = await response.data;
        document.getElementById(`img-${i + 1}`).src = data.thumbnailUrl;
        document.getElementById(`img-${i + 1}`).src = data.thumbnailUrl;
        document.getElementById(`img-${i + 1}`).src = data.thumbnailUrl;
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  image();
};

comingSoon();
