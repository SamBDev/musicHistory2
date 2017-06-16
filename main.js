
// /^[a-z0-9]+$/i
// function populateArray(){

// }

var songs = [];

songs[0] = "Legs > by Z*ZTop on the album Eliminator";
songs[1] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[2] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[3] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[4] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.push("")

for (var i = 0; i < songs.length; i++) {

    songs[i] = songs[i].replace(">", "-");
    console.log(songs[i]);

    let songToClean = songs[i].split(" ");
    console.log(songToClean);
    songs[i] = songToClean.split("").forEach(
        function(character){
            if (character != "-" && character != /^[a-z0-9]+$/i) {
             songToClean.splice(songToClean.indexOf(character), 1);
            }
        }).join("");

    console.log(songs[i]);

}