function searchVideos() {
    const searchInput = document.getElementById('search').value.toLowerCase().trim();
    const videoItems = document.querySelectorAll('.video-item');

    videoItems.forEach(item => {
        const title = item.getAttribute('data-title').toLowerCase();
        if (title.includes(searchInput)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
