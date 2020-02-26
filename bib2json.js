const bibtexParse = require('bibtex-parse');
const fs = require('fs');
const bibtex = fs.readFileSync('publications.bib', 'utf8');
const json = bibtexParse.entries(bibtex);
fs.writeFileSync('publications.json', JSON.stringify({publications:json}).replace(/'e/gi, "é"));