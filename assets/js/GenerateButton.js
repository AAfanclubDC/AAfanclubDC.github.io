function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function generateButton(src, title) {
    var button = document.createElement('button');
    button.style.backgroundColor = getRandomColor();

    var container = document.createElement('div');
    container.className = 'container';

    var imageDiv = document.createElement('div');
    imageDiv.className = 'image';

    var img = document.createElement('img');
    img.src = src;
    img.alt = "";

    imageDiv.appendChild(img);

    var textDiv = document.createElement('div');
    textDiv.className = 'text';

    var p = document.createElement('p');
    p.textContent = title;
    textDiv.appendChild(p);

    container.appendChild(imageDiv);
    container.appendChild(textDiv);

    button.appendChild(container);
    return button;
}

function generatePartyB() {
    var article = document.createElement('article');
    article.id = "PartyB";
    article.className = 'box post post-excerpt';
    // 創建header並設置標題
    const header = document.createElement('header');
    const h2 = document.createElement('h2');
    const aTitle = document.createElement('a');
    aTitle.textContent = "這個設定由這些群友承包了";
    h2.appendChild(aTitle);
    header.appendChild(h2);
    article.appendChild(header);

    src = "images/players/"+ "02"+ ".png"
    article.appendChild(generateButton(src,
    "AAAAA",));
    article.appendChild(generateButton(src,
        "AAAAAAAAAAAAAAAAAA",));
    document.getElementById('content').appendChild(article);
}