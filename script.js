const data = [
  {
    title: "शादी के दिन लड़की ने फेरे लेने से किया इनकार",
    image: "images/shadi_farar.jpg",
    date: "2025-06-08",
    author: "City News Reporter",
    category: "rajneeti",
    excerpt: "शादी के समय लड़की ने अचानक शादी से इनकार कर दिया, जिससे दूल्हे और परिवार में हड़कंप मच गया।"
  },
  {
    title: "कोर्ट ने आरोपी को सुनाई 5 साल की सजा",
    image: "images/court_saza.jpg",
    date: "2025-06-08",
    author: "City News Reporter",
    category: "crime",
    excerpt: "पॉक्सो एक्ट के तहत कोर्ट ने आरोपी को सजा और जुर्माना दोनों दिया। जानिए पूरी खबर।"
  },
  {
    title: "तेज रफ्तार कार ने मचाई तबाही",
    image: "images/car_accident.jpg",
    date: "2025-06-08",
    author: "City News Reporter",
    category: "local-news",
    excerpt: "बीती रात एक कार हादसे का शिकार हो गई, जिसमें गाड़ी पूरी तरह क्षतिग्रस्त हो गई।"
  },
  {
    title: "हरियाणा में फेरे के समय टूटी शादी",
    image: "images/haryana_shadi.jpg",
    date: "2025-06-08",
    author: "City News Reporter",
    category: "rajneeti",
    excerpt: "दूल्हे की गर्लफ्रेंड मंडप में पहुंच गई और हंगामा मचा दिया। दुल्हन ने शादी से मना कर दिया।"
  },
  {
    title: "गाँव में लोगों को दी गई सरकारी योजना की जानकारी",
    image: "images/sarkari_yojna.jpg",
    date: "2025-06-08",
    author: "City News Reporter",
    category: "samaj",
    excerpt: "सरकार की नई योजनाओं की जानकारी देने के लिए गाँव में मीटिंग आयोजित की गई।"
  }
];

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
