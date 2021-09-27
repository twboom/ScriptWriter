// Function to start the opening process
function open() {

    // Modal content
    const content = document.createElement('div');

    // Upload button
    const upload = document.createElement('button');
    content.appendChild(upload);
    upload.innerHTML = 'Upload';
    upload.addEventListener('click', upload);

    const modal = new Modal('Open Script');

}