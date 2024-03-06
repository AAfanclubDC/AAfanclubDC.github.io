function loadTitleInfo() {
    fetch('\\data\\委託單.json')
        .then(response => response.json())
        .then(data => {
            const nav = document.getElementById('nav'); // 获取nav元素
            const ul = nav.querySelector('ul'); // 获取nav中的ul元素
            // 清除除了前两个之外的所有列表项
            while (ul.children.length > 2) {
                ul.removeChild(ul.lastChild);
            }
            // 根据JSON数据动态添加新的列表项
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    const element = data[key];
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.textContent = element.標題; // 设置链接文本为标题
                    li.appendChild(a); // 将a元素添加到li中
                    ul.appendChild(li); // 将li元素添加到ul中
                }
            }
        }
        )
};