/**
 * Simple function to shuffle an array
 * @param {*} array
 */
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

const colorArray = [
  "red",
  "green",
  "blue",
  "yellow",
  "grey",
  "violet",
  "brown",
  "orange",
  "pink",
];

/**
 * The prime project's function for building a solution.
 */
function build() {
  console.log("Start building");

  /* Fetch data from html document */
  const input = document.getElementById("input").value;
  const personInGroup = document.getElementById("group-quantity").value;

  /* Parse text into html object */
  const parser = new DOMParser();
  const htmlDoc = parser.parseFromString(input, "text/html");

  /* Get all elements with meeting attendees */
  const participantClass = htmlDoc.getElementsByClassName("ts-user-name");

  /* Save names as an array */
  let names = new Array();
  for (let i = 0; i < participantClass.length; ++i) {
    names.push(participantClass[i].title);
  }

  /* Shuffle names in an array */
  shuffle(names);

  /* Create html code with a solution */
  let out = `<ul class="solution">`;
  for (let i = 0; i < names.length; ++i) {
    let group = Math.floor(i / personInGroup) + 1;
    out += `<li class="${colorArray[group - 1]}">${names[i]} - ${group}</li>`;
  }
  out += "</ul>";

  /* Render html code */
  document.getElementById("main").innerHTML += out;
}
