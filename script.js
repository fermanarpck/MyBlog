const links = [
    { id: 'link1', target: '.header' },
    { id: 'link2', target: '.header', instance: 1 },
    { id: 'link3', target: '.column' }
];

links.forEach(linkInfo => {
    const link = document.getElementById(linkInfo.id);
    if (link) {
        link.addEventListener('click', () => {
            window.location.href = "mailto:fermanaliarpacik1@gmail.com";
        });
    }
});


document.getElementById("hireMeBtn").addEventListener('click', function() {
    window.location.href = "mailto:fermanaliarpacik1@gmail.com";
});
