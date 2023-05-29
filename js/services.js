function Enable() {
    const dropdown = document.getElementsByClassName("services-pre-shoot");
    const dropdownList = document.getElementsByClassName("services-preshoot1");
    const dropdownArrow = document.getElementsByClassName("services-dropdown-arrow");

    dropdown.addEventListener('click', function () {
        if (element.checked) {
            dropdownList.style.display = 'flex';
            dropdownArrow.style.transform = 'rotate(90deg)';
        } else {
            dropdownList.style.display = 'none';
            dropdownArrow.style.transform = 'none';
        }
    });
}

