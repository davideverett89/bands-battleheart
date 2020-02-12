console.log("Battleheart");

const membersCards = [
    {
    image: "https://images.pexels.com/photos/2614942/pexels-photo-2614942.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    alt: "Drummer playing the drums",
    name: "Tommy Tonnel",
    bandRole: "Drums",
    personalBio: "Tommy is one of the original founders of Battleheart."
    },
   {
    image: "https://images.pexels.com/photos/1735240/pexels-photo-1735240.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    alt: "female guitarist",
    name: "Musique",
    bandRole: "Guitar and vocals",
    personalBio: "Musique has enjoyed singing since the age of 4 when she started presenting Christmas concerts at her family's get-togethers. She has studied music with Nadia Voltna and Michelle Mastery at the New York Conservatory where she graduated with honors in 2010. Musique has made a name for herself since her high school band Renaissance Gals auditioned on America's Got Talent. She continues to play with Renaissance Gals as well as Battleheart and enjoys the variety of opportunities each band brings. She is the newest member of Battleheart."
    },
   {
    image: "https://images.pexels.com/photos/167579/pexels-photo-167579.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    alt: "Guitarist in mosh pit",
    name: "Luke Stavros",
    bandRole: "Electric guitar",
    personalBio: "Luke grew up in New Jersey and always loved music. Started guitar lessons after school in elementary school and hasn't stopped. Other bands he has been a member of are Rocky & Slimy and The Terrible 5. "
    },
   {
    image: "https://images.pexels.com/photos/3651845/pexels-photo-3651845.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    alt: "keyboard player resting head on keyboard",
    name: "Paul Marcioni",
    bandRole: "Keyboard",
    personalBio: "Paul has been playing piano since high school when the girl he liked (at the time) confessed she loved to sing but could never find a good piano accompanist. He threw himself into learning how to play piano and became that accompanist for about 5 short months. Thankfully, his love of piano and keyboard has outlasted that early relationship. He plays out at a number of venues in the area as Piano Paul."
    },
   {
    image: "https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    alt: "Guitarist playing and singing",
    name: "Milan Freemont",
    bandRole: "Electric guitar and vocals",
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
        domString += '<div class="d-flex flex-row mb-3 flex-wrap">';
            domString += '<div class="flip-card">';
                domString += '<div class="flip-card-inner">';
                    domString += '<div class="flip-card-front">';
                        domString += `<img src="${membersCards[i].image}" alt="${membersCards[i].alt}" style="width:300px;height:300px;">`;
                    domString += '</div>';
                    domString += '<div class="flip-card-back">';
                        domString += `<h2>${membersCards[i].name}</h2>`;
                        domString += `<h3>${membersCards[i].bandRole}</h3>`;
                        domString += `<p>${membersCards[i].personalBio}</p>`;
                    domString += '</div>';
                domString += '</div>';
            domString += '</div>';
        domString += '</div>';
    }
    printToDom("biographyContainer", domString)
};

const init = () => {
    bioCards(membersCards);
};

init();




