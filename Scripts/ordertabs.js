// Functionality for order tabs
const allTabs = document.querySelectorAll('.tabs');
const allContents = document.querySelectorAll('.content');

allTabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        // Remove the active class from all tabs
        allTabs.forEach((t) => {
            t.classList.remove('active');
        });
        // Add the active class to the clicked tab
        tab.classList.add('active');

        // Get the data atrributes
        const selectedTab = tab.getAttribute('data-tab');

        allContents.forEach((content) => {
            content.classList.remove('active');
        });

        // Show the content of selectes tab
        const selectedContent = document.querySelector(`.content#${selectedTab}`);
        selectedContent.classList.add('active');

    });
});

// Select the first tab and shows when the page reloads
document.addEventListener('DOMContentLoaded', () => {
    const firstTab = document.querySelector('.tabs');
    firstTab.click();
});