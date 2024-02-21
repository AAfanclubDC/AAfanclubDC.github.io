function loadImgData(){
    fetch('metadata.json')
    .then(response => response.json())
    .then(data => {
      // 創建article元素
      const article = document.createElement('article');
      article.className = 'box post post-excerpt';
  
      // 創建header並設置標題
      const header = document.createElement('header');
      const h2 = document.createElement('h2');
      const aTitle = document.createElement('a');
      aTitle.textContent = data['title'];
      h2.appendChild(aTitle);
      header.appendChild(h2);
      article.appendChild(header);
  
      // 創建info區塊
      const infoDiv = document.createElement('div');
      infoDiv.className = 'info';
      infoDiv.innerHTML = `
      <span class="date"><span class="month">Jul<span>y</span></span> <span class="day">14</span><span class="year">, 2014</span></span>
      <ul class="stats">
        <li><a class="icon fa-comment">16</a></li>
        <li><a class="icon fa-heart">32</a></li>
        <li><a class="icon brands fa-twitter">64</a></li>
        <li><a class="icon brands fa-facebook-f">128</a></li>
      </ul>
    `;
      article.appendChild(infoDiv);
        ext=data['ext']
      // 根據data['page']動態生成圖片
      for (let i = 1; i <= data['page']; i++) {
        const aImage = document.createElement('a');
        aImage.className = 'image featured';
        const img = document.createElement('img');
        img.src = `${data['path']}/${i.toString().padStart(2, '0')}.${ext}`; // 生成 "01.png", "02.png", 等的路徑
        img.alt = '';
        aImage.appendChild(img);
        article.appendChild(aImage);
      }
      document.getElementById('content').appendChild(article);
    })
    .catch(error => {
      console.error('加載metadata.json失敗:', error);
    });
}

function removeAllChildren() {
    var contentElement = document.getElementById('content');
    while (contentElement.firstChild) {
        contentElement.removeChild(contentElement.firstChild);
    }
}

function loadData()
{
    removeAllChildren();
    fetch('metadata.json')
        .then(response => response.json())
        .then(data => {
            if(data['type'] === "img"){
                loadImgData();
            }
        })
        .catch(error => console.error('Error:', error));
}