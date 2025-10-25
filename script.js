document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    // Get the new toast element instead of the old status paragraph
    const toast = document.getElementById('toast-notification');

    async function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        
        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // SUCCESS: Show the success toast
                showToast("Thank you! Your message has been sent.", "success");
                form.reset(); // Clear the form fields
            } else {
                // ERROR: Show the error toast
                showToast("Oops! There was a problem submitting your form.", "error");
            }
        } catch (error) {
            // NETWORK ERROR: Show the error toast
            showToast("Oops! There was a problem submitting your form.", "error");
        }
    }

    // --- NEW FUNCTION TO CONTROL THE TOAST ---
    function showToast(message, type) {
        // Set the message and style
        toast.innerHTML = message;
        toast.className = type; // 'success' or 'error'
        
        // Add the 'show' class to make it visible
        toast.classList.add('show');
        
        // Set a timer to hide the toast after 4 seconds (4000 milliseconds)
        setTimeout(function() {
            toast.classList.remove('show');
        }, 4000);
    }

    form.addEventListener("submit", handleSubmit);
});
document.addEventListener('DOMContentLoaded', function() {
    // --- TYPING ANIMATION SCRIPT ---

    // 1. Find the HTML element to animate
    const typedTextSpan = document.querySelector(".typed-text");
    
    // 2. Define the words you want to type out
    const textArray = ["Data Scientist", "Data Analyst"]; 
    
    // 3. Set up the variables for the animation
    const typingDelay = 200; // Speed of typing
    const erasingDelay = 150; // Speed of deleting
    const newTextDelay = 500; // Delay before starting to type a new word
    let textArrayIndex = 0;
    let charIndex = 0;

    // The main function that handles the animation
    function type() {
        // If we are still typing the current word
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } 
        // If we have finished typing, wait, then start erasing
        else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        // If we are still erasing the current word
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } 
        // If we have finished erasing, move to the next word and start typing again
        else {
            textArrayIndex++;
            // If we've reached the end of the array, loop back to the start
            if (textArrayIndex >= textArray.length) {
                textArrayIndex = 0;
            }
            setTimeout(type, typingDelay + 1100);
        }
    }

    // Start the animation when the page loads
    if (textArray.length) {
        setTimeout(type, newTextDelay + 250);
    }
});

// --- ANIMATED LOGO CREATION SCRIPT ---
// This code should be inside your 'DOMContentLoaded' event listener

document.addEventListener('DOMContentLoaded', function() {
    
    const logoContainer = document.querySelector('.animated-logo-container');
    
    // Check if the container exists on the page
    if (logoContainer) {
        const numberOfLines = 120; // You can change this number for more/fewer lines
        const angleIncrement = 360 / numberOfLines;

        // Loop 120 times to create 120 lines
        for (let i = 0; i < numberOfLines; i++) {
            // Create a new <div> element
            const line = document.createElement('div');
            
            // Give it the 'line' class so it gets styled by our CSS
            line.classList.add('line');
            
            // Calculate the correct rotation for this line
            const rotation = i * angleIncrement;
            
            // Apply the rotation via an inline style
            line.style.transform = `rotate(${rotation}deg)`;
            
            // Add the finished line to our main container
            logoContainer.appendChild(line);
        }
    }

    // ... your other JavaScript code (form handler, typing animation, etc.)
});
