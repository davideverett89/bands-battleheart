const membersCards = [
  {
    image: "https://images.pexels.com/photos/2614942/pexels-photo-2614942.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    alt: "Drummer playing the drums",
    name: "Tommy O'Connor",
    bandRole: "Drums",
    age: 50,
    personalBio: "Tommy is one of the original founders of Battleheart. He has loved music since before he was born. His mother loves to tell stories of how Tommy-in-the-womb would do tumbles for hours when she was around music with a good beat! Tommy inherited his love of music not only from his parents but also his grandfather who played guitar (and the bagpipes!) for The New Jersey Elves in the 50s-60s. He proudly continues the musical tradition of his Irish family and hopes to pass it on to this offspring one day. "
  },
  {
    image: "https://images.pexels.com/photos/1735240/pexels-photo-1735240.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    alt: "female guitarist",
    name: "Musique",
    bandRole: "Guitar & vocals",
    age: 35,
    personalBio: "Musique has enjoyed singing since the age of 4 when she started presenting Christmas concerts at her family's get-togethers. She has studied music with Nadia Voltna and Michelle Mastery at the New York Conservatory where she graduated with honors in 2010. Musique has made a name for herself since her high school band Renaissance Gals auditioned on America's Got Talent. She continues to play with Renaissance Gals as well as Battleheart and enjoys the variety of opportunities each band brings. She is the newest member of Battleheart."
  },
  {
    image: "https://images.pexels.com/photos/167579/pexels-photo-167579.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    alt: "Guitarist in mosh pit",
    name: "Luke Stavros",
    bandRole: "Electric guitar",
    age: 48,
    personalBio: "Luke grew up in New Jersey and always loved music. Started guitar lessons after school in elementary school and hasn't stopped. Other bands he has been a member of are Rocky & Slimy and The Terrible 5. "
  },
  {
    image: "https://images.pexels.com/photos/3651845/pexels-photo-3651845.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    alt: "keyboard player resting head on keyboard",
    name: "Paul Marcioni",
    bandRole: "Keyboard",
    age: 38,
    personalBio: "Paul has been playing piano since high school when the girl he liked (at the time) confessed she loved to sing but could never find a good piano accompanist. He threw himself into learning how to play piano and became that accompanist for about 5 short months. Thankfully, his love of piano and keyboard has outlasted that early relationship. He plays out at a number of venues in the area as Piano Paul."
  },
  {
    image: "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    alt: "Guitarist playing and singing",
    name: "Milan Freemont",
    bandRole: "Electric guitar & vocals",
    age: 47,
    personalBio: "Milan was inspired to love and dedicate himself tolearn how to play guitar by Eric Clapton. Clapton's albums were the soundtrack of Milan's high school in a  dirty New Jersey high school that was fortunately brimming with a love of the arts and opportunities to perform and discover and develop one's talents. Milan met Luke and Tommy in high school, and Battleheart was born. The rest is history."
  }
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const bioCards = (list) => {
    let domString = "";
    for (i=0; i<list.length; i++) { 
          domString += '<div class="col-md-6 col-lg-4 mb-5">';  
              domString += '<div class="flip-card">';
                domString += '<div class="flip-card-inner">';
                  domString += '<div class="flip-card-front">';
                    domString += `<img src="${membersCards[i].image}" alt="${membersCards[i].alt}" style="width:300px;height:300px;">`;
                  domString += '</div>';
                  domString += '<div class="flip-card-back">';
                    domString += `<h2>${membersCards[i].name}</h2>`;
                    domString += `<h3>${membersCards[i].bandRole}, ${membersCards[i].age}</h3>`;
                    domString += `<p class="ars-bio"><small>${membersCards[i].personalBio}</small></p>`;
                  domString += '</div>';
                domString += '</div>';
              domString += '</div>';
          domString += '</div>';
  };
  printToDom("biographyContainer", domString)
};

const tourDates = [
  {
    date: 'Fri May 1',
    venue: 'Lambo Festival 2020',
    cityState: 'Atlanta, GA. USA',
  },
  {
    date: 'Mon June 10',
    venue: ' Summer Fest 2020',
    cityState: 'Chicago, IL. USA',
  },
  {
    date: 'Wed June 24',
    venue: 'The Rainbow Festival 2020',
    cityState: 'Nashville, TN. USA',
  },
  {
    date: 'Sun July 3',
    venue: 'The Rain or shine Festival 2020',
    cityState: 'Cincinnati, OH. USA',
  },
  {
    date: 'Fri July 8',
    venue: 'Dirt Fest 2020',
    cityState: 'St Louis, MO. USA',
  },
  {
    date: 'Fri July 23',
    venue: 'Green Day Festival 2020',
    cityState: 'Kankakee, IL. USA',
  },
  {
    date: 'Fri Aug 1',
    venue: 'Down On The Green 2020',
    cityState: 'Atlanta, GA. USA',
  },
  {
    date: 'Sun Aug 16',
    venue: 'The Continental 2020',
    cityState: 'Gainesville, Fl. USA',
  },
  {
    date: 'Wed Aug 19',
    venue: 'Gamble Arena 2020',
    cityState: 'Indianapolis, ID. USA',
  },
];

const albums = [
  {
    image: "https://images.pexels.com/photos/2747893/pexels-photo-2747893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Battleground",
    releaseYear: "1995",
    songList: ["Clandestinely Ruled", "I Am Crazy", "Mythological Leavens Shinning", "Frost through the Ascent of the Mediocrity", "Landed into Apathy", "Rant the Puzzling Dogma of the Acorns"],
    sku: "54687343"
  },
  {
    image: "https://images.pexels.com/photos/2514316/pexels-photo-2514316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Battleborn",
    releaseYear: "2000",
    songList: ["Profusely Anguished", "Sown Alchemist Sighting", "Really Shallowed", "Bringing into Sunsets", "Unfortunately Rusted", "Disgraced by Might"],
    sku: "46987095"
  },
  {
    image: "https://images.pexels.com/photos/913215/pexels-photo-913215.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "Take Cover",
    releaseYear: "2005",
    songList: ["Incarnated by Oceans", "Flickering into Invitation", "Flames of the Gloom", "Trained into Jams", "Unreleased Concession Uprising", "Mysterion of Case"],
    sku: "44553422"
  },
  {
    image: "https://images.pexels.com/photos/627667/pexels-photo-627667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Cat Got Your Tongue",
    releaseYear: "2003",
    songList: ["Servants of the Plenitude", "Presumed into Symmetry", "Quick Harvester Whispering", "Crusader of the Consequences", "Heavily Scorched", "Recollection of Compromise"],
    sku: "55647654"
  },
  {
    image: "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "New Dimension",
    releaseYear: "2006",
    songList: ["Iconoclast of Deliverance", "Particles of the Duos", "Silence through the Solstices of the Regeneration", "Extinguishing into Farce", "Piece through the Experiment of the Domain", "Still Limitations Enchanting",],
    sku: "56342333"
  },
  {
    image: "https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Catch TwentyThree",
    releaseYear: "2008",
    songList: ["Defender of the Parlours", "Immortally Divided", "Twisted through the Wish of the Vanguard", "Echoes of Nomad", "Saving into Mists", "Expanded by Fractal"],
    sku: "44566543"
  },
];

const printAlbumCards = (arr) => {
  let domString = "";
  for (let i = 0; i < arr.length; i++) {
    domString += `<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 de-card-divider text-center">`;
    domString += `<div id="${arr[i].sku}${arr[i].releaseYear}" class="card de-card de-song-list"></div>`;
    domString += '</div>';
  }
  printToDom("albumContainer", domString);
  dynamicEvent();
}

const printSongList = (arr, e) => {
  let firstString = "";
  let secondString = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].songList.length; j++) {
      firstString += `<p class="flex-grow-1">${arr[i].songList[j]}</p>`;
    }
    secondString += `<div class="d-inline-flex flex-column justify-content-around de-song-print"><h2>${arr[i].title}</h2>${firstString}<footer><p>Released: <strong>${arr[i].releaseYear}</strong></p></footer></div>`;
  }
  printToDom(e.target.id, secondString);
}

