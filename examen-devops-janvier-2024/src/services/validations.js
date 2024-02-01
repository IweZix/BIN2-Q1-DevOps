/* eslint-disable no-undef */
// TODO: Refactor validation function to follow the defined validations rules

const specialCharacters = ['&', '$', '!', 'è', '§', 'à', '_'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const isValid = (tag) => {
    if (tag.length < 8) {
        return false;
    }
    let cpt = 0;
    for (let i = 0; i < tag.length; i++) {
        if (specialCharacters.includes(tag[i])) cpt++;
    }
    if (cpt < 1) return false;
    let nCpt = 0;
    for (let i = 0; i < tag.length; i++) {
        if (numbers.includes(tag[i])) nCpt++;
    }
    if (nCpt < 1) return false;
    return true;
}

exports.isValid = isValid;
