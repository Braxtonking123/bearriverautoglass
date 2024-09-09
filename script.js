document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.service-buttons');
    const bios = document.querySelectorAll('.services-bios');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Hide all bios
            bios.forEach(bio => bio.style.display = 'none');

            // Get the bio to show based on the data attribute
            const bioId = button.getAttribute('data-bio');
            const bioToShow = document.getElementById(bioId);

            if (bioToShow) {
                bioToShow.style.display = 'flex';
            }
        });
    });
});
