export function modal() {
    
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    function showModal() {
        overlay.style.display = 'block';
        more.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }
    more.addEventListener('click', function() {
        showModal();
    });

    function hideModal() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    }
    close.addEventListener('click', function() {
        hideModal();
    });

    // onclik description-btn show modal

    document.body.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('description-btn')) {
            showModal();
        }
    });
}