// let resetButton = document.getElementById("reset-button");
start = function() {



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
    let currentIndexUsed = array.length,
      temporaryValue,
      randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndexUsed) {
      // Picking a remaining eleement
      randomIndex = Math.floor(Math.random() * currentIndexUsed);
      currentIndexUsed -= 1;

      // And im swapping it with the current used element.
      temporaryValue = array[currentIndexUsed];
      array[currentIndexUsed] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  let busy = false;
  let p_elementent;

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
    platform.setAttribute("class", "platform " + "moviecircle");
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

  Memory.prototype.flip = function(elem, image) {
    if (
      this.matched_actors.indexOf(elem.dataset.actor) != -1 ||
      this.open_actor == elem.dataset.actor
    ) {
      busy = false;
      return;
    }

    if (this.open_actor === -1) {
      elem.appendChild(image);
      elem.setAttribute("class", "actor active");
      this.open_actor = elem.dataset.actor;
      p_element = elem;
      //keep the actor open
      busy = false;
    } else {
      elem.appendChild(image);
      elem.setAttribute("class", "actor active");

      if (circles[this.open_actor] === circles[elem.dataset.actor]) {
        //if yes, keep both actors openy
        this.matched_actors.push(this.open_actor, elem.dataset.actor);
        if (this.matched_actors.length == 16) {
          this.success();
        }
        busy = false;
      } else {
        //if no, close both actors
        setTimeout(function() {
          p_element.setAttribute("class", "actor");
          p_element.innerHTML = "";
          elem.setAttribute("class", "actor");
          elem.innerHTML = "";
          busy = false;
        }, 1000);
      }

      //must: reset this.open_actor
      this.open_actor = -1;
    }
  };
  Memory.prototype.success = function() {
    const action = confirm("YOU MADE IT!");
    if (action == true) {
      start();
    }
  };
  const Game = new Memory(2);
  const platform = Game.createplatform();
  const actors = document.getElementsByClassName("actor");
  const circles = shuffle([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]);

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

      const imagearr = imageArray[circles[this.dataset.actor]]

      image.src = imagearr;
      Game.flip(this, image);


    };


  }


  const button = document.createElement("button");
  button.addEventListener("click", clearGame);
  button.innerHTML = "Replay";

  document.querySelector("body").appendChild(button);
};

function clearGame() {
  start();
}
start();