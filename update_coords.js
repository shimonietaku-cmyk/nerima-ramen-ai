const fs = require('fs');
const path = 'c:/Users/81801/Desktop/Nerima_Ramen_AI/app.js';
const lines = fs.readFileSync(path, 'utf8').split('\n');

const coords = {
    "麺処 井の庄": [35.7381, 139.5986],
    "らぁ麺 和來": [35.7375, 139.5990],
    "ラーメン春樹": [35.7368, 139.5978],
    "中華そば べんてん": [35.7441, 139.6512],
    "RAMEN GOTTSU": [35.7448, 139.6508],
    "濃菜麺 井の庄": [35.7445, 139.6515],
    "ぼにしも": [35.7442, 139.6502],
    "ドリルマン": [35.7450, 139.6520],
    "うかんむり": [35.7438, 139.6495],
    "麺屋 藤しろ": [35.7447, 139.6510],
    "安ざわ家": [35.7443, 139.6498],
    "麺 酒 やまの": [35.7440, 139.6505],
    "神兵衛": [35.7446, 139.6518],
    "会津喜多方 小法師": [35.7444, 139.6500],
    "坂内 練馬店": [35.7449, 139.6522],
    "中華そば 座座": [35.7520, 139.5820],
    "麺亭 英": [35.7515, 139.5815],
    "らーめん こうすけ": [35.7518, 139.5818],
    "睡大虎": [35.7412, 139.5902],
    "丸源ラーメン": [35.7522, 139.5825],
    "富士見台 大勝軒": [35.7398, 139.6318],
    "麺処 盛盛": [35.7395, 139.6315],
    "うまいエクスプレス": [35.7400, 139.6320],
    "麺処 穂し乃": [35.7280, 139.6180],
    "麺や金時": [35.7350, 139.6650],
    "ラーメン屋ジョン": [35.7480, 139.5760],
    "神也 kaminari": [35.7510, 139.6420],
    "来来亭": [35.7430, 139.6480],
    "ラーメン ささら": [35.7390, 139.6380],
    "麺屋わおん": [35.7460, 139.5950],
    "げんこつらぅめん": [35.7420, 139.6550],
    "石神井とら": [35.7370, 139.5970],
    "ラーメンハウスなか": [35.7385, 139.5995],
    "ふくちゃん": [35.7445, 139.6488],
    "桜台らぁ麺 美志満": [35.7435, 139.6470]
};

const keys = Object.keys(coords).sort((a,b) => b.length - a.length);

let currentName = null;
const out = [];
for (let line of lines) {
    if (line.trim().startsWith("name:")) {
        const nameStr = line.split(/["']/)[1];
        for (let k of keys) {
            if (nameStr.includes(k)) {
                currentName = k;
                break;
            }
        }
        out.push(line);
    } else if (line.trim().startsWith("image:") && currentName) {
        const [lat, lng] = coords[currentName];
        const indent = line.substring(0, line.length - line.trimStart().length);
        out.push(`${indent}lat: ${lat},`);
        out.push(`${indent}lng: ${lng},`);
        out.push(line);
        currentName = null;
    } else {
        out.push(line);
    }
}
fs.writeFileSync(path, out.join('\n'));
console.log("Successfully updated app.js with lat/lng!");
