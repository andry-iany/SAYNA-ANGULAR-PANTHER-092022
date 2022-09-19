// data for the actors slider
const actors = [
  {
    name: "KILLMONGER",
    bio: "La sauvagerie de N'Jadaka alors qu'il servait dans une unité d'opérations noires de l'armée américaine lui a valu le surnom de Killmonger. D'origine Wakandaise, et se sentant abandoné par sa nation, il cherche à détroner T'Challa dans une quête vers le pourvoir.",
    img: "/assets/images/home/Pantherhome_slider_1.png",
  },
  {
    name: "OKOYE",
    bio: "Okoye est le général des Dora Milaje (groupe d'élite de femmes guerrières) et le chef des forces armées et des renseignements wakandais. Témoin du couronnement de T'Challa, elle se joint à lui dans de nombreuses aventures.",
    img: "/assets/images/home/Pantherhome_slider_2.png",
  },
  {
    name: "SHURI",
    bio: "Shuri est la Princesse du Wakanda, la fille de T'Chaka et de Ramonda, la sœur de T'Challa et la leader du Groupe de Design du Wakanda. Innovatrice, elle est chargée de créer une grande partie de la technologie moderne du Wakanda ainsi que les Habits de la Panthère.",
    img: "/assets/images/home/Pantherhome_slider_3.png",
  },
  {
    name: "NAKIA",
    bio: "Nakia est une membre des Chiens de Guerre et l'amoureuse de T'Challa. Elle est souvent en mission à travers le monde, assistant aux grandes détresses de nombreux peuples et commence à croire avec force que le Wakanda pourrait activement les aider",
    img: "/assets/images/home/Pantherhome_slider_4.png",
  },
  {
    name: "RAMONDA",
    bio: "Ramonda est la Reine Mère du Wakanda, épouse de T'Chaka et mère de T'Challa et Shuri. Elle se tenait aux côtés de son fils quand il devint le Roi du Wakanda, mais fut forcée de partir en exil lorsque Erik Killmonger vainquit T'Challa et prit le contrôle du trône.",
    img: "/assets/images/home/Pantherhome_slider_5.png",
  },
  {
    name: "W'kabi",
    bio: "W'Kabi est l'ancien chef de la sécurité pour la Tribu de la Porte du Wakanda ainsi que l'ancien meilleur ami de T'Challa. Ayant perdu la foi en son roi pour avoir échouer à capturer Ulysses Klaue, l'homme responsable de la mort de ses parents, W'Kabi apporta son soutien à Erik Killmonger et lui permit de prendre le trône du Wakanda",
    img: "/assets/images/home/Pantherhome_slider_6.png",
  },
  {
    name: "m'baku",
    bio: "M'Baku est le chef de la Tribu Jabari, un groupe de Wakandais qui s'étaient écartés de la société principale du Wakanda et un fervant opposant du pouvoir de T'Challa, mais échoua à le vaincre lors de l'affrontement rituel pour le trône, avant de l'aider à défendre le Wakanda face à Erik Killmonger.",
    img: "/assets/images/home/Pantherhome_slider_7.png",
  },
  {
    name: "ZURI",
    bio: "Zuri était un ancien membre des Chiens de Guerre et un shaman Wakandais, loyal conseiller de son Roi. Après avoir gardé les secrets de T'Chaka à propos de sa gestion de la mort de N'Jobu dans le passé, Zuri continua à soutenir le Roi du Wakanda alors que T'Challa reprenait le trône.",
    img: "/assets/images/home/Pantherhome_slider_8.png",
  },
  {
    name: "EVERETT KENNETH ROSS",
    bio: "L'Agent Everett Ross est un agent de la CIA et un ancien Commissaire Exécutif à l'Antiterrorisme pour la Force Conjointe AntiTerroriste. Après avoir quitté la Force Conjointe AntiTerroriste, Ross fut chargé de traquer et neutraliser Ulysses Klaue, ce qui plaça Ross sur le chemin de Black Panther, qui cherchait à capturer de nouveau Klaue pour ses crimes passés.",
    img: "/assets/images/home/Pantherhome_slider_9.png",
  },
  {
    name: "ULYSSE KLAUE",
    bio: "Ulysses Klaue est un criminel international, gangster et vendeur d'armes sur le marché noir. En 1992, il collabora avec N'Jobu afin de voler une quantité importante de vibranium au Wakanda. Bien qu'il soit parvenu à voler et à s'échapper avec un stock important, il reçut une marque sur le cou de la part des Wakandais.",
    img: "/assets/images/home/Pantherhome_slider_10.png",
  },
];

$(document).ready(() => {
  // show popup when the form is fully filled
  $("#form-contact-us").submit((e) => {
    e.preventDefault();
    showPopup();
    setTimeout(() => hidePopup(), 3000);
  });

  // ******************************************
  // slider for the actors

  // to keep track of the highlighted actor
  let highlightedIndex = 0;

  // we only display 3 actors maximum at a time
  const maxDisplayedActorsCount = 3;
  const getNextActorToDisplay = () =>
    actors[(highlightedIndex + maxDisplayedActorsCount) % actors.length];

  // display initial actors
  // Make sure to highlight the first actor
  for (let index = 0; index < maxDisplayedActorsCount; index++) {
    const actor = actors[index];
    $(".all-actors-content").append(createActorWrapper(actor, index === 0));
  }

  function createActorWrapper({ name, bio, img }, isHighlighted = false) {
    const actorImage = $("<img />").attr("src", img);
    const actorImageWrapper = $("<div></div>")
      .addClass("section-actor-image")
      .append(actorImage);

    const actorBio = $("<p></p>").text(bio);
    const actorName = $("<h2></h2>").addClass("section-title").text(name);
    const link = `<a href="#" class="link-more">Voir plus</a>`;
    const actorText = $("<div></div>")
      .addClass("section-actor-text")
      .append(actorName, actorBio, link);

    const actorWrapper = $("<div></div>")
      .addClass(`section-actor-wrapper ${isHighlighted ? "highlight" : ""}`)
      .append(actorImageWrapper, actorText);

    return actorWrapper;
  }

  // show next actor when the button is clicked
  $(".section-actor-btn-next").click(() => {
    // append new actor at the end before hiding the currently highlighted
    const actor = getNextActorToDisplay();
    $(".all-actors-content").append(createActorWrapper(actor));

    // the currently highlighted and the next to be highlighted elements, respectively
    const currentHighlightedElt = $(".section-actor-wrapper:first-child")[0];
    const toBeHighlightedElt = $(".section-actor-wrapper:nth-child(2)")[0];

    $(".section-actor-wrapper").each((_, elt) => {
      // default properties and callback for the animation
      let properties = { right: `+=${$(elt).width()}px` };
      let cb = () => $(elt).css({ right: 0 });

      if (elt === currentHighlightedElt) {
        // we need to remove the then-highlighted one after it has been hidden
        cb = () => currentHighlightedElt.remove();
        properties = { ...properties, opacity: "0" };
      } else if (elt === toBeHighlightedElt) {
        // highlight this one
        $(elt).addClass("highlight");
      }

      $(elt).animate(properties, 500, cb);
    });

    highlightedIndex += 1;
  });
});
