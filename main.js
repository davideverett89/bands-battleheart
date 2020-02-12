const albums = [
    {
    image: "https://images.pexels.com/photos/2747893/pexels-photo-2747893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Battleground",
    releaseYear: "1995",
    songList: ["Clandestinely Ruled", "I Am Crazy", "Mythological Leavens Shinning", "Frost through the Ascent of the Mediocrity", "Landed into Apathy", "Rant the Puzzling Dogma of the Acorns" ],
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

const printToDom = (divId, domString) => {
    let targetDiv = document.getElementById(divId);
    targetDiv.innerHTML = domString;
    dynamicEvent();
}

const printAlbumCards = (arr) => {
    let domString = "";
    for (let i = 0; i < arr.length; i++) {
        domString += `<div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 de-card-divider text-center">`;
        domString +=    `<div id="${arr[i].sku}${arr[i].releaseYear}" class="card de-card de-song-list"></div>`;
        domString += '</div>';
    }
    printToDom("albumContainer", domString);
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
    let divId = e.target.id
    for (let i = 0; i < albums.length; i++) {
        if (divId === `${albums[i].sku}${albums[i].releaseYear}`) {
            divArr.push(albums[i]);
        }
    }
    printSongList(divArr, e);
}

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

const init = () => {
    printAlbumCards(albums);
}

init();
