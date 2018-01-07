start = function() {
  const starGame = function(selector) {
    return document.querySelector(selector);
  };
  // Create an element with given parameters else creates a div
  const newElem = function(elementName) {
    const elem = document.createElement(
      elementName ? elementName.toString() : "div"
    );
    return elem;
  };
  newElem.prototype.getactor = function() {
    return this.elem.getAttribute("data-actor");
  };

  function shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  let busy = false;
  let p_elem;

  const Memory = function(level) {
    this.level = level ? Number(level) : 1;
    this.open_actor = -1;
    this.matched_actors = [];
  };

  Memory.prototype.createplatform = function() {
    document.body.innerHTML = "";
    /* Parent platform */
    let cell;
    const platform = newElem();
    const actors = this.level + this.level;

    platform.setAttribute("id", "level_" + this.level);
    platform.setAttribute("class", "platform " + "green");
    /* actors */
    for (let i = 0, n = actors * actors - 1; i <= n; i++) {
      cell = newElem();
      cell.setAttribute("class", "actor");
      cell.setAttribute("data-actor", i);
      platform.appendChild(cell);
    }
    /* Add platform to Body */
    document.body.appendChild(platform);
    return platform;
  };

  for (let i = 0, l = actors.length; i < l; i++) {
    actors[i].onclick = function() {
      if (busy) return;
      busy = true;
      // let text = document.createTextNode(circles[this.dataset.actor]);
      const image = document.createElement('img');

      const imageArray = [
        '', // 0 is unused
        './images/dicaprio.jpg',
        './images/robertdeniro.jpg',
        './images/robin-williams.jpg',
        './images/tom-hanks.jpg',
        './images/morgan-freeman.jpg',
        './images/charles-chaplin.jpg',
        './images/JackNicholson.jpg',
        './images/kevin-spacey.jpg'
      ]

      const imagerep = imageArray[circles[this.dataset.actor]]

      image.src = imagerep;
      Game.flip(this, image);
    };
  }
};