let i = 0, text;
text = "I am Artificial Intelligence Robot"

function typing() {
    if (i < text.length) {
        document.getElementById("heading").innerHTML += text.charAt(i)
        i++;
        setTimeout(typing, 50)
    }
}
typing()