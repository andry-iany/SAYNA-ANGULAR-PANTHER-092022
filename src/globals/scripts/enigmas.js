$(document).ready(() => {
  // Each object from this array contains all the data needed to properly display
  // the current quizz. Its attributes are used to construct the class name
  // of the element whose data is the value of the attribute itself.
  // eg: 'configs[0].instruction' contains the data needed to render ".enigmas-instruction"
  const configs = [
    {
      instruction: {
        text: "Prouve ton talent d'espion et déchiffre cette réplique d'Okoyé écrite en Wakandais, et apprend par la même occasion la première valeur d'une Dora Milaje !",
        css: {
          marginBottom: "2rem",
          textAlign: "justify",
        },
      },
      problem: {
        text: `“SI JE SUIS FIDELE C'EST A CE TRONE PEU IMPORTE QUI MONTE DESSUS”`,
        css: {
          fontFamily: "WakandaForever",
          color: "#9e91b7",
          letterSpacing: "0.5rem",
          wordSpacing: "0.8rem",
          fontSize: "1.4rem",
        },
      },
      "hint-title": {
        text: "Voici la transicription de l'alphabet:",
        css: {
          marginBottom: "1rem",
        },
      },
      "hint-body": {
        children: new Array(26)
          .fill("")
          .map((_, idx) => String.fromCharCode(idx + 65))
          .map((char) => {
            return `
            <span>${char} = </span>
            <span class="section-enigmas-transcript-item">${char}</span>;`;
          }),
      },
    },
    {
      instruction: {
        text: "Une anecdote intéressante est écrite juste en dessous mais elle est codée par un code césar également appelé code de chiffrement par décalage . L'alphabet a été décalé, trouve la clé de chiffrement qui te permettrait de retrouver les lettres et retranscris la phrase :",
        css: {
          marginBottom: "1rem",
          textAlign: "justify",
        },
      },
      problem: {
        text: "Tm nqtu lmjcbm i Wikstivl mv Kitqnwzvqm. Qt aioqb lm ti dqttm lwvb mab wzqoqviqzm Zgiv Kwwotmz mb moitmumvb ti dqttm ycq i dc viqbzm tm uwcdmumvb xwtqbqycm lma jtiks xivbpmza",
        css: {
          fontFamily: "inherit",
          color: "inherit",
          letterSpacing: "initial",
          wordSpacing: "initial",
          fontSize: "inherit",
        },
      },
      "hint-title": {
        text: "Le savais tu ?",
        css: {
          marginBottom: "1.5rem",
          textAlign: "center",
        },
      },
      "hint-body": {
        children: `<p>
                Plusieurs sources s'entendent pour dire que la lettre la plus utilisée en français est la lettre E. En pourcentage de fréquence, la lettre est utilisée à 14% dans une phrase. Et si tu regardais quel symbole revient le plus souvent pour en déduire son décalage dans l'alphabet ?
              </p>
              `,
      },
    },
    {
      instruction: {
        text: "Lorsque T'Challa mange l'herbe en forme de coeur pour recevoir les pouvoirs du Black Panther, il voit son père afin de lui demander conseil afin de devenir un bon roi. Cette scène rappelle la même scène d'un certain film où un père dit à son fils de ne pas oublier qui il est et d'où il vient. Quel est ce film ?",
        css: {
          marginBottom: "1rem",
          textAlign: "justify",
        },
      },
      problem: {
        text: "01001100 01000101 00100000 01010010 01001111 01001001 00100000 01001100 01001001 01001111 01001110 00001101 00001010",
        css: {
          fontFamily: "inherit",
          color: "inherit",
          letterSpacing: "initial",
          wordSpacing: "1rem",
          fontSize: "inherit",
        },
      },
      "hint-title": {
        text: "Le savais tu ?",
        css: {
          marginBottom: "1.5rem",
          textAlign: "center",
        },
      },
      "hint-body": {
        children: `
              <p>
                Le philosophe Francis Bacon inventa en 1605 un alphabet bilitère, uniquement
                composé des deux lettres A et B. C'est en quelque sorte l'ancêtre du système
                binaire des ordinateurs actuels car toute lettre pouvait être construite avec un
                enchainement précis de ces deux lettres, tandis que le système binaire
                informatique utilise 0 et 1.
              </p>
              `,
      },
    },
  ];

  let currentQuestionNumber = 0;
  displayNextQuestion();

  $("#form-reply").submit((e) => {
    e.preventDefault();

    if (currentQuestionNumber < configs.length) {
      showPopup();
    } else {
      displayEndPopup();
    }
  });

  $(".popup button").click(() => {
    hidePopup();

    $(".section-enigmas").fadeOut(500);
    // wait until the termination of the fadeOut animation before displaying the next quizz
    setTimeout(() => displayNextQuestion(), 500);
    $(".section-enigmas").fadeIn(500);
  });

  function displayNextQuestion() {
    currentQuestionNumber += 1;

    // populate the quizz with the current data
    populateQuizzFromConfig(configs[currentQuestionNumber - 1]);

    // display the current question number
    $(".enigmas-number").text(currentQuestionNumber);

    // clear the form
    $("#form-reply input").val("");

    // adjust styling of the "enigmas-hint element"
    currentQuestionNumber % 2 === 0
      ? $(".enigmas-hint").removeClass("enigma-rounded-rotated")
      : $(".enigmas-hint").addClass("enigma-rounded-rotated");
  }

  function populateQuizzFromConfig(config = {}) {
    for (const selector of Object.keys(config)) {
      // the valid class name of the element starts with "enigmas-"
      // eg: "enigmas-instruction"
      const classFromSelector = `.enigmas-${selector}`;

      if (config[selector].text) {
        // replace the text-content if config has text value
        $(classFromSelector).text(config[selector].text);
      }
      if (config[selector].css) {
        // apply the css style if the config has one
        $(classFromSelector).css(config[selector].css);
      }
      if (config[selector].children) {
        // replace all children with the specified ones if config has
        $(classFromSelector).empty().append(config[selector].children);
      }
    }
  }

  function displayEndPopup() {
    setEndPopupBody();
    showPopup();
    updatePopupCountdown();
  }

  function setEndPopupBody() {
    const popupBody = `
      <h1>Ton initiation est terminée !</h1>
      <a href="/" class="btn"> Revenir à l'acceuil </a>
      <div class="counter-wrapper">
        <img src="./assets/images/all/figma_logo.svg" alt="" />
        <div>
          <h3>Coming soon...</h3>
          <h1 class="counter">
            <!-- HERE GOES THE COUNTDOWN -->
            --:--:--
          </h1>
        </div>
      </div>
    `;

    $(".popup-body").empty().append(popupBody);
  }

  function updatePopupCountdown() {
    // We're using UTC time for the deadline
    const deadline = new Date("2022-07-25T00:00:00.000Z");
    const deadlineInSec = Math.floor(deadline.getTime() / 1000);

    // used to always get at least two digits for the hours, minutes and seconds
    const formatNumber = new Intl.NumberFormat("fr", {
      minimumIntegerDigits: 2,
    }).format;

    const interval = setInterval(() => {
      const nowInSec = Math.floor(Date.now() / 1000);
      const restInSec = deadlineInSec - nowInSec;
      const { rest: secs, div: rawMins } = divide(restInSec, 60);
      const { rest: mins, div: hours } = divide(rawMins, 60);
      $(".counter").text(
        `${formatNumber(hours)}:${formatNumber(mins)}:${formatNumber(secs)}`
      );

      // stop the counter when the time arrives
      if (restInSec === 0) clearInterval(interval);
    }, 1000);
  }

  function divide(a, b) {
    return { div: Math.floor(a / b), rest: a % b };
  }
});
