// Add event listener to the "Learn More" button
document.querySelector('#about button').addEventListener('click', () => {
    alert('You clicked the Learn More button!');
});

// Add event listener to the "Send" button
document.querySelector('#contact button').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Message sent!');
});