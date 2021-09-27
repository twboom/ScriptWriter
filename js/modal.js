class Modal {
    constructor(title, content) {

        // Fullscreen modal container
        this.container = document.createElement('div');
        this.container.id = 'modal-container';

        this.container.addEventListener('click', evt => {
            if (evt.target === this.container) {
                this.close();
            }
        });

        // Modal box
        const modal = document.createElement('div');
        modal.id = 'modal';
        this.container.appendChild(modal);

        // Modal header
        const header = document.createElement('h1');
        header.innerText = title;
        modal.appendChild(header);

        // Modal body
        const body = document.createElement('div');
        body.id = 'modal-body';
        modal.appendChild(body);

        // Append content
        body.appendChild(content);
        
        // Modal footer
        const footer = document.createElement('div');
        footer.id = 'modal-footer';
        modal.appendChild(footer);

        // Close button
        const close = document.createElement('button');
        close.id = 'close-button';
        close.innerText = 'Close';
        close.addEventListener('click', _ => {
            document.getElementById('modal-container').remove();
            document.body.style.overflow = 'auto';
        });
        footer.appendChild(close);

    }

    // Show modal
    show() {

        document.body.appendChild(this.container);

        document.body.style.overflow = 'hidden';
        const scrollOffset = window.pageYOffset;

        this.container.style.top = scrollOffset + 'px';

    }

    // Remove modal
    close() {
        document.body.removeChild(this.container).remove();
        document.body.style.overflow = 'auto';
    }

}