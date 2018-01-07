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