// Function to start the opening process
function open() {

    // Modal content
    const content = document.createElement('div');

    // Upload button
    const uploadButton = document.createElement('button');
    content.appendChild(uploadButton);
    uploadButton.innerHTML = 'Upload';
    uploadButton.addEventListener('click', _ => {
        upload(_ => { modal.close() })
    });

    const modal = new Modal('Open Script', content);
    modal.show();

}