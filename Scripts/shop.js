// Fetching all data's
const fetchAllTabs = document.querySelectorAll('.tabs');
const fetchAllContent = document.querySelectorAll('.tab-content');

fetchAllTabs.forEach((alltab) => {
    alltab.addEventListener('click', (e) => {
        e.preventDefault();

        // Removing the active class from the tabs
        fetchAllTabs.forEach((r) => {
            r.classList.remove('active');
        });
        // Adding the active class for the selected tabs
        alltab.classList.add('active');

        // Get all data attribute
        const selectedShopTab = alltab.getAttribute('data-tab');

        // Removing the active classes from all content tabs
        fetchAllContent.forEach((allcontents) => {
            allcontents.classList.remove('active');
        });

        // Show the data of selected content
        const selectedShopContent = document.querySelector(`.tab-content#${selectedShopTab}`);
        selectedShopContent.classList.add('active');
    });
});

// Showing the first tab data when the page reloads
document.addEventListener('DOMContentLoaded', () => {
    const showFirstTabContent = document.querySelector('.tabs');
    showFirstTabContent.click();
})