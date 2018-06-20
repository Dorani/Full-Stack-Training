var test1 = "The quick brown fox jumps over the lazy dog.";

var isPangram = function(string) {

  // If the string contains less than 26 letters, it couldn't have all 26 letters of the alphabet
  if (string.length < 26) {
    return false;
  }
  else {

    // Holder for the unique letters found in the sentence
    var letterHolder = [];

    // Make the string lowercase, remove anything that isn't the letters a through z, then split them into an array
    var letters = string.toLowerCase().replace(/[^a-z]+/g, "").split("");

    // loop over the letters, if a letter is not found in the letterHolder array, push it in
    for (var i = 0; i < letters.length; i++) {
      if (letterHolder.indexOf(letters[i]) === -1) {
        letterHolder.push(letters[i]);
      }
    }

    // Check to see if letterHolder.length contains the 26 letters of the alphabet.
    if (letterHolder.length === 26) {
      return true;
    }
    else {
      return false;
    }
  }
};
