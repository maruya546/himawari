'use strict';

const tableData1 = [
  { type: 'basic', colspan: 4, label: '基本報酬' },
  { code: 'A6 1111', service: '通所型独自サービス１１', value: '1,798', unit: '１月' },
  { code: 'A6 1121', service: '通所型独自サービス１２', value: '3,621', unit: '１月' },
  { type: 'addition', colspan: 4, label: '加算一覧' },
  { code: 'A6 6011', service: '通所型独自サービス提供体制加算Ⅰ１<br>（事業対象者・要支援１）', value: '８８', unit: '１月' },
  { code: 'A6 6012', service: '通所型独自サービス提供体制加算Ⅰ２<br>（事業対象者・要支援２）', value: '１７６', unit: '１月' },
  { code: 'A6 6111', service: '通所型独自サービス処遇改善加算Ⅲ', value: '所定単位数の<br><span class="a2">80 / 1000</span>', unit: '１月' },
  { code: 'A6 5612', service: '通所型独自送迎減算', value: '&minus;４７', unit: '片道' }
];

const tableData2 = [
  { type: 'basic', colspan: 4, label: '基本報酬' },
  { code: '78 1441', service: '地域通所介護５１', value: '753', unit: '１回' },
  { code: '78 1442', service: '地域通所介護５２', value: '890', unit: '１回' },
  { code: '78 1443', service: '地域通所介護５３', value: '1,032', unit: '１回' },
  { code: '78 1444', service: '地域通所介護５４', value: '1,172', unit: '１回' },
  { code: '78 1445', service: '地域通所介護５５', value: '1,312', unit: '１回' },
  { type: 'addition', colspan: 4, label: '加算一覧' },
  { code: '78 5301', service: '地域通所介護入浴介助加算Ⅰ', value: '４０', unit: '１回' },
  { code: '78 6099', service: '地域通所介護サービス提供体制加算Ⅰ', value: '２２', unit: '１回' },
  { code: '78 6104', service: '地域通所介護処遇改善加算Ⅲ', value: '所定単位数の<br><span>80 / 1000</span>', unit: '１月' },
  { code: '78 5612', service: '地域通所介護送迎減算', value: '&minus;４７', unit: '片道' }
];

const createTable = (tableData, headingId) => {
  // テーブル作成
  const table = document.createElement('table');

  // ヘッダー行を作成
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  const headers = ['サービスコード', '基本報酬・加算名', '単位数', '算定回数'];

  headers.forEach(text => {
    const th = document.createElement('th');
    th.textContent = text;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // ボディ行を作成
  const tbody = document.createElement('tbody');

  tableData.forEach(rowData => {
    const tr = document.createElement('tr');

    if (rowData.type) {
      const td = document.createElement('td');
      td.colSpan = rowData.colspan;
      td.className = rowData.type;
      td.innerHTML = rowData.label;
      tr.appendChild(td);
    } else {
      const td1 = document.createElement('td');
      td1.innerHTML = rowData.code;
      tr.appendChild(td1);

      const td2 = document.createElement('td');
      td2.innerHTML = rowData.service;
      tr.appendChild(td2);

      const td3 = document.createElement('td');
      td3.innerHTML = rowData.value;
      tr.appendChild(td3);

      const td4 = document.createElement('td');
      td4.innerHTML = rowData.unit;
      tr.appendChild(td4);
    }

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);

  // 任意の場所にテーブルを追加
  const heading = document.getElementById(headingId);
  heading.insertAdjacentElement('afterend', table);
};

// テーブルを作成して追加
createTable(tableData1, 'support');  // 見出し1の下に追加
createTable(tableData2, 'remuneration');  // 見出し2の下に追加















{/* <table id="support">
<thead>
  <tr>
    <th>サービスコード</th>
    <th>基本報酬・加算名</th>
    <th>単位数</th>
    <th>算定回数</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td colspan="4" class="basic">基本報酬</td>
  </tr>
  <tr>
    <td>A6&ensp;1111</td>
    <td>通所型独自サービス１１</td>
    <td>1,798</td>
    <td>１月につき</td>
  </tr>
  <tr>
    <td>A6&ensp;1121</td>
    <td>通所型独自サービス１２</td>
    <td>3,621</td>
    <td>１月につき</td>
  </tr>
  <tr>
    <td colspan="4" class="addition">加算一覧</td>
  </tr>
  <tr>
    <td>A6&ensp;6011</td>
    <td>通所型独自サービス提供体制加算Ⅰ１<br>（事業対象者・要支援１）</td>
    <td>８８</td>
    <td>１月につき</td>
  </tr>
  <tr>
    <td>A6&ensp;6012</td>
    <td>通所型独自サービス提供体制加算Ⅰ２<br>（事業対象者・要支援２）</td>
    <td>１７６</td>
    <td>１月につき</td>
  </tr>
  <tr>
    <td>A6&ensp;6111</td>
    <td>通所型独自サービス処遇改善加算Ⅲ</td>
    <td>所定単位数の<br><span class="a2">80 / 1000</span></td>
    <td>１月につき</td>
  </tr>
  <tr>
    <td>A6&ensp;5612</td>
    <td>通所型独自送迎減算</td>
    <td>&minus;４７</td>
    <td>片道につき</td>
  </tr>
</tbody>
</table>  */}

{/* <table>
  <thead>
    <tr>
      <th>サービスコード</th>
      <th>基本報酬・加算名</th>
      <th>単位数</th>
      <th>算定回数</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4" class="basic">基本報酬</td>
    </tr>
    <tr>
      <td>78&ensp;1441</td>
      <td>地域通所介護５１</td>
      <td>753</td>
      <td>１回につき</td>
    </tr>
    <tr>
      <td>78&ensp;1442</td>
      <td>地域通所介護５２</td>
      <td>890</td>
      <td>１回につき</td>
    </tr>
    <tr>
      <td>78&ensp;1443</td>
      <td>地域通所介護５３</td>
      <td>1,032</td>
      <td>１回につき</td>
    </tr>
    <tr>
      <td>78&ensp;1444</td>
      <td>地域通所介護５４</td>
      <td>1,172</td>
      <td>１回につき</td>
    </tr>
    <tr>
      <td>78&ensp;1445</td>
      <td>地域通所介護５５</td>
      <td>1,312</td>
      <td>１回につき</td>
    </tr>
    <tr>
      <td colspan="4" class="addition">加算一覧</td>
    </tr>
    <tr>
      <td>78&ensp;5301</td>
      <td>地域通所介護入浴介助加算Ⅰ</td>
      <td>４０</td>
      <td>１回につき</td>
    </tr>
    <tr>
      <td>78&ensp;6099</td>
      <td>地域通所介護サービス提供体制加算Ⅰ</td>
      <td>２２</td>
      <td>１回につき</td>
    </tr>
    <tr>
      <td>78&ensp;6104</td>
      <td>地域通所介護処遇改善加算Ⅲ</td>
      <td>所定単位数の<br><span>80 / 1000</span></td>
      <td>１月につき</td>
    </tr>
    <tr>
      <td>78&ensp;5612</td>
      <td>地域通所介護送迎減算</td>
      <td>&minus;４７</td>
      <td>片道につき</td>
    </tr>
  </tbody>
</table> */}