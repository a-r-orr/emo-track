const emotionInput1 = document.getElementById("emotion1");
const emotionValue1 = document.getElementById("emotionVal1");
emotionValue1.textContent = emotionInput1.value;
emotionInput1.addEventListener("input", (event) => {
    emotionValue1.textContent = event.target.value;
});