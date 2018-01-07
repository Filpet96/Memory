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