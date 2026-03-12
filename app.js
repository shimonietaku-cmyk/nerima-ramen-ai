const ramenShops = [
    {
        name: "麺屋 ねりま",
        features: "魚介と豚骨を長時間煮込んだ濃厚なWスープが自慢。",
        recommendation: "特製濃厚つけ麺",
        image: "🍜",
        area: "練馬駅周辺"
    },
    {
        name: "中華そば 桜台",
        features: "昔ながらのあっさりとした醤油ベースのスープ。自家製麺との相性抜群。",
        recommendation: "特製ワンタンメン",
        image: "🍥",
        area: "桜台"
    },
    {
        name: "らーめん江古田",
        features: "ボリューム満点のガッツリ系。無料トッピングで野菜やニンニクを増量可能。",
        recommendation: "豚マシラーメン",
        image: "🧄",
        area: "江古田"
    },
    {
        name: "鶏白湯 石神井",
        features: "国産鶏を贅沢に使用した、ポタージュのようにクリーミーで滑らかなスープ。",
        recommendation: "濃厚鶏白湯 味玉入り",
        image: "🥚",
        area: "石神井公園"
    },
    {
        name: "味噌らーめん 大泉",
        features: "数種類の味噌をブレンドし、炒め野菜の香ばしさが食欲をそそる一杯。",
        recommendation: "辛味噌らーめん",
        image: "🔥",
        area: "大泉学園"
    }
];

function renderShops() {
    const container = document.getElementById('shop-container');
    container.innerHTML = '';

    ramenShops.forEach(shop => {
        const card = document.createElement('div');
        card.className = 'shop-card';

        card.innerHTML = `
            <div class="shop-icon">${shop.image}</div>
            <div class="shop-content">
                <div class="shop-area">${shop.area}</div>
                <h2 class="shop-name">${shop.name}</h2>
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

// Initial render
document.addEventListener('DOMContentLoaded', renderShops);
