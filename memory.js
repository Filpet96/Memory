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