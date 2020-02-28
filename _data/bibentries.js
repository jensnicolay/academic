const bibtexParse = require('bibtex-parse');
const fs = require('fs');
const bibtex = fs.readFileSync('./publications.bib', 'utf8');
const entries = bibtexParse.parse(bibtex).filter(entry => entry.itemtype === "entry").map(entry => ({key: entry.key, text:stringifyEntry(entry)}));

function stringifyEntry(entry)
{
  let text =  "@" + entry.type + "{" + entry.key + ",\n";
  for (const field of entry.fields)
  {
    const value = String(field.value);
    const value2 = field.datatype === "braced" ? "{" + value + "}" : value;
    const value3 = value2.replace(/\s+/g, " ").replace(/(\r\n|\n|\r)/gm, "");
    const line = field.name + ": " + value3;
    text += "  " + line + ",\n";
  }
  text += "}";
  return text;
}

module.exports = entries;



