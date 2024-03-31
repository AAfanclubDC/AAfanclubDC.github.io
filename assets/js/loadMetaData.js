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

function removeAllChildren() {
  var contentElement = document.getElementById('content');
  while (contentElement.firstChild) {
    contentElement.removeChild(contentElement.firstChild);
  }
}

function loadData(PartyA, PartyB) {
  const app = document.getElementById('content'); // 假设有一个id为content的元素
  console.log(PartyA, PartyB);
  fetch('data/繳交情況.json')
    .then(response => response.json())
    .then(data => {
      // 使用 find() 查找符合条件的数据条目
      const foundItem = data.find(rowData => (rowData.PartyA == PartyA) && (rowData.PartyB == PartyB));
      if (!foundItem) {
        console.error("没有找到符合条件的数据");
        return;
      }
      if (foundItem['style'] === "圖片") {
        console.log("圖片");
        // window.location.href = '/';
        loadImgData(foundItem["Title"], foundItem["ext"], foundItem['Page'], foundItem["Time"]);
        // loadImgData("第一回","png",5);
      } else if (foundItem['style'] === "網頁") {
        console.log("網頁");
      } else if (foundItem['style'] === "影片") {
        console.log("影片")
      } else {
        console.error("No fetch style");
      }
    })
    .catch(error => console.error("Error loading the JSON file:", error));
}
