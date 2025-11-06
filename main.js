'use strict';

// テーブル関連の処理
{
  const table = document.getElementById('vacant');

  const thead = document.createElement('thead');
  const tr = document.createElement('tr');
  const days = ["月", "火", "水", "木", "金", "土"];

  days.forEach(day => {
    const th = document.createElement('th');
    th.textContent = day;
    th.classList.add('vacant-p');
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);

  const data = [1, 0, 1, 0, 1, 1];

  const tbody = document.createElement('tbody');

  const row1 = document.createElement('tr');
  data.forEach(value => {
    const cell = document.createElement('td');
    cell.textContent = value === 0 ? '✕' : '〇';
    row1.appendChild(cell);
  });
  tbody.appendChild(row1);

  const row2 = document.createElement('tr');
  data.forEach(value => {
    const cell = document.createElement('td');
    cell.textContent = `${value}人`;
    row2.appendChild(cell);
  });
  tbody.appendChild(row2);

  table.appendChild(tbody);
}

// スライドショー関連の処理
{
  const images = document.querySelectorAll('.scale img');
  const navContainer = document.querySelector('.nav-container');
  const ul = document.querySelector('.scale');
  const slides = ul.children;
  let currentIndex = 0;

  images.forEach((_, index) => {
    const button = document.createElement('button');
    button.addEventListener('click', () => {
      currentIndex = index;
      updateSlide();
    });
    navContainer.appendChild(button);
  });

  function updateSlide() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
    document.querySelectorAll('.nav-container button').forEach((button, index) => {
      button.style.backgroundColor = index === currentIndex ? '#000' : '#fff';
    });
  }

  function autoSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlide();
  }

  setInterval(autoSlide, 3000);
  updateSlide();
}


// 重要事項説明書群

const importantItems = [
  { label: "運営規定", file: "file/運営規定.pdf" },
  { label: "通所介護", file: "file/地域密着型通所介護重要事項説明書.pdf" },
  { label: "総合支援", file: "file/総合支援事業重要事項説明書.pdf" }
];

const container = document.querySelector(".important-links");

importantItems.forEach(item => {
  const link = document.createElement("a");
  link.href = item.file;
  link.className = "pdf-link";
  link.download = true;
  link.target = "_blank";

  const icon = document.createElement("img");
  icon.src = "img/pdf-icon.png";
  icon.alt = "pdfアイコン";
  icon.className = "pdf-icon";

  const text = document.createElement("span");
  text.className = "pdf-text";
  text.textContent = item.label;

  link.appendChild(icon);
  link.appendChild(text);
  container.appendChild(link);
});