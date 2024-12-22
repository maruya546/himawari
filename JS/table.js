'use strict';

{
// テーブルを取得
const table = document.getElementById('vacant');

// ヘッダー行を作成
const thead = document.createElement('thead');
const tr = document.createElement('tr');
const days = ["月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"];

// 曜日の列を作成
days.forEach(day => {
  const th = document.createElement('th');
  th.textContent = day;
  th.classList.add('vacant-p');
  tr.appendChild(th);
});
thead.appendChild(tr);
table.appendChild(thead);

// データの配列
const data = [2, 0, 0, 0, 2, 2];  

// テーブル本体の作成
const tbody = document.createElement('tbody');

// 1行目の作成
const row1 = document.createElement('tr');
data.forEach(value => {
  const cell = document.createElement('td');
  cell.textContent = value === 0 ? '✕' : '〇';
  row1.appendChild(cell);
});
tbody.appendChild(row1);

// 2行目の作成
const row2 = document.createElement('tr');
data.forEach(value => {
  const cell = document.createElement('td');
  cell.textContent = `${value}人`;
  row2.appendChild(cell);
});
tbody.appendChild(row2);

// テーブルにtbodyを追加
table.appendChild(tbody);

// テーブルを任意の要素に追加（例えば、body）
document.body.appendChild

}
