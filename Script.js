```javascript
const moodInput = document.getElementById("moodInput");
const continueBtn = document.getElementById("continueBtn");

continueBtn.addEventListener("click", () => {
    const mood = moodInput.value.trim();

    if (!mood) {
        moodInput.focus();
        return;
    }

    console.log("Brugerens mood:", mood);
});
```
