const tripDays = {
  1: {
    date: '2026-08-06', label: 'DAY 1', title: '大宮から下呂へ',
    events: [
      { time:'09:00', title:'大宮を出発', type:'移動' },
      { time:'15:45', title:'名古屋南ささしまライブ着', price:5300, category:'transport' },
      { time:'15:52', title:'名鉄名古屋駅を出発', detail:'名鉄特急 新鵜沼行／特快　岩倉 → 江南 → 柏森 → 犬山 → 犬山遊園 → 新鵜沼', type:'鉄道' },
      { time:'16:23', title:'新鵜沼駅着', price:700, category:'transport' },
      { time:'16:40', title:'鵜沼駅を出発', detail:'高山本線 猪谷行 普通　坂祝 → 美濃太田 → 古井 → 中川辺 → 下麻生 → 上麻生 → 白川口 → 下油井 → 飛騨金山 → 焼石 → 下呂', type:'鉄道' },
      { time:'18:37', title:'下呂駅着', price:1340, category:'transport' },
      { time:'18:30', title:'湯あそびの宿 下呂観光ホテル チェックイン開始', detail:'18:30以降、到着時にチェックイン可能', price:4300, category:'hotel', type:'宿泊' }
    ]
  },
  2: {
    date: '2026-08-07', label: 'DAY 2', title: '高山と白川郷',
    events: [
      { time:'09:00', title:'下呂駅を出発', detail:'高山本線 高山行 普通　禅昌寺 → 飛騨萩原 → 上呂 → 飛騨宮田 → 飛騨小坂 → 渚 → 久々野 → 飛騨一ノ宮 → 高山', type:'鉄道' },
      { time:'10:03', title:'高山駅着', price:990, category:'transport' },
      { time:'10:15', title:'二四三屋 鍛冶橋店着', type:'食事' },
      { time:'10:40', title:'日枝神社着', detail:'高山濃飛バスセンターまで徒歩約24分', type:'観光' },
      { time:'12:10', title:'高山濃飛バスセンター発', type:'バス' },
      { time:'13:00', title:'白川郷着', price:2800, category:'transport', type:'観光' },
      { time:'16:35', title:'白川郷発', detail:'最終便', type:'バス', warning:'最終便のため乗り遅れ注意' },
      { time:'17:25', title:'高山濃飛バスセンター着', price:2800, category:'transport' },
      { time:'20:00', title:'KOMOREBI HOSTEL着', price:2713, category:'hotel', type:'宿泊' }
    ]
  },
  3: {
    date: '2026-08-08', label: 'DAY 3', title: '飛騨古川から郡上八幡へ',
    events: [
      { time:'07:40', title:'高山駅を出発', detail:'高山本線 猪谷行 普通　上枝 → 飛騨国府 → 飛騨古川', type:'鉄道' },
      { time:'07:59', title:'飛騨古川駅着', price:240, category:'transport' },
      { time:'08:10', title:'味処古川着', detail:'気多若宮神社まで徒歩約23分', type:'食事' },
      { time:'09:00', title:'気多若宮神社着', detail:'飛騨古川駅まで徒歩約15分', type:'観光' },
      { time:'09:57', title:'飛騨古川駅を出発', detail:'高山本線 高山行 普通', type:'鉄道' },
      { time:'10:14', title:'高山駅着', price:240, category:'transport' },
      { time:'11:00', title:'高山濃飛バスセンター発', type:'バス' },
      { time:'12:05', title:'郡上八幡インター着', price:2400, category:'transport', type:'観光' },
      { time:'17:25', title:'郡上八幡駅を出発', detail:'長良川鉄道 美濃太田行 普通　相生 → 深戸 → 赤池 → 美並苅安 → 福野 → 大矢 → みなみ子宝温泉 → 八坂 → 木尾 → 母野 → 洲原 → 湯の洞温泉口 → 梅山 → 美濃市 → 松森 → 関下有知 → 関市役所前 → 関 → せきてらす前 → 関口 → 関富岡 → 富加 → 加茂野 → 前平公園 → 美濃太田', type:'鉄道' },
      { time:'18:44', title:'美濃太田駅着', price:1380, category:'transport' },
      { time:'19:00', title:'Flycatホテル着', price:5483, category:'hotel', type:'宿泊' }
    ]
  },
  4: {
    date: '2026-08-09', label: 'DAY 4', title: '馬籠から岐阜市へ',
    events: [
      { time:'08:14', title:'美濃太田駅を出発', detail:'太多線 多治見行 普通　美濃川合 → 可児 → 下切 → 姫 → 根本 → 小泉 → 多治見', type:'鉄道' },
      { time:'08:47', title:'多治見駅着', price:330, category:'transport' },
      { time:'09:05', title:'多治見駅を出発', detail:'中央本線 中津川行 快速　土岐市 → 瑞浪 → 釜戸 → 武並 → 恵那 → 美乃坂本 → 中津川', type:'鉄道' },
      { time:'09:43', title:'中津川駅着', price:770, category:'transport' },
      { time:'09:55', title:'中津川駅前バス停発', detail:'馬籠行（落合経由）3番線', type:'バス' },
      { time:'10:20', title:'馬籠着', price:800, category:'transport', type:'観光' },
      { time:'12:50', title:'馬籠発', detail:'中津川駅前行（落合経由）', type:'バス' },
      { time:'13:15', title:'中津川駅前着', price:800, category:'transport' },
      { time:'13:46', title:'瑞浪駅着', detail:'中津川駅から中央本線 名古屋行 区間快速', price:510, category:'transport' },
      { time:'13:50', title:'あまから本店 瑞浪店着', type:'食事' },
      { time:'14:17', title:'瑞浪駅を出発', detail:'中央本線 名古屋行 区間快速　土岐市 → 多治見 → 高蔵寺 → 神領 → 春日井 → 勝川 → 新守山 → 大曽根 → 千種 → 鶴舞 → 金山 → 名古屋', type:'鉄道' },
      { time:'15:16', title:'名古屋駅着', price:990, category:'transport' },
      { time:'15:30', title:'名古屋駅を出発', detail:'東海道線 米原行 6番線 快速　尾張一宮 → 岐阜', type:'鉄道' },
      { time:'15:49', title:'岐阜駅着', price:480, category:'transport' },
      { time:'16:10', title:'あんやなぎ着', type:'立ち寄り' },
      { time:'17:15', title:'ネットカフェ Loop着', type:'宿泊', warning:'料金未入力' }
    ]
  },
  5: {
    date: '2026-08-10', label: 'DAY 5', title: '岐阜から大宮へ帰宅',
    events: [
      { time:'09:32', title:'御菓子処 甲屋本舗着', detail:'Loopから徒歩約32分／岐阜駅まで徒歩約36分', type:'買い物' },
      { time:'12:53', title:'岐阜駅を出発', detail:'東海道線 豊橋行 快速', type:'鉄道' },
      { time:'13:28', title:'名古屋駅着', price:480, category:'transport' },
      { time:'13:31', title:'名古屋駅を出発', detail:'東海道線 豊橋行 2番線 快速　金山 → 共和 → 大府 → 刈谷 → 安城 → 岡崎 → 幸田 → 蒲郡 → 豊橋', type:'鉄道' },
      { time:'14:27', title:'豊橋駅着', price:1340, category:'transport' },
      { time:'14:44', title:'豊橋駅を出発', detail:'東海道線 浜松行 8番線 普通　二川 → 新所原 → 鷲津 → 新居町 → 弁天島 → 舞阪 → 高塚 → 浜松', type:'鉄道' },
      { time:'15:18', title:'浜松駅着', price:680, category:'transport' },
      { time:'15:29', title:'浜松駅を出発', detail:'東海道線 熱海行 2番線 普通　天竜川 → 豊田町 → 磐田 → 御厨 → 袋井 → 愛野 → 掛川 → 菊川 → 金谷 → 島田 → 六合 → 藤枝 → 西焼津 → 焼津 → 用宗 → 安倍川 → 静岡', type:'鉄道' },
      { time:'16:42', title:'静岡駅着', price:1340, category:'transport' },
      { time:'16:43', title:'静岡駅を出発', detail:'東海道線 熱海行 1番線 普通　東静岡 → 草薙 → 清水 → 興津 → 由比 → 蒲原 → 新蒲原 → 富士川 → 富士 → 吉原 → 東田子の浦 → 原 → 片浜 → 沼津 → 三島 → 函南 → 熱海', type:'鉄道' },
      { time:'17:59', title:'熱海駅着', price:1340, category:'transport' },
      { time:'18:12', title:'熱海駅を出発', detail:'東海道線 宇都宮行 4番線 普通　湯河原 → 真鶴 → 根府川 → 早川 → 小田原 → 鴨宮 → 国府津 → 二宮 → 大磯 → 平塚 → 茅ヶ崎 → 辻堂 → 藤沢 → 大船 → 戸塚 → 横浜 → 川崎 → 品川 → 新橋 → 東京', type:'鉄道' },
      { time:'20:05', title:'東京駅着', price:2090, category:'transport' },
      { time:'20:17', title:'東京駅を出発', detail:'高崎線 高崎行 7番線 普通　上野 → 尾久 → 赤羽 → 浦和 → さいたま新都心 → 大宮', type:'鉄道' },
      { time:'20:49', title:'大宮駅着', price:619, category:'transport', type:'帰宅' }
    ]
  }
};

const tripDayMeta = {
  1: { weather: { place: '下呂', latitude: 35.8059, longitude: 137.2441 }, places: [
    { time: '09:00', name: '大宮駅', note: '出発地点' },
    { time: '15:45', name: 'ささしまライブ駅', note: '名古屋到着地点' },
    { time: '15:52', name: '名鉄名古屋駅' },
    { time: '16:23', name: '新鵜沼駅' },
    { time: '16:40', name: '鵜沼駅' },
    { time: '18:37', name: '下呂駅' },
    { time: '18:30～', name: '湯あそびの宿 下呂観光ホテル' }
  ]},
  2: { weather: { place: '高山・白川郷', latitude: 36.1408, longitude: 137.2510 }, places: [
    { time: '09:00', name: '下呂駅' }, { time: '10:03', name: '高山駅' },
    { time: '10:15', name: '二四三屋 鍛冶橋店' }, { time: '10:40', name: '飛騨山王宮 日枝神社' },
    { time: '12:10', name: '高山濃飛バスセンター' }, { time: '13:00', name: '白川郷 荻町合掌造り集落' },
    { time: '20:00', name: 'KOMOREBI HOSTEL 高山' }
  ]},
  3: { weather: { place: '飛騨古川・郡上八幡', latitude: 36.0513, longitude: 136.9634 }, places: [
    { time: '07:40', name: '高山駅' }, { time: '07:59', name: '飛騨古川駅' },
    { time: '08:10', name: '味処古川' }, { time: '09:00', name: '気多若宮神社' },
    { time: '12:05', name: '郡上八幡インターチェンジ' }, { time: '17:25', name: '郡上八幡駅' },
    { time: '18:44', name: '美濃太田駅' }, { time: '19:00', name: 'Fly Cat Hotel 美濃加茂' }
  ]},
  4: { weather: { place: '馬籠・岐阜', latitude: 35.4233, longitude: 136.7607 }, places: [
    { time: '08:14', name: '美濃太田駅' }, { time: '08:47', name: '多治見駅' },
    { time: '09:43', name: '中津川駅' }, { time: '10:20', name: '馬籠宿' },
    { time: '13:46', name: '瑞浪駅' }, { time: '13:50', name: 'あまから本店 瑞浪店' },
    { time: '15:49', name: '岐阜駅' }, { time: '16:10', name: 'あんやなぎ 岐阜' },
    { time: '17:15', name: 'ネットカフェ Loop 岐阜' }
  ]},
  5: { weather: { place: '岐阜・移動日', latitude: 35.4233, longitude: 136.7607 }, places: [
    { time: '09:32', name: '御菓子処 甲屋本舗' }, { time: '12:53', name: '岐阜駅' },
    { time: '13:28', name: '名古屋駅' }, { time: '14:27', name: '豊橋駅' },
    { time: '15:18', name: '浜松駅' }, { time: '16:42', name: '静岡駅' },
    { time: '17:59', name: '熱海駅' }, { time: '20:05', name: '東京駅' }, { time: '20:49', name: '大宮駅' }
  ]}
};

const checklistItems = ['財布・現金', 'スマートフォン', '充電器・モバイルバッテリー', '着替え', 'タオル', '雨具', '常備薬', '予約画面・乗車券'];
let activeDay = 1;

const yen = value => `${value.toLocaleString('ja-JP')}円`;

function renderDay(dayNumber) {
  activeDay = Number(dayNumber);
  const day = tripDays[activeDay];
  document.querySelectorAll('.day-tab').forEach(btn => btn.classList.toggle('is-active', Number(btn.dataset.day) === activeDay));
  document.getElementById('dayLabel').textContent = day.label;
  document.getElementById('dayTitle').textContent = day.title;
  const dayTotal = day.events.reduce((sum, e) => sum + (e.price || 0), 0);
  document.getElementById('dayPrice').textContent = yen(dayTotal);

  document.getElementById('timeline').innerHTML = day.events.map(event => `
    <article class="timeline-item">
      <div class="timeline-time">${event.time}</div>
      <span class="timeline-dot" aria-hidden="true"></span>
      <div class="timeline-card">
        <h3>${event.title}</h3>
        ${event.detail ? `<p>${event.detail}</p>` : ''}
        <div class="timeline-meta">
          ${event.type ? `<span class="badge">${event.type}</span>` : ''}
          ${event.price ? `<span class="badge badge--price">${yen(event.price)}</span>` : ''}
          ${event.warning ? `<span class="badge badge--warning">⚠ ${event.warning}</span>` : ''}
        </div>
        ${getMapPlace(activeDay, event.title) ? `<div class="timeline-actions"><a class="timeline-map-button" href="${googleMapsUrl(getMapPlace(activeDay, event.title).name)}" target="_blank" rel="noopener">🗺️ マップ</a></div>` : ''}
      </div>
    </article>`).join('');
  renderWeather(activeDay);
  renderMap(activeDay);
  window.scrollTo({ top: document.querySelector('.day-tabs').offsetTop, behavior: 'smooth' });
}

function googleMapsUrl(placeName) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(placeName)}`;
}

function getMapPlace(dayNumber, eventTitle) {
  const places = tripDayMeta[dayNumber]?.places || [];
  const normalized = eventTitle.replace(/(を出発|着|チェックイン開始|発)$/, '');
  return places.find(place => normalized.includes(place.name) || place.name.includes(normalized));
}

function renderMap(dayNumber) {
  const day = tripDays[dayNumber];
  const places = tripDayMeta[dayNumber]?.places || [];
  document.getElementById('mapDayTitle').textContent = `${day.label}の目的地`;
  document.getElementById('mapList').innerHTML = places.map(place => `
    <article class="map-item">
      <div class="map-item__info">
        <span class="map-item__time">${place.time}</span>
        <h3>${escapeHtml(place.name)}</h3>
        ${place.note ? `<p>${escapeHtml(place.note)}</p>` : ''}
      </div>
      <a class="map-button" href="${googleMapsUrl(place.name)}" target="_blank" rel="noopener">開く</a>
    </article>`).join('');
}

function weatherCodeInfo(code) {
  if (code === 0) return { icon: '☀️', text: '快晴' };
  if ([1, 2].includes(code)) return { icon: '🌤️', text: '晴れ時々くもり' };
  if (code === 3) return { icon: '☁️', text: 'くもり' };
  if ([45, 48].includes(code)) return { icon: '🌫️', text: '霧' };
  if ([51, 53, 55, 56, 57].includes(code)) return { icon: '🌦️', text: '霧雨' };
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return { icon: '☔', text: '雨' };
  if ([71, 73, 75, 77, 85, 86].includes(code)) return { icon: '❄️', text: '雪' };
  if ([95, 96, 99].includes(code)) return { icon: '⛈️', text: '雷雨' };
  return { icon: '🌥️', text: '天気' };
}

async function renderWeather(dayNumber) {
  const day = tripDays[dayNumber];
  const weather = tripDayMeta[dayNumber]?.weather;
  if (!weather) return;

  document.getElementById('weatherPlace').textContent = weather.place;
  document.getElementById('weatherStatus').textContent = `${day.date.replaceAll('-', '/')}の予報を取得中…`;
  document.getElementById('weatherStatus').classList.remove('weather-error');

  const params = new URLSearchParams({
    latitude: weather.latitude, longitude: weather.longitude,
    daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max',
    timezone: 'Asia/Tokyo', start_date: day.date, end_date: day.date
  });

  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);
    if (!response.ok) throw new Error('weather request failed');
    const data = await response.json();
    if (!data.daily?.time?.length) throw new Error('forecast unavailable');
    if (activeDay !== Number(dayNumber)) return;

    const info = weatherCodeInfo(data.daily.weather_code[0]);
    const max = Math.round(data.daily.temperature_2m_max[0]);
    const min = Math.round(data.daily.temperature_2m_min[0]);
    const rain = Math.round(data.daily.precipitation_probability_max[0] ?? 0);
    document.getElementById('weatherIcon').textContent = info.icon;
    document.getElementById('weatherTemp').textContent = `${max}℃`;
    document.getElementById('weatherSummary').textContent = info.text;
    document.getElementById('weatherRange').textContent = `${max}℃ / ${min}℃`;
    document.getElementById('weatherRain').textContent = `${rain}%`;
    document.getElementById('weatherStatus').textContent = rain >= 50 ? '雨具を持っていくと安心です' : 'Open-Meteoの最新予報';
  } catch (error) {
    if (activeDay !== Number(dayNumber)) return;
    document.getElementById('weatherIcon').textContent = '—';
    document.getElementById('weatherTemp').textContent = '--℃';
    document.getElementById('weatherSummary').textContent = '取得不可';
    document.getElementById('weatherRange').textContent = '-- / --';
    document.getElementById('weatherRain').textContent = '--%';
    const status = document.getElementById('weatherStatus');
    status.textContent = '通信できる場所で再読み込みしてください';
    status.classList.add('weather-error');
  }
}

function renderBudget() {
  const all = Object.values(tripDays).flatMap(day => day.events);
  const transport = all.filter(e => e.category === 'transport').reduce((s,e) => s + e.price, 0);
  const hotel = all.filter(e => e.category === 'hotel').reduce((s,e) => s + e.price, 0);
  const total = transport + hotel;
  document.getElementById('transportTotal').textContent = yen(transport);
  document.getElementById('hotelTotal').textContent = yen(hotel);
  document.getElementById('grandTotal').textContent = yen(total);
  document.getElementById('totalPriceTop').textContent = yen(total);
}

function renderChecklist() {
  const saved = JSON.parse(localStorage.getItem('gifuChecklist') || '{}');
  const root = document.getElementById('checklist');
  root.innerHTML = checklistItems.map((item, i) => `
    <label class="check-item ${saved[i] ? 'is-done' : ''}">
      <input type="checkbox" data-index="${i}" ${saved[i] ? 'checked' : ''}>
      <span>${item}</span>
    </label>`).join('');
  root.addEventListener('change', e => {
    if (!e.target.matches('input[type="checkbox"]')) return;
    const state = JSON.parse(localStorage.getItem('gifuChecklist') || '{}');
    state[e.target.dataset.index] = e.target.checked;
    localStorage.setItem('gifuChecklist', JSON.stringify(state));
    e.target.closest('.check-item').classList.toggle('is-done', e.target.checked);
  });
}

function showCurrentInfo() {
  const now = new Date();
  const today = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
  const match = Object.entries(tripDays).find(([,day]) => day.date === today);
  const notice = document.getElementById('nextSchedule');
  if (!match) return;
  const [dayNumber, day] = match;
  activeDay = Number(dayNumber);
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const next = day.events.find(e => {
    const [h,m] = e.time.split(':').map(Number);
    return h * 60 + m >= currentMinutes;
  });
  notice.classList.add('is-visible');
  notice.innerHTML = next
    ? `<strong>次の予定：${next.time} ${next.title}</strong>今日は ${day.label}「${day.title}」です。`
    : `<strong>本日の予定は終了です</strong>${day.label} おつかれさまでした。`;
  renderDay(activeDay);
}

function setupMemo() {
  const memo = document.getElementById('tripMemo');
  const status = document.getElementById('saveStatus');
  memo.value = localStorage.getItem('gifuTripMemo') || '';
  let timer;
  memo.addEventListener('input', () => {
    clearTimeout(timer);
    status.textContent = '保存中…';
    timer = setTimeout(() => {
      localStorage.setItem('gifuTripMemo', memo.value);
      status.textContent = '保存しました';
    }, 350);
  });
}


const expenseCategoryLabels = {
  food: '食事',
  souvenir: 'お土産',
  transport: '交通',
  other: 'その他'
};

function getExpenses() {
  try {
    const expenses = JSON.parse(localStorage.getItem('gifuExpenses') || '[]');
    return Array.isArray(expenses) ? expenses : [];
  } catch {
    return [];
  }
}

function saveExpenses(expenses) {
  localStorage.setItem('gifuExpenses', JSON.stringify(expenses));
}

function renderExpenses() {
  const expenses = getExpenses();
  const totals = { food: 0, souvenir: 0, transport: 0, other: 0 };
  expenses.forEach(item => { totals[item.category] = (totals[item.category] || 0) + item.amount; });
  const total = Object.values(totals).reduce((sum, value) => sum + value, 0);

  document.getElementById('actualExpenseTotal').textContent = yen(total);
  document.getElementById('foodExpense').textContent = yen(totals.food);
  document.getElementById('souvenirExpense').textContent = yen(totals.souvenir);
  document.getElementById('actualTransportExpense').textContent = yen(totals.transport);
  document.getElementById('otherExpense').textContent = yen(totals.other);

  const list = document.getElementById('expenseList');
  if (!expenses.length) {
    list.innerHTML = '<div class="expense-empty">まだ支出は登録されていません。</div>';
    return;
  }

  list.innerHTML = [...expenses].reverse().map(item => `
    <article class="expense-item">
      <div>
        <div class="expense-item__top">
          <h3>${escapeHtml(item.name)}</h3>
          <span class="badge">${expenseCategoryLabels[item.category] || 'その他'}</span>
        </div>
        <p>DAY ${item.day}・${tripDays[item.day].date.replace('2026-', '').replace('-', '/')}</p>
      </div>
      <div class="expense-item__right">
        <strong>${yen(item.amount)}</strong>
        <button class="expense-delete" type="button" data-expense-id="${item.id}">削除</button>
      </div>
    </article>`).join('');
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  }[char]));
}

function setupExpenses() {
  const form = document.getElementById('expenseForm');
  document.getElementById('expenseDay').value = String(activeDay);
  form.addEventListener('submit', event => {
    event.preventDefault();
    const name = document.getElementById('expenseName').value.trim();
    const amount = Number(document.getElementById('expenseAmount').value);
    const day = Number(document.getElementById('expenseDay').value);
    const category = document.getElementById('expenseCategory').value;
    if (!name || !Number.isInteger(amount) || amount <= 0) return;

    const expenses = getExpenses();
    expenses.push({ id: `${Date.now()}-${Math.random().toString(16).slice(2)}`, name, amount, day, category });
    saveExpenses(expenses);
    form.reset();
    document.getElementById('expenseDay').value = String(activeDay);
    renderExpenses();
  });

  document.getElementById('expenseList').addEventListener('click', event => {
    const button = event.target.closest('[data-expense-id]');
    if (!button) return;
    const remaining = getExpenses().filter(item => item.id !== button.dataset.expenseId);
    saveExpenses(remaining);
    renderExpenses();
  });
}

function setupMainNavigation() {
  document.querySelectorAll('.bottom-nav__button').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.bottom-nav__button').forEach(item => item.classList.toggle('is-active', item === button));
      document.querySelectorAll('.app-view').forEach(view => view.classList.toggle('is-active', view.id === button.dataset.view));
      if (button.dataset.view === 'expenseView') {
        document.getElementById('expenseDay').value = String(activeDay);
        renderExpenses();
      }
      if (button.dataset.view === 'mapView') renderMap(activeDay);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

function setupTheme() {
  const savedTheme = localStorage.getItem('gifuTheme');
  if (savedTheme === 'dark') document.body.classList.add('dark');
  const button = document.getElementById('themeButton');
  const sync = () => button.textContent = document.body.classList.contains('dark') ? '☀' : '☾';
  sync();
  button.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('gifuTheme', document.body.classList.contains('dark') ? 'dark' : 'light');
    sync();
  });
}

document.querySelectorAll('.day-tab').forEach(btn => btn.addEventListener('click', () => renderDay(btn.dataset.day)));
document.getElementById('resetButton').addEventListener('click', () => {
  if (!confirm('チェック状況・メモ・支出記録・テーマ設定をリセットしますか？')) return;
  localStorage.removeItem('gifuChecklist');
  localStorage.removeItem('gifuTripMemo');
  localStorage.removeItem('gifuTheme');
  localStorage.removeItem('gifuExpenses');
  location.reload();
});

renderBudget();
renderChecklist();
setupMemo();
setupExpenses();
setupMainNavigation();
renderExpenses();
setupTheme();
renderDay(1);
showCurrentInfo();
