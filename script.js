document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.service-buttons');
    const bios = document.querySelectorAll('.services-bios');
    let selectedButton = null; // Track the currently selected button

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Hide all bios
            bios.forEach(bio => bio.style.display = 'none');

            // Show the corresponding bio
            const bioId = button.getAttribute('data-bio');
            const bioToShow = document.getElementById(bioId);
            if (bioToShow) {
                bioToShow.style.display = 'flex';
            }

            // Remove "selected" class from the previous button
            if (selectedButton) {
                selectedButton.classList.remove('selected');
            }

            // Add "selected" class to the clicked button
            button.classList.add('selected');
            selectedButton = button; // Update the selected button
        });
    });
});
;
