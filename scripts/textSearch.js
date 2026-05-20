for (let i = 0; i < textBoxes.length; i++) {
    textBoxes[i].addEventListener("blur", () => {
        textBoxes[i].value = "";
    });
}