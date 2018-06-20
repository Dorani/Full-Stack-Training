// You have an array of filenames with extensions.
// Sort the files into arrays based on whether or not they are videos or images.
var files = ["pavans_first_birthday.mov",
  "owens_asleep_at_the_computer.jpg",
  "michael_fights_a_polar_bear.mp4",
  "nate_road_rage.avi",
  "ruby_skydiving.jpeg",
  "ken_getting_his_black_belt.png",
  "dan_winning_underground_street_race.mov",
  "its_hard_to_come_up_with_file_names.gif",
  "seriously_this_is_taking_too_long.mpg",
  "i_wonder_how_many_of_these_i_should_have.png",
  "probably_a_few_more.avi",
  "nutmeg_is_clawing_my_sneakers_again.mp4",
  "cat_i_will_destroy_you.gif",
  "i_wish_we_had_a_dog.jpeg",
  "stop_looking_at_me_like_that_nutmeg.mpeg",
  "aww_i_cant_hate_you.png",
  "omg_my_sneakers.avi",
  "cat_you_are_the_worst.mp4"
];

// SOLUTION
// ========

// We set up arrays for all possible file extensions.
var imageExtensions = ["jpg", "gif", "png", "jpeg"];
var videoExtensions = ["mov", "avi", "mp4", "mpeg", "mpg"];

// We create empty arrays where we can place our results.
var images = [];
var videos = [];

// We define an extensionSorter function
// that takes an array of filenames as an argument
function extensionSorter(fileArray) {

  // We use a for-loop to cycle through the filename array
  for (var i = 0; i < fileArray.length; i++) {

    // In the loop, we grab the file extension
    // from the current filename.
    // We do this by splitting the string into an array
    // with 2 elements: the file's title and it's extension.
    // We then pop the array, which removes the last element (the extension),
    // and returns it. Thus, fileExt now has the value of the extension.
    var fileExt = fileArray[i].split(".").pop();

    // Now we check the file extension against our array of possible image extensions.
    if (imageExtensions.indexOf(fileExt) !== -1) {

      // If there's a match, we place the whole filename in the images array.
      images.push(fileArray[i]);

    }

    // Otherwise, it must be a video.
    else if (videoExtensions.indexOf(fileExt) !== -1) {

      // As such, we place the element in our videos array.
      videos.push(fileArray[i]);
    }
  }

  // Finally, we're outside of the loop, so we log all of our videos and images.
  console.log(videos);
  console.log(images);
}
