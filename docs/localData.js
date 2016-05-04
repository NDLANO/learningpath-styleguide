'use strict';

var learningPaths = [
  {
    title: 'Heltedikt og gudedikt',
    description: 'En læringssti som tar for seg heltedikt og gudedikt i norrøn og europeisk middelalderlitteratur.'
  }, {
    title: 'Snorres kongesagaer',
    description: 'En læringssti om Snorres kongesagaer med spesiell fordypning i «Olav den helliges saga»'
  }, {
    title: 'Kontrast og balanse i grafisk design',
    description: 'En innføring i komposisjonsprinsipper i grafisk design med vekt på kontrast og balanse.'
  }, {
    title: 'Arbeidsoppdrag - PC mappe',
    description: 'Når du skal jobbe med tekstil er det kunn kreativiteten som setter grenser. Her får du et arbeidsoppdrag hvor du skal lage en PC mappe med dekor, ente'
  }, {
    title: 'Kontrast og balanse i grafisk design',
    description: 'En innføring i komposisjonsprinsipper i grafisk design med vekt på kontrast og balanse.'
  }
].map(function (lp) {
  return Object.assign(lp, {
    updated_at: '07.03.2016',
    duration: '2 timer',
    status: 'Publisert'
  });
});

module.exports = {
  learningPaths: learningPaths
};
