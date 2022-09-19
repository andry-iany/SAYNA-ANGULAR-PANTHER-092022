// This file contains shared script

$(document).ready(() => {
  // ************************
  // Trigger animation when the element is visible

  /**
   * The observer for "slide-in" and "translate" are basically similar,
   * but they differ in the options passed to the constructor of the observer
   * Hence we create a factory method to provide us with the needed observer
   * passing all its particular config
   * */
  const slideInObserverConfig = {
    elementsToObserve: document.querySelectorAll(".with-fade-in"),
    options: { rootMargin: "-150px" },
    cb: (elt) => $(elt).animate({ opacity: 1 }, "slow"),
  };

  const translateObserverConfig = {
    elementsToObserve: document.querySelectorAll(".with-translate"),
    options: { rootMargin: "0px" },
    cb: (elt) => $(elt).animate({ right: 0, left: 0, top: 0, bottom: 0 }),
  };

  // create observer based on the above configs
  createObserver(translateObserverConfig);
  createObserver(slideInObserverConfig);

  // A factory function to create observer
  function createObserver({ elementsToObserve = [], options = {}, cb }) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          const target = entry.target;
          // invoke the callback if valid
          if (cb instanceof Function) {
            cb(target);
          }

          // ... then unobserve the element
          observer.unobserve(target);
        }
      },
      { ...options }
    );

    elementsToObserve.forEach((elt) => observer.observe(elt));
    return observer;
  }

  // ************************
  // register handler for hover effect for the title and the subtitle as well as the image of T'Challa
  $(".with-hover").hover(
    function () {
      $(this).css({ transform: "scale(1.1)", transition: "all ease 0.3s" });
    },
    function () {
      $(this).css({ transform: "scale(1)", transition: "all ease 0.3s" });
    }
  );

  // ************************
  // Animate aside-line on page load
  $(".aside-line").animate({ height: "50vh" }, "slow");
});

// global functions
function showPopup() {
  $(".popup").fadeIn();
}

function hidePopup() {
  $(".popup").fadeOut();
}
