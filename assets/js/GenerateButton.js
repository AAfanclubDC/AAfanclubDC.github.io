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

function generatePartyB(PartyA) {
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
    // 加載 JSON 檔案
    fetch('data/繳交情況.json') // 假設您的 JSON 文件位於 data 目錄下
        .then(response => response.json())
        .then(data => {
            // 處理每一筆資料
            data.forEach(player => {
                if(player.PartyA !=PartyA){
                    return;
                }
                const src = "images/players/" + player.PartyB + ".png";
                const button = generateButton(src, player.Title);
                article.appendChild(button);
            });
            document.getElementById('content').appendChild(article);
        })
        .catch(error => console.error('Error loading the JSON file:', error));
    }