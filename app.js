'use strict';

const getQuoteBtn = document.querySelector('.btn');

const getQuote = async () => {
  const quote = document.querySelector('.quote');
  const anime = document.querySelector('.anime');
  const character = document.querySelector('.character');
  const res = await fetch('https://animechan.vercel.app/api/random');
  const {
    anime: animeName,
    character: characterName,
    quote: animeQuote,
  } = await res.json();
  anime.textContent = animeName;
  quote.textContent = animeQuote;
  character.textContent = `-${characterName}`;
};

getQuote();
getQuoteBtn.addEventListener('click', getQuote);
