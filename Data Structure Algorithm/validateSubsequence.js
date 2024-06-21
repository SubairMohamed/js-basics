const array = [5, 1, 22, 25, 6, -1, 8, 10, 11, 7];
const subsquence = [1, 6, -1, 10];

// function isValidSubsequence(array, subsquence) {
//   let arrIdx = 0;
//   let seqIdx = 0;
//   while (arrIdx < array.length && seqIdx < subsquence.length) {
//     if (seqIdx === subsquence.length) break;
//     if (subsquence[seqIdx] === array[arrIdx]) seqIdx++;
//     arrIdx++;
//   }
//   return seqIdx === subsquence.length;
// }

// another solution 2
// ------------------

function isValidSubsequence(array, subsquence) {
  let seqIdx = 0;
  for (const value of array) {
    if (seqIdx === subsquence.length) break;
    if (subsquence[seqIdx] === value) seqIdx++;
  }
  return seqIdx === subsquence.length;
}

// Tournament winner
// ================

const competition = [{ Html: "C#" }, { "C#": "Js" }, { Js: "Html" }];

let results = [0, 0, 1];

const HOME_TEAM_WON = 1;
function TournamentWinner(competition, results) {
  let currentBestTeam = "";
  const scores = { [currentBestTeam]: 0 };
  for (let idx = 0; idx < competition.length; idx++) {
    const result = results[idx];
    const [homeTeam, awayTeam] = competition[idx];
    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;
    updateScores(winningTeam, scores);
  }
}
