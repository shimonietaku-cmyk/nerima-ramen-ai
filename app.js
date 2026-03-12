const ramenShops = [
    {
        name: "麺屋 ねりま",
        genres: ["濃厚系", "つけ麺"],
        features: "魚介と豚骨を長時間煮込んだ濃厚なWスープが自慢。",
        recommendation: "特製濃厚つけ麺",
        image: "🍜",
        area: "練馬駅周辺"
    },
    {
        name: "中華そば 桜台",
        genres: ["あっさり系"],
        features: "昔ながらのあっさりとした醤油ベースのスープ。自家製麺との相性抜群。",
        recommendation: "特製ワンタンメン",
        image: "🍥",
        area: "桜台"
    },
    {
        name: "らーめん江古田",
        genres: ["ガッツリ系"],
        features: "ボリューム満点のガッツリ系。無料トッピングで野菜やニンニクを増量可能。",
        recommendation: "豚マシラーメン",
        image: "🧄",
        area: "江古田"
    },
    {
        name: "鶏白湯 石神井",
        genres: ["濃厚系"],
        features: "国産鶏を贅沢に使用した、ポタージュのようにクリーミーで滑らかなスープ。",
        recommendation: "濃厚鶏白湯 味玉入り",
        image: "🥚",
        area: "石神井公園"
    },
    {
        name: "味噌らーめん 大泉",
        genres: ["濃厚系"],
        features: "数種類の味噌をブレンドし、炒め野菜の香ばしさが食欲をそそる一杯。",
        recommendation: "辛味噌らーめん",
        image: "🔥",
        area: "大泉学園"
    }
];

let currentFilter = 'all';

function renderShops() {
    const container = document.getElementById('shop-container');
    container.innerHTML = '';

    const filteredShops = currentFilter === 'all' 
        ? ramenShops 
        : ramenShops.filter(shop => shop.genres.includes(currentFilter));

    if (filteredShops.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:#666; margin-top:20px;">該当する店舗がありません。</p>';
        return;
    }

    filteredShops.forEach(shop => {
        const card = document.createElement('div');
        card.className = 'shop-card';

        // Google Maps Link Creation
        const mapQuery = encodeURIComponent(shop.name + " " + shop.area);
        const mapLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

        card.innerHTML = `
            <div class="shop-icon">${shop.image}</div>
            <div class="shop-content">
                <div class="shop-area">${shop.area}</div>
                <h2 class="shop-name"><a href="${mapLink}" target="_blank" rel="noopener noreferrer">${shop.name}</a></h2>
                <p class="shop-features">${shop.features}</p>
                <div class="shop-recommendation">
                    <span class="recommendation-label">おすすめ</span>
                    <span class="recommendation-menu">${shop.recommendation}</span>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

// AI Chat Logic
function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.classList.toggle('hidden');
    if (!chatWindow.classList.contains('hidden')) {
        document.getElementById('chat-input').focus();
    }
}

function handleChatKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (!message) return;

    appendMessage(message, 'user');
    input.value = '';

    // Mock AI Response
    setTimeout(() => {
        const response = generateAIResponse(message);
        appendMessage(response, 'ai');
    }, 500);
}

function appendMessage(text, sender) {
    const messagesContainer = document.getElementById('chat-messages');
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${sender}-message`;
    msgDiv.textContent = text;
    messagesContainer.appendChild(msgDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateAIResponse(message) {
    // Simple keyword matching for demo purposes
    if (message.includes('濃厚') || message.includes('こってり')) {
        return '濃厚系なら「麺屋 ねりま」の特製濃厚つけ麺や、「鶏白湯 石神井」、「味噌らーめん 大泉」がおすすめです！上の「濃厚系」ボタンで絞り込めますよ。';
    } else if (message.includes('あっさり') || message.includes('さっぱり')) {
        return 'あっさり系がお好みなら、「中華そば 桜台」はいかがでしょうか？昔ながらの醤油ベースです。';
    } else if (message.includes('ガッツリ') || message.includes('二郎') || message.includes('たくさん') || message.includes('多く')) {
        return 'ガッツリ食べたい時は「らーめん江古田」がイチオシです！野菜やニンニクの無料トッピングがあります。';
    } else if (message.includes('つけ麺')) {
        return 'つけ麺なら「麺屋 ねりま」がおすすめですよ！';
    } else {
        return 'なるほど！他に気になるキーワード（「濃厚」「あっさり」「ガッツリ」など）はありますか？';
    }
}

// Initial Setup
document.addEventListener('DOMContentLoaded', () => {
    // Initial Render
    renderShops();

    // Setup Filter Buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Update active class
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            // Re-render
            currentFilter = e.target.getAttribute('data-genre');
            renderShops();
        });
    });
});

// Service Worker Registration for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log('ServiceWorker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.error('ServiceWorker registration failed:', error);
            });
    });
}
