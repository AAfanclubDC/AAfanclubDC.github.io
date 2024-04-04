// 取得網址參數用
function getQueryParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}

// 生成轉移按鈕
function generateButton(src, title , url) {
    var button = document.createElement('button');
    button.style.backgroundColor = getRandomColor();
    button.onclick = function() { window.location.href = url; };
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

// 生成AA區塊
function loadImgData(title, extension, page, dateStr) {
    // 創建article元素
    const article = document.createElement('article');
    article.className = 'box post post-excerpt';
  
    // 創建header並設置標題
    const header = document.createElement('header');
    const h2 = document.createElement('h2');
    const aTitle = document.createElement('a');
    aTitle.textContent = title;
    h2.appendChild(aTitle);
    header.appendChild(h2);
    article.appendChild(header);
  
    // 創建info區塊
    const infoDiv = document.createElement('div');
    infoDiv.className = 'info';
    let date = new Date(dateStr);
    let year = date.getFullYear();
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug",
      "Sep", "Oct", "Nov", "Dec"];
    let month = months[date.getMonth()];
    let day = date.getDate();
    infoDiv.innerHTML = `
        <span class="date"><span class="month">${month}<span></span></span> <span class="day">${day}</span><span class="year">, ${year}</span></span>
        <ul class="stats">
          <li><a class="icon fa-comment">16</a></li>
          <li><a class="icon fa-heart">32</a></li>
          <li><a class="icon brands fa-twitter">64</a></li>
          <li><a class="icon brands fa-facebook-f">128</a></li>
        </ul>
      `;
    article.appendChild(infoDiv);
    for (let i = 0; i <= page; i++) {
      const aImage = document.createElement('a');
      aImage.className = 'image featured';
      const img = document.createElement('img');
      img.src = `pieces/${title}/${i.toString().padStart(3, '0')}.${extension}`;
      img.alt = '';
      img.style.display = 'block';
      img.style.maxWidth = '800px';
      img.style.height = 'auto';
      img.style.width = '100%';
      aImage.appendChild(img);
      article.appendChild(aImage);
    }
    document.getElementById('content').appendChild(article);
  }

//移除content全部物件
  function removeAllChildren() {
    var contentElement = document.getElementById('content');
    while (contentElement.firstChild) {
      contentElement.removeChild(contentElement.firstChild);
    }
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}