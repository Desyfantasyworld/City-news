fetch('articles.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('news-container');

    data.forEach(article => {
      const card = document.createElement('div');
      card.className = 'article-card';

      card.innerHTML = `
        <img src="${article.image}" alt="${article.title}">
        <div class="article-info">
          <h3>${article.title}</h3>
          <p class="excerpt">${article.excerpt}</p>
          <div class="meta">
            <span>${article.date}</span> | <span>${article.category}</span>
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error loading articles:", error);
  });
