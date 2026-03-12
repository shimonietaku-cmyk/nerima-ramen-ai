const ramenShops = [
  // ===== 石神井公園エリア =====
  {
    name: "麺処 井の庄",
    area: "石神井公園駅",
    genres: ["濃厚系"],
    features: "食べログTOKYO百名店。辛辛魚つけ麺が看板。豚と魚介の濃厚スープに唐辛子が絡む。カップラーメンにもなった超有名店。",
    recommendation: "辛辛魚つけ麺",
    mapKeyword: "麺処 井の庄 石神井公園",
    image: "🌶️"
  },
  {
    name: "らぁ麺 和來",
    area: "石神井公園駅",
    genres: ["まぜそば"],
    features: "トリュフ薫る漬け卵黄のまぜそばが絶品。中太ツルツルもちもち麺が自慢。丁寧に仕上げた淡麗スープも人気。",
    recommendation: "まぜそば〜トリュフ薫る漬け卵黄添え〜",
    mapKeyword: "らぁ麺 和來 石神井公園",
    image: "🥚"
  },
  {
    name: "ラーメン春樹 石神井公園店",
    area: "石神井公園駅",
    genres: ["家系"],
    features: "石神井公園の家系ラーメン。濃厚な魚介豚骨醤油スープ。麺の硬さ・味の濃さ・油の量を細かくカスタマイズ可能。深夜まで営業。",
    recommendation: "ラーメン（麺かため・味普通）",
    mapKeyword: "ラーメン春樹 石神井公園",
    image: "🍜"
  },
  {
    name: "石神井とら",
    area: "石神井公園駅・練馬高野台駅",
    genres: ["つけ麺"],
    features: "昭和の記憶を感じる現代の正統派つけ麺。甘酢が効いた動物系乾物系スープ。酸味好きにはたまらない一杯。",
    recommendation: "つけ麺",
    mapKeyword: "石神井とら 石神井公園",
    image: "🐅"
  },
  {
    name: "ラーメンハウスなか",
    area: "石神井公園駅",
    genres: ["あっさり系"],
    features: "ワンコイン500円で食べられる昔懐かしい醤油ラーメン。細麺・太麺から選択可。追加トッピングも50円から。",
    recommendation: "醤油ラーメン",
    mapKeyword: "ラーメンハウスなか 石神井公園",
    image: "🍥"
  },

  // ===== 大泉学園エリア =====
  {
    name: "中華そば 座座",
    area: "大泉学園駅",
    genres: ["あっさり系"],
    features: "2021年開業。バラ先軟骨のトロトロ煮（バイカ）が乗った個性派ラーメン。黒いスープなのにコクがあって甘みも感じる。",
    recommendation: "バイカ中華そば",
    mapKeyword: "中華そば 座座 大泉学園",
    image: "🥩"
  },
  {
    name: "麺亭 英（はなぶさ）",
    area: "大泉学園駅",
    genres: ["あっさり系"],
    features: "2025年オープンの新店。大泉学園駅北口から徒歩12分。11時〜15時・18時〜20時の営業。こだわりの醤油ラーメン。",
    recommendation: "醤油ラーメン",
    mapKeyword: "麺亭 英 大泉学園",
    image: "🍜"
  },
  {
    name: "らーめん こうすけ",
    area: "大泉学園駅",
    genres: ["あっさり系"],
    features: "路地裏に佇む大泉の名店。透明感ある醤油スープと細麺のバランスが絶妙。塩ラーメンが特に人気で小丼との組み合わせも◎",
    recommendation: "塩ラーメン＋小丼",
    mapKeyword: "らーめん こうすけ 大泉学園",
    image: "🧂"
  },
  {
    name: "睡大虎",
    area: "大泉学園駅",
    genres: ["その他"],
    features: "石神井公園と大泉学園のほぼ中間に位置する老舗。グツグツ熱々の土鍋ラーメンが名物。ボリューム満点で現業系・学生に人気。",
    recommendation: "土鍋塩ラーメン",
    mapKeyword: "睡大虎 大泉学園",
    image: "🍲"
  },
  {
    name: "丸源ラーメン 大泉学園店",
    area: "大泉学園駅",
    genres: ["濃厚系"],
    features: "肉そばが看板メニューのチェーン。豚骨鶏ガラの濃厚スープに甘辛肉の組み合わせ。平日・土日祝10:30〜25:00まで営業。",
    recommendation: "肉そば",
    mapKeyword: "丸源ラーメン 大泉学園",
    image: "🍖"
  },

  // ===== 練馬駅エリア =====
  {
    name: "RAMEN GOTTSU",
    area: "練馬駅",
    genres: ["濃厚系"],
    features: "カフェのようなおしゃれな外観で女性にも大人気。魚介豚骨の濃密白湯スープ。食べログ高評価の実力店。",
    recommendation: "GOTTSUらーめん（鶏・豚2種チャーシュー）",
    mapKeyword: "RAMEN GOTTSU 練馬",
    image: "🍜"
  },
  {
    name: "濃菜麺 井の庄 練馬店",
    area: "練馬駅",
    genres: ["濃厚系"],
    features: "石神井公園の名店の系列。野菜たっぷりの濃厚スープ。辛さ調節可能な辛辛濃菜麺が名物。",
    recommendation: "辛辛濃菜麺",
    mapKeyword: "濃菜麺 井の庄 練馬",
    image: "🥬"
  },
  {
    name: "ぼにしも",
    area: "練馬駅",
    genres: ["あっさり系"],
    features: "練馬駅から徒歩4分。昔ながらの懐かしい鶏と魚介のあっさりスープ。L字カウンター11席のみの小さなお店。",
    recommendation: "チャーシューめん",
    mapKeyword: "ぼにしも 練馬",
    image: "🍥"
  },
  {
    name: "ドリルマン",
    area: "練馬駅",
    genres: ["あっさり系"],
    features: "練馬駅から徒歩2分。国産素材・秋田県産醤油にこだわるレンガ調のスタイリッシュな店。煮干し系が絶品。",
    recommendation: "特製中華そば（煮干し）",
    mapKeyword: "ドリルマン 練馬",
    image: "🐟"
  },
  {
    name: "博多水炊きらーめん うかんむり",
    area: "練馬駅",
    genres: ["鶏白湯"],
    features: "博多水炊きの製法を元にした鶏スープ。化学調味料不使用。鶏つみれと柚子つくね入りの「よくばり水炊き」が人気。",
    recommendation: "よくばり水炊き中華そば",
    mapKeyword: "うかんむり 練馬",
    image: "🐔"
  },
  {
    name: "会津喜多方ラーメン 小法師 練馬中央店",
    area: "練馬駅",
    genres: ["あっさり系"],
    features: "平打ち熟成多加水麺の喜多方ラーメン。トロトロチャーシューとモチモチ麺。和風でおしゃれな店内。",
    recommendation: "喜多方ラーメン",
    mapKeyword: "小法師 練馬",
    image: "🍜"
  },
  {
    name: "麺 酒 やまの",
    area: "練馬駅",
    genres: ["まぜそば"],
    features: "魚粉の香りが豊かな王道まぜそば。追い飯無料で最後まで楽しめる。常に行列ができる練馬の人気店。",
    recommendation: "まぜそば（追い飯付き）",
    mapKeyword: "麺 酒 やまの 練馬",
    image: "🍚"
  },
  {
    name: "安ざわ家 練馬店",
    area: "練馬駅",
    genres: ["あっさり系"],
    features: "生姜香る醤油ラーメンととろけるチャーシューが名物。チャーシューエッグ定食がコスパ抜群。",
    recommendation: "中華そば＋チャーシューエッグ定食",
    mapKeyword: "安ざわ家 練馬",
    image: "🍳"
  },
  {
    name: "神兵衛",
    area: "練馬駅",
    genres: ["濃厚系"],
    features: "12時間煮込んだベジポタスープがクセになる一杯。珍しい野菜系濃厚スープ。全部のせにはチャーシュー・煮卵・海苔・ネギが乗る。",
    recommendation: "ベジポタらーめん（全部のせ）",
    mapKeyword: "神兵衛 練馬",
    image: "🍅"
  },
  {
    name: "麺屋 藤しろ 練馬店",
    area: "練馬駅",
    genres: ["鶏白湯"],
    features: "大山地鶏ベースの鶏白湯。コラーゲン豊富で女性に大人気。低温調理チャーシューが絶品。",
    recommendation: "芳醇鶏白湯味玉ラーメン",
    mapKeyword: "麺屋 藤しろ 練馬",
    image: "🐔"
  },

  // ===== 桜台エリア =====
  {
    name: "桜台らぁ麺 美志満",
    area: "桜台駅",
    genres: ["あっさり系"],
    features: "練馬駅から徒歩10分。イワシ・シイタケ・昆布から旨味が出た黄金のスープ。カウンター7席のみの小さな名店。",
    recommendation: "魚介塩チャーシュー麺",
    mapKeyword: "桜台らぁ麺 美志満 桜台",
    image: "🧂"
  },
  {
    name: "中華そば べんてん",
    area: "練馬区内（桜台周辺）",
    genres: ["あっさり系"],
    features: "ラーメンデータベース練馬区ランキング1位。練馬区が誇る最高峰の中華そば。行列必至の超人気店。",
    recommendation: "中華そば",
    mapKeyword: "中華そば べんてん 練馬",
    image: "🍜"
  },
  {
    name: "ふくちゃん",
    area: "練馬・桜台周辺",
    genres: ["濃厚系"],
    features: "このご時世に700円で食べられるとんこつランチが話題。とんこつラーメン＋とろろ丼セットがコスパ抜群。",
    recommendation: "とんこつラーメン＋とろろ丼セット",
    mapKeyword: "ふくちゃん 練馬",
    image: "🐷"
  },

  // ===== 中村橋・富士見台エリア =====
  {
    name: "富士見台 大勝軒",
    area: "富士見台駅",
    genres: ["つけ麺"],
    features: "富士見台駅から98m。地元住民に長く愛される名店。東京豚骨醤油の王道つけ麺。中太麺のコシとスープの相性が抜群。",
    recommendation: "つけ麺（特製）",
    mapKeyword: "富士見台 大勝軒",
    image: "🥢"
  },
  {
    name: "麺処 盛盛",
    area: "富士見台駅",
    genres: ["濃厚系"],
    features: "富士見台の実力派として注目される伸び盛りの店。動物系出汁と魚介の香りが重なる深い味わい。チャーシューの仕上がりが特に高評価。",
    recommendation: "特製らーめん",
    mapKeyword: "麺処 盛盛 富士見台",
    image: "🍜"
  },
  {
    name: "うまいエクスプレス",
    area: "富士見台駅",
    genres: ["あっさり系"],
    features: "富士見台駅から66m。キレのある醤油の旨味が後を引く昔ながらの中華そば。細麺がスープをよく吸う。毎日食べたくなる味。",
    recommendation: "中華そば",
    mapKeyword: "うまいエクスプレス 富士見台",
    image: "🚂"
  },

  // ===== 練馬高野台エリア =====
  {
    name: "麺処 穂し乃",
    area: "練馬高野台駅・光が丘周辺",
    genres: ["濃厚系"],
    features: "煮干しと大量の鶏がらのWスープが絶品。光が丘エリアで行列ができる人気店。遠方からも訪れるファンがいる。",
    recommendation: "特製ラーメン",
    mapKeyword: "麺処 穂し乃 光が丘",
    image: "🐟"
  },

  // ===== その他練馬区内の名店 =====
  {
    name: "麺や金時",
    area: "江古田駅・小竹向原駅周辺",
    genres: ["その他"],
    features: "ミシュランビブグルマン3年連続選出。マツコの知らない世界で紹介された汁なし担々麺が看板。透き通った塩らぁ麺も絶品。",
    recommendation: "汁なし担々麺 / 味玉塩らぁ麺",
    mapKeyword: "麺や金時 江古田",
    image: "🥇"
  },
  {
    name: "ラーメン屋ジョン",
    area: "武蔵関駅周辺",
    genres: ["濃厚系"],
    features: "ラーメンデータベース練馬区ランキング3位。西武新宿線・武蔵関駅北口。濃厚スープが評判の実力店。",
    recommendation: "特製ラーメン",
    mapKeyword: "ラーメン屋ジョン 武蔵関",
    image: "🍜"
  },
  {
    name: "神也 kaminari",
    area: "東武練馬駅",
    genres: ["あっさり系"],
    features: "2020年オープン。厳選素材と丁寧な調理の鶏系スープ。遠方からもファンが訪れる隠れた名店。",
    recommendation: "鶏塩らーめん",
    mapKeyword: "神也 kaminari 東武練馬",
    image: "⚡"
  },
  {
    name: "来来亭 練馬店",
    area: "練馬区内",
    genres: ["あっさり系"],
    features: "京都風醤油の鶏ガラスープに背脂。コクがあるのに飲み干せる絶妙なバランス。細麺がよく絡む。ネギ多めがおすすめ。",
    recommendation: "ラーメン（背脂・ネギ多め）",
    mapKeyword: "来来亭 練馬",
    image: "🍜"
  },
  {
    name: "喜多方ラーメン 坂内 練馬店",
    area: "練馬駅",
    genres: ["あっさり系"],
    features: "福島・喜多方の老舗直系。あっさり醤油スープと平打ち麺の組み合わせが絶品。肉そばのチャーシューが特に人気。",
    recommendation: "肉そば",
    mapKeyword: "坂内 練馬",
    image: "🐷"
  },
  {
    name: "ラーメン ささら",
    area: "氷川台駅",
    genres: ["濃厚系"],
    features: "氷川台エリアの人気店。豚バラらーめんと餃子の組み合わせが地元民のお気に入り。",
    recommendation: "豚バラらーめん＋餃子",
    mapKeyword: "ラーメン ささら 氷川台",
    image: "🥟"
  },
  {
    name: "麺屋わおん",
    area: "上石神井駅",
    genres: ["あっさり系"],
    features: "丁寧に取ったスープと自家製麺のこだわりが光る一杯。上石神井の人気店。",
    recommendation: "醤油らーめん",
    mapKeyword: "麺屋わおん 上石神井",
    image: "🎵"
  },
  {
    name: "げんこつらぅめん 屋台や",
    area: "平和台駅",
    genres: ["濃厚系"],
    features: "平和台駅から徒歩6分。豚骨＆鶏ガラをとことん炊いた濃厚スープに濃いめの醤油ダレ。レベルの高い家系ラーメン。",
    recommendation: "げんこつらーめん＋背脂丼",
    mapKeyword: "げんこつらぅめん 屋台や 平和台",
    image: "🍜"
  }
];

let currentFilter = 'all';

function getGenreColor(genres) {
    if (genres.includes('濃厚系')) return '#1a1a1a';
    if (genres.includes('あっさり系')) return '#d4622a';
    if (genres.includes('鶏白湯')) return '#1a9e75';
    if (genres.includes('まぜそば') || genres.includes('つけ麺')) return '#5b7ec9';
    if (genres.includes('家系')) return '#8b4b8b';
    return '#ccc'; // その他など
}

function renderShops() {
    const container = document.getElementById('shop-container');
    container.innerHTML = '';

    const filteredShops = currentFilter === 'all' 
        ? ramenShops 
        : ramenShops.filter(shop => shop.genres.includes(currentFilter));

    const countDisplay = document.getElementById('shop-count-display');
    if (countDisplay) {
        countDisplay.textContent = `全${filteredShops.length}店舗`;
    }

    if (filteredShops.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:#666; margin-top:20px;">該当する店舗がありません。</p>';
        return;
    }

    filteredShops.forEach(shop => {
        const card = document.createElement('div');
        card.className = 'shop-card';
        
        // 追加: ジャンルごとのアクセントライン（左ボーダー4px）
        card.style.borderLeft = `4px solid ${getGenreColor(shop.genres)}`;

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
                <div class="shop-footer">※営業時間・定休日は変更になる場合があります。事前にご確認ください。</div>
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
    const keywords = message.trim().split(/\s+|、|。|・|，|．/);
    if (keywords.length === 0 || keywords[0] === '') {
        return 'キーワードを入力して検索できます！（例：「大泉学園 濃厚」「桜台 あっさり」など）';
    }

    let results = ramenShops;

    // AND search for all keywords
    keywords.forEach(keyword => {
        if (!keyword) return;
        const lowerKeyword = keyword.toLowerCase();
        
        // Define some synonym mappings for genres
        let searchKeyword = lowerKeyword;
        if (searchKeyword.includes('こってり') || searchKeyword.includes('どろどろ') || searchKeyword.includes('豚骨')) searchKeyword = '濃厚';
        if (searchKeyword.includes('さっぱり') || searchKeyword.includes('昔ながら') || searchKeyword.includes('塩') || searchKeyword.includes('醤油')) searchKeyword = 'あっさり';
        if (searchKeyword.includes('お肉') || searchKeyword.includes('たくさん') || searchKeyword.includes('がっつり')) searchKeyword = 'ガッツリ';
        if (searchKeyword.includes('汁なし')) searchKeyword = 'まぜそば';

        results = results.filter(shop => {
            const inName = shop.name.toLowerCase().includes(searchKeyword);
            const inArea = shop.area.toLowerCase().includes(searchKeyword);
            const inGenre = shop.genres.some(g => g.toLowerCase().includes(searchKeyword));
            const inFeatures = shop.features.toLowerCase().includes(searchKeyword);
            const inRecommend = shop.recommendation.toLowerCase().includes(searchKeyword);

            return inName || inArea || inGenre || inFeatures || inRecommend;
        });
    });

    if (results.length === 0) {
        return `「${message}」に一致する店舗は見つかりませんでした。\n条件を変えてもう一度お試しください！`;
    }

    // Format the response
    let responseText = '';
    
    // Group by area for better presentation if there are many results
    const areas = [...new Set(results.map(s => s.area.split('・')[0].split('駅')[0]))];
    const mainArea = areas[0];

    if (areas.length === 1) {
        responseText = `${mainArea}エリアのおすすめはこちらです！\n`;
    } else {
        responseText = `おすすめの店舗はこちらです！（全${results.length}件）\n`;
    }

    results.forEach(shop => {
        const genreStr = shop.genres[0] || 'その他';
        responseText += `・${shop.name}（${genreStr}）${shop.recommendation}\n`;
    });

    return responseText;
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
