
// /^[a-z0-9]+$/i
// function populateArray(){

// }

var songs = [];

songs[0] = "Legs > by Z*ZTop on the album Eliminator";
songs[1] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[2] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[3] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[4] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.push("Alone - by Marshmello on the single Alone");
songs.unshift("Twilight of the Thunder God - by Amon Amorth on the album Twilight of the Thunder God");

let songLocation = document.getElementById("songsFound");

for (var i = 0; i < songs.length; i++) {

    songs[i] = songs[i].replace(">", "-");

    let myRegEx = /[^\w\s-]/g;

    songs[i] = songs[i].replace(myRegEx, "")

    let songNode = document.createTextNode(songs[i]);
    let songElement = document.createElement("div");
    songElement.className = "songInfo";

    songElement.appendChild(songNode);
    songLocation.appendChild(songElement);
}

