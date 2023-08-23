// Get all the elements with the class "circle"
const circles = document.querySelectorAll(".cricle");

circles.forEach((circle, index) => { // Add index parameter to forEach
    const valueElement = circle.querySelector(".value");

    let startCount = 0; // Initialize the startCount variable

    const endCount = 100;

    let targetPercentage = 0; // Initialize the targetPercentage variable

    // Set targetPercentage based on index
    if (index === 0) {
        targetPercentage = 90;
    } else if (index === 1) {
        targetPercentage = 20;
    } else if (index === 2) {
        targetPercentage = 60;
    }
    else if (index === 3) {
        targetPercentage = 45;
    }
    else if (index === 4) {
        targetPercentage = 45;
    }
    else if (index === 5) {
        targetPercentage = 35;
    }


    let animation = setInterval(() => {
        startCount++;
        valueElement.textContent = `${startCount}%`; // Update the percentage calculation
        circle.style.background = `conic-gradient(#00c6fb ${startCount * 3.6}deg, #ededed 0deg)`; // Update the angle calculation

        if (startCount === targetPercentage) { // Use the targetPercentage here
            clearInterval(animation);
        }
    }, 100);
});