const refreshDom = () => {
  printAlbumCards(albums);
}

const dynamicEvent = () => {
  let divCollection = document.getElementsByClassName("de-card");
  for (let i = 0; i < divCollection.length; i++) {
    divCollection[i].addEventListener("mouseenter", showSongs);
    divCollection[i].addEventListener("mouseleave", refreshDom);
  }
}

const showSongs = (e) => {
  let divArr = [];
  let divId = e.target.id;
  for (let i = 0; i < albums.length; i++) {
    if (divId === `${albums[i].sku}${albums[i].releaseYear}`) {
      divArr.push(albums[i]);
    }
  }
  printSongList(divArr, e);
}





const dateCards = (arr) => {
  let cardString = '';
  for (let i = 0; i < arr.length; i++) {
    cardString += '<div class="tourCards">';
    cardString += '<div>';
    cardString += '<hr class="card-lines">';
    cardString += '<div class="row col-md-10 offset-1">';
    cardString += `<h4 class="col">${arr[i].date}</h4>`;
    cardString += '</div>';
    cardString += '<div class="row col-md-10 offset-1">';
    cardString += `<h5 class="col">${arr[i].venue}</h5>`;
    cardString += `<p class="col">${arr[i].cityState}</p>`;
    cardString += '<button class="btn btn-primary col-2">Get Tickets</button>';
    cardString += '</div>';
    cardString += '<hr class="card-lines">';
    cardString += '</div>';
    cardString += '</div>';
    printToDom("tour-dates", cardString);
  };
};

const init = () => {
  if (window.location.pathname === "/dates.html") {
    console.log("This worked");
    dateCards(tourDates);
  } else if (window.location.pathname === "/bio.html") {
    console.log("This worked 2");
    bioCards(membersCards);
  } else if (window.location.pathname === "/discography.html") {
    console.log("This worked 3");
    printAlbumCards(albums);
  }
}

init();

