function displayDefaultContent() {
    const app = document.getElementById('content');
    // 确保在添加新内容前清空容器
    removeAllChildren(app);

    // 创建并添加默认的 article 元素
    const defaultHtml =  `
    <article class="box post post-excerpt">
    <header>
        <h2>AA接盤祭2024－甲乙方接力創作</h2>
        <p>報名群友承接其他參加者發佈的故事設定來續寫AA作品</p>
    </header>
    <div class="info">
        <span class="date"><span class="month">Jul<span>y</span></span> <span class="day">14</span><span
                class="year">, 2014</span></span>
        <ul class="stats">
            <li><a class="icon fa-comment">16</a></li>
            <li><a class="icon fa-heart">32</a></li>
            <li><a class="icon brands fa-twitter">64</a></li>
            <li><a class="icon brands fa-facebook-f">128</a></li>
        </ul>
    </div>
    <p>
        <strong>【活動規則】</strong><br>
        於<a href="https://discord.com/channels/689838165347139766/1202758663098339400/1202759577704341574">
            報名區
        </a>
        下方按照格式留言報名。<br>
        甲方：發佈故事設定的委託者<br>
        乙方：根據故事設定寫出AA作品的承接者<br>

        報名參加則視為同意成為乙方。<br>
    </p>
    <p>
        報名時間期間，希望同時成為甲方的參加者可在 委託安放區 下方按照格式發佈一份故事設定的委託單。<br>
        報名截止後，參賽者將有三天時間瀏覽委託安放區，並作為乙方通過表情符號⬆️選擇希望承接的委託。<br>
        其後乙方需要根據委託單創作出AA作品，並於期限前提交給主辦方。<br>
        3月24日將會公開每個參賽作品並進行評分（評分標準待定）。
    </p>
    <p>
        繳交請詳細閱讀<a href="#tech-support-announcement">技術支援公告</a>
    </p>
</article>

<article class="box post post-excerpt">
    <header>
        <h2><a>獎項</a></h2>
        <p>由Pintbox、有希、覺靈、番王與AA同好會送出</p>
    </header>
    <div class="info">
        <span class="date"><span class="month">Jul<span>y</span></span> <span class="day">8</span><span
                class="year">, 2014</span></span>
        <ul class="stats">
            <li><a class="icon fa-comment">16</a></li>
            <li><a class="icon fa-heart">32</a></li>
            <li><a class="icon brands fa-twitter">64</a></li>
            <li><a class="icon brands fa-facebook-f">128</a></li>
        </ul>
    </div>
    <p>
        第1名：Steam禮品卡（20美元） <br>
        第2名：Steam禮品卡（15美元）<br>
        第3名：Steam禮品卡（10美元）<br>
        第4~6名：Steam禮品卡（5美元） <br>
    </p>
    <p>
        佳作投票（觀眾）：每票1分<br>
        符合委託要求：由評審委員會判定，10/5/0三檔<br>
        甲方賞：由甲方選擇寫自己委託作品中前三名，5/3/1<br>
        評委評分：1~5分 ×3<br>
    </p>
    <p>
        <strong>額外獎項</strong><br>
        <strong>有希獎</strong><br>
        　符合委託項目非0分、且佳作票數最高者可獲得Steam卡（150台幣）<br>

        <strong>番王獎</strong><br>
        　選擇寫作次數最多、且至少3人的甲方可獲得Steam卡（150台幣）<br>
    </p>
</article>
<article class="box post post-excerpt" id="tech-support-announcement">
    <header>
        <h2><a>技術支援公告</a></h2>
        <p>繳交格式說明</p>
    </header>
    <div class="info">
        <span class="date"><span class="month">Jul<span>y</span></span> <span class="day">8</span><span
                class="year">, 2014</span></span>
        <ul class="stats">
            <li><a class="icon fa-comment">16</a></li>
            <li><a class="icon fa-heart">32</a></li>
            <li><a class="icon brands fa-twitter">64</a></li>
            <li><a class="icon brands fa-facebook-f">128</a></li>
        </ul>
    </div>
    <p>
        本次活動接受數種繳交格式，請閱讀以下條款確保繳交形式正確，如果格式錯誤大會方有權利打回直到格式正確<br>
        1. 繳交檔案為"圖片檔"、"網頁檔"、"影片檔"三種形式為主，不可混合(如繳交三張圖片加一部影片)，
        繳交網頁檔時請確保該檔案在其他設備(電腦、手機)上顯示正常<br>
        2. "網頁檔"、"影片檔"以一個檔案為限<br>
        3. "圖片檔"需要確保所有檔案的副檔名一致，可以為png,jpg,jpeg,bmp...等圖片格式，
        但不接受gif檔案，gif檔案視同影片檔只可以繳交一個<br>
        4. 繳交"圖片檔"檔案命名需要依照圖片順序命名為001,002,...，確保每一個檔案名稱都為三位數字<br>
        5. 整份作品繳交時需要以一個命名為\`<作品名>\`的資料夾包裝壓縮打包為一個壓縮檔<br>
            壓縮檔命名需要符合以下格式 <strong>\`&lt對應甲方編號(個位數請補0)&gt_&lt作者編號(個位數請補0)&gt\`</strong>
            '<strong>&lt</strong>'與'<strong>&gt</strong>'請不要保留<br>
            6. 繳交時請填寫<a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeex_IFmjxpcHrhDyiMnhP_Knanvrdm3Muxtv3BywrPkQd6Qg/viewform?usp=sf_link">google表單</a>
            並同時上傳壓縮檔案
    </p>
</article>
    `;
    // 直接使用 innerHTML 将 HTML 结构的字符串添加到 app 容器中
    app.innerHTML = defaultHtml;
}