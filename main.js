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
    image: "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "New Dimension",
    releaseYear: "2003",
    songList: ["Iconoclast of Deliverance", "Particles of the Duos", "Silence through the Solstices of the Regeneration", "Extinguishing into Farce", "Piece through the Experiment of the Domain", "Still Limitations Enchanting",],
    sku: "56342333"
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
    title: "Cat Got My Tongue",
    releaseYear: "2006",
    songList: ["Servants of the Plenitude", "Presumed into Symmetry", "Quick Harvester Whispering", "Crusader of the Consequences", "Heavily Scorched", "Recollection of Compromise"],
    sku: "55647654"
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
        domString += `<div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 de-card-separate text-center">`;
        domString +=    `<div id="${arr[i].sku}${arr[i].releaseYear}" class="card de-card de-song-list">`;
        domString +=        `<img class="de-image" src="${arr[i].image} alt="${arr[i].title}">`;
        // domString +=        `<div class="card-body">`;
        // domString +=            `<div id="${arr[i].sku}" class="de-song-list"></div>`;
        // domString +=        '</div>';
        domString +=    '</div>';
        domString += '</div>';
    }
    printToDom("albumContainer", domString);
}

//Try to appendChild

const printSongList = (arr, e) => {
    let domString = "";
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].songList.length; j++) {
            domString += `<p class="flex-grow">${arr[i].songList[j]}</p>`;
        }
        printToDom(e.target.id, `<div class="d-flex flex-column"><h3>${arr[i].title}</h3>${domString}</div>`);
    }
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

const init = () => {
    printAlbumCards(albums);
}

init();
