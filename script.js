let btn = document.querySelector('.btn');
let jokeEl = document.querySelector('.joke');


const jokes = [
    {
      joke: "Did you hear about the 12-inch dog? It was a foot long."
    },
    {
      joke: "What did the pecan say to the walnut it was chasing? I’ll cashew eventually!"
    },
    {
      joke: "How does the moon cut his hair? Eclipse it."
    },
    {
      joke: "A man is washing his car with his son. The son asks, “Can’t you just use a sponge?”"
    },
    {
      joke: "What vegetable is cool, but not that cool? Radish."
    },
    {
      joke: "What did the mama cow say to the baby cow? It’s pasture bed time."
    },
    {
      joke: "How fast is milk? It’s pasteurized before you know it."
    },
    {
      joke: "To the person who stole my glasses: I will find you. I have contacts."
    },
    {
      joke: "My wife said I ruined her birthday. I’m not sure how I did that, I didn’t even KNOW it was her birthday!"
    },
    {
      joke: "My hotel tried to charge me ten dollars extra for air conditioning. That wasn’t cool."
    }
  ];
btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * jokes.length);
    jokeEl.innerText = jokes[random].joke;
    
})
