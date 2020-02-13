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




const dateCards = () => {
  let cardString = '';
  for (let i = 0; i < tourDates.length; i++) {
    cardString += '<div class="tourCards">';
    cardString += '<div>';
    cardString += '<hr class="card-lines">';
    cardString += '<div class="row col-md-10 offset-1">';
    cardString += `<h4 class="col">${tourDates[i].date}</h4>`;
    cardString += '</div>';
    cardString += '<div class="row col-md-10 offset-1">';
    cardString += `<h5 class="col">${tourDates[i].venue}</h5>`;
    cardString += `<p class="col">${tourDates[i].cityState}</p>`;
    cardString += '<button class="btn btn-primary col-2">Get Tickets</button>';
    cardString += '</div>';
    cardString += '<hr class="card-lines">';
    cardString += '</div>';
    cardString += '</div>';

    printToDom("tour-dates", cardString)

  };

};

dateCards();