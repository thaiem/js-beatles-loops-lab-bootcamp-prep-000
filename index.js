function theBeatlesPlay(musicians, instruments) {
  var answer = [];
  for (let i = 0; i < musicians.length; i++) {
    answer.push(musicians[i] + " plays " + instruments[i]);
  }
  return answer;
}

function johnLennonFacts(facts) {
  let i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
}