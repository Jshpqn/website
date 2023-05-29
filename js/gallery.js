const tabs = document.querySelectorAll('.tab');
const images = document.querySelectorAll('.images');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {

        tabs.forEach(tab => tab.classList.remove('active'));

        tab.classList.add('active');

        images.forEach(image => image.classList.remove('active'));

        const target = tab.getAttribute('data-target');
        document.getElementById(target).classList.add('active');
    });
});