function loadMoreTrends() {
    const hashtags = document.getElementById('hashtags');
    const sounds = document.getElementById('sounds');
    const creators = document.getElementById('creators');

    hashtags.innerHTML += '<p>#funny, #challenge, #music</p>';
    sounds.innerHTML += '<p>"Dance Monkey", "Old Town Road", "Roses"</p>';
    creators.innerHTML += '<p>@lorengray, @spencerx, @dixiedamelio</p>';
}
