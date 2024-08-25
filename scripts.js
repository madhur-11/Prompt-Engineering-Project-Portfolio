function toggleMenu() {
    const menuPanel = document.getElementById('menuPanel');
    const menuBtn = document.getElementById('menuBtn');
    const menuPanelBtn = document.querySelector('.menu-panel-btn');
    menuPanel.classList.toggle('menu-open');
    menuBtn.style.display = menuPanel.classList.contains('menu-open') ? 'none' : 'block';
    menuPanelBtn.style.display = menuPanel.classList.contains('menu-open') ? 'block' : 'none';

    // Adjust content sections based on menu panel state
    const contentSections = document.querySelectorAll('.content-section');
    if (menuPanel.classList.contains('menu-open')) {
        contentSections.forEach(section => {
            if (window.innerWidth > 768) {
                section.style.marginRight = '250px';
            } else {
                section.style.marginRight = '0';
            }
        });
    } else {
        contentSections.forEach(section => {
            section.style.marginRight = '0';
        });
    }
}

// Function to handle form submission
// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.querySelector('form');
//     form.addEventListener('submit', (event) => {
//         event.preventDefault();
        
//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const message = document.getElementById('message').value;

//         // This is where you would add your form submission logic (e.g., send data to a server)
//         console.log('Form submitted:', { name, email, message });

//         // For demonstration, show an alert with the form data
//         alert(`Thank you, ${name}. Your message has been sent.`);
        
//         // Reset the form after submission
//         form.reset();
//     });
//});
