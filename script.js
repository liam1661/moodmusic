const moodInput = document.getElementById("moodInput");
const continueMood = document.getElementById("continueMood");

const moodScreen = document.getElementById("moodScreen");
const musicScreen = document.getElementById("musicScreen");

const genreButtons = document.querySelectorAll(".option");
const artistButtons = document.querySelectorAll(".artist");

const artistSearch = document.getElementById("artistSearch");


// Gå fra mood til musikvalg
continueMood.addEventListener("click", () => {
    const mood = moodInput.value.trim();

    if (!mood) {
        moodInput.focus();
        return;
    }

    console.log("Mood:", mood);

    moodScreen.classList.remove("active");
    musicScreen.classList.add("active");

    window.scrollTo(0, 0);
});


// Vælg flere genrer
genreButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.classList.toggle("selected");
    });
});


// Vælg flere kunstnere
artistButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.classList.toggle("selected");
    });
});


// Søg efter kunstnere
artistSearch.addEventListener("input", () => {
    const search = artistSearch.value.toLowerCase();

    artistButtons.forEach(button => {
        const artistName = button.textContent.toLowerCase();

        if (artistName.includes(search)) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    });
});


// Gå til formålssiden

const purposeScreen = document.getElementById("purposeScreen");
const findMusic = document.getElementById("findMusic");

findMusic.addEventListener("click", () => {

    musicScreen.classList.remove("active");
    purposeScreen.classList.add("active");

    window.scrollTo(0, 0);
});


// Vælg hvad musikken skal gøre

const purposeButtons = document.querySelectorAll(".purpose");

purposeButtons.forEach(button => {

    button.addEventListener("click", () => {

        purposeButtons.forEach(otherButton => {
            otherButton.classList.remove("selected");
        });

        button.classList.add("selected");

    });

});


// Find musik

document.getElementById("recommendMusic").addEventListener("click", () => {

    const selectedPurpose = document.querySelector(".purpose.selected");

    if (!selectedPurpose) {
        return;
    }

    console.log("Mood:", moodInput.value);

    console.log(
        "Genrer:",
        [...document.querySelectorAll(".option.selected")]
            .map(button => button.textContent)
    );

    console.log(
        "Kunstnere:",
        [...document.querySelectorAll(".artist.selected")]
            .map(button => button.textContent)
    );

    console.log(
        "Formål:",
        selectedPurpose.querySelector("strong").textContent
    );

});