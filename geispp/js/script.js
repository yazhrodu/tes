var interval = 1.5; // delay between rotating images (in seconds)
var random_display = 0; // 0 = no, 1 = yes
interval *= 3000;

var image_list = [
  "images/s1.jpg",
  "images/s2.jpg",
  "images/s3.jpg"
];

var image_index     = image_list.length;
var number_of_image = image_list.length;

function generate(x, y) {
    var range = y - x + 1;
    return Math.floor(Math.random() * range) + x;
}

function getNextImage() {
    if (random_display) {
        image_index = generate(0, number_of_image - 1);
    }
    else {
        image_index = (image_index + 1) % number_of_image;
    }
    return image_list[image_index];
}

function rotateImage(place) {
    document.getElementById(place).src = getNextImage();
    setTimeout(function() {
        rotateImage(place);
    }, interval);
}

// START ROTATION (with the id)
rotateImage("imgrot");