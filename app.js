const ramenShops = [
    {
        name: "RAMEN GOTTSU",
        area: "練馬駅周辺",
        genres: ["濃厚系"],
        features: "動物系と魚介の濃厚ダブルスープ。カフェのようなおしゃれな外観で女性にも人気。食べログ100名店ノミネート。",
        recommendation: "GOTTSUらーめん（鶏・豚2種チャーシュー）",
        image: "🍜",
        mapKeyword: "RAMEN GOTTSU 練馬"
    },
    {
        name: "濃菜麺 井の庄",
        area: "練馬駅周辺",
        genres: ["濃厚系"],
        features: "どろどろ豚骨ベースに野菜の甘みと旨味が調和。太麺と野菜のシャキシャキ感が唯一無二。辛さ選択可。",
        recommendation: "辛辛濃菜麺（パクチートッピング推奨）",
        image: "🥬",
        mapKeyword: "濃菜麺 井の庄 練馬"
    },
    {
        name: "本格らぁめん 末廣",
        area: "練馬駅周辺",
        genres: ["あっさり系"],
        features: "醤油ベースにゴマたっぷり、にんにく効いたストレート低加水麺。レンガ調のおしゃれな外観が印象的。",
        recommendation: "末廣らーめん",
        image: "🧄",
        mapKeyword: "本格らぁめん 末廣 練馬"
    },
    {
        name: "麺屋 藤しろ 練馬店",
        area: "練馬駅周辺",
        genres: ["鶏白湯", "濃厚系"],
        features: "大山地鶏ベースの鶏白湯。コラーゲン豊富な白いスープが女性に大人気。低温調理チャーシューが絶品。",
        recommendation: "芳醇鶏白湯味玉ラーメン",
        image: "🐔",
        mapKeyword: "麺屋 藤しろ 練馬"
    },
    {
        name: "ぼにしも",
        area: "練馬駅周辺",
        genres: ["あっさり系"],
        features: "昔ながらの懐かしい味わい。鶏と魚介のバランスよいあっさりスープ。飽きのこない一杯。",
        recommendation: "チャーシューめん",
        image: "🍥",
        mapKeyword: "ぼにしも 練馬"
    },
    {
        name: "Heart Restaurant 安ざわ家 練馬店",
        area: "練馬駅周辺",
        genres: ["あっさり系", "ガッツリ系"], // Assuming from "Heart Restaurant" and typical "Anzawaya" profile usually being ginger soy sauce + heavy meat
        features: "長岡生姜醤油ラーメン系。生姜がキリッと効いたスープに、特大チャーシューが乗る生姜焼き定食も人気。",
        recommendation: "生姜醤油ラーメン",
        image: "🥩",
        mapKeyword: "Heart Restaurant 安ざわ家 練馬"
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
        const mapQuery = encodeURIComponent(shop.mapKeyword || (shop.name + " " + shop.area));
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
    if (message.includes('濃厚') || message.includes('こってり') || message.includes('どろどろ')) {
        return '濃厚系なら有名店「RAMEN GOTTSU」や、野菜たっぷりどろどろ豚骨の「濃菜麺 井の庄」がおすすめです！女性に人気の「麺屋 藤しろ」の鶏白湯も良いですよ。';
    } else if (message.includes('あっさり') || message.includes('さっぱり') || message.includes('昔ながら')) {
        return 'あっさり系がお好みなら、昔ながらの「ぼにしも」や、生姜が効いた「安ざわ家」、ゴマとニンニク香る「本格らぁめん 末廣」はいかがでしょうか？';
    } else if (message.includes('ガッツリ') || message.includes('お肉') || message.includes('たくさん') || message.includes('多く')) {
        return 'ガッツリ食べたい時は、特大チャーシューや生姜焼き定食も人気の「安ざわ家」や、ボリューム満点な「井の庄」の濃菜麺がイチオシです！';
    } else if (message.includes('鶏白湯')) {
        return '鶏白湯なら「麺屋 藤しろ」が大人気ですよ！コラーゲンたっぷりで絶品です。';
    } else {
        return 'なるほど！他に気になるキーワード（「濃厚」「あっさり」「鶏白湯」など）はありますか？';
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
