document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("startBtn");
    const music = document.getElementById("music");
    
    // Select all the sections
    const heroSection = document.getElementById("hero");
    const messageSection = document.getElementById("message");
    const quoteSection = document.getElementById("quote");
    const thanksSection = document.getElementById("thanks");

    startBtn.addEventListener("click", () => {
        // 1. Play the music (Browsers require a user click before playing audio)
        music.play().catch(error => console.log("Audio error: ", error));

        // 2. Hide Hero Section, Show Message Section
        heroSection.classList.add("hidden");
        messageSection.classList.remove("hidden");

        // 3. After 14 seconds (giving time for the text to appear), move to Quote
        setTimeout(() => {
            messageSection.classList.add("hidden");
            quoteSection.classList.remove("hidden");
        }, 14000);

        // 4. After another 6 seconds, move to the Final Thank You screen
        setTimeout(() => {
            quoteSection.classList.add("hidden");
            thanksSection.classList.remove("hidden");
        }, 21000);
    });
});