const ramenShops = [
  // 1-10 新規追加 (Recent 10)
  { name: "清麺常藤", en_name: "Seimen Tsunefuji", area: "東大泉", genres: ["つけ麺"], features: "小麦の香りが引き立つ自家製麺と、濃厚で深みのあるつけ汁が絶賛されるつけ麺専門店。", en_features: "Specialty tsukemen shop highly praised for its deeply flavorful dipping broth and aromatic homemade noodles.", recommendation: "特製つけ麺 / Special Tsukemen", lat: 35.750149, lng: 139.5851632 },
  { name: "八代目野中家", en_name: "Nonakaya", area: "豊玉北・練馬", genres: ["家系", "濃厚系"], features: "超濃厚でパンチの効いた豚骨醤油スープが特徴。ライスとの相性が抜群な本格家系。", en_features: "Authentic Iekei ramen featuring an ultra-rich and punchy pork-soy broth that pairs perfectly with rice.", recommendation: "ラーメン / Iekei Ramen", lat: 35.7369362, lng: 139.6540472 },
  { name: "麺屋 蕃茄", en_name: "Menya Banko", area: "東大泉", genres: ["つけ麺", "あっさり系"], features: "トマトを使った独創的なつけ麺が大人気。女性客も多く、ヘルシーでありながら旨味が強い。", en_features: "Famous for its creative tomato-based tsukemen. Very popular for its healthy yet umami-packed flavor.", recommendation: "トマトつけ麺 / Tomato Tsukemen", lat: 35.7490521, lng: 139.5872704 },
  { name: "麺屋 音 練馬店", en_name: "Menya Oto", area: "練馬", genres: ["濃厚系", "その他"], features: "とろみのある濃厚煮干しそばが看板。銀色の美しいスープは煮干しの旨味が凝縮されている。", en_features: "Signature rich 'Niboshi' (dried sardine) ramen with a thick, beautiful silver broth packed with umami.", recommendation: "特製煮干しそば / Special Niboshi Soba", lat: 35.7375635, lng: 139.6532012 },
  { name: "まぜそば ほうきぼし", en_name: "Houkiboshi", area: "練馬", genres: ["まぜそば"], features: "特製スパイスとモチモチ太麺が絡み合う、台湾まぜそばの名店。ジャンクでやみつきになる味。", en_features: "Renowned for its spicy Taiwan Mazesoba. The thick, chewy noodles mixed with special spices are addictive.", recommendation: "台湾まぜそば / Taiwan Mazesoba", lat: 35.7377545, lng: 139.6546377 },
  { name: "ラーメン 我羅奢", en_name: "Garasha", area: "練馬", genres: ["あっさり系", "鶏白湯"], features: "鶏の旨味を丁寧に抽出した鶏白湯と、スッキリとした醤油が選べる。飲み干せるスープが魅力。", en_features: "Offers a choice between a smooth, carefully extracted Tori Paitan and a clean Shoyu. You'll want to drink every drop.", recommendation: "鶏白湯らーめん / Tori Paitan Ramen", lat: 35.738914, lng: 139.653303 },
  { name: "徳丸家", en_name: "Tokumaruya", area: "北町", genres: ["家系", "濃厚系"], features: "北町エリアで愛される正統派の横浜家系。クリーミーな豚骨醤油にファンが多い。", en_features: "An orthodox Yokohama Iekei ramen loved in the Kitamachi area. Fans adore its creamy pork-soy broth.", recommendation: "ラーメン（味玉入り）/ Iekei Ramen with Egg", lat: 35.7681432, lng: 139.660127 },
  { name: "麺屋 こころ 練馬店", en_name: "Menya Kokoro", area: "練馬", genres: ["まぜそば", "その他"], features: "台湾まぜそば発祥の系譜を受け継ぐ名店。ニンニクとピリ辛ミンチのパンチが強烈。", en_features: "A famous shop inheriting the pedigree of Taiwan Mazesoba. The punch of garlic and spicy minced meat is intense.", recommendation: "台湾まぜそば / Taiwan Mazesoba", lat: 35.7383174, lng: 139.6525209 },
  { name: "麺屋 黒田", en_name: "Menya Kuroda", area: "練馬", genres: ["濃厚系", "その他"], features: "マー油の香ばしさが食欲をそそる本格熊本ラーメン。豚骨の旨味とニンニクの香りが最高。", en_features: "Authentic Kumamoto ramen featuring the appetizing aroma of roasted garlic oil (Ma-yu) and rich pork broth.", recommendation: "黒ラーメン / Black Kumamoto Ramen", lat: 35.7366873, lng: 139.6548616 },
  { name: "ろくはうす", en_name: "Rokuhouse", area: "石神井町", genres: ["あっさり系", "その他"], features: "地元の人に愛されるアットホームな老舗。昔懐かしいホッとする味わいの塩・醤油ラーメンを提供。", en_features: "A cozy, long-established shop loved by locals. Serves comforting, old-fashioned Shio and Shoyu ramen.", recommendation: "塩ラーメン / Shio Ramen", lat: 35.7428685, lng: 139.6057263 },

  // 11-15 前回の新規追加 (Previous New 5)
  { name: "中華そば ます田", en_name: "Chuka Soba Masuda", area: "練馬駅", genres: ["あっさり系"], features: "鶏ガラベースの透き通ったスープが特徴の王道中華そば。常に行列が絶えない練馬の新たな名店。", en_features: "Classic clear shoyu (soy sauce) broth ramen with a delicate chicken base. Constantly draws a line of fans.", recommendation: "特製中華そば / Special Shoyu Ramen", lat: 35.7376749, lng: 139.6555088 },
  { name: "山陰魚介 Minatomen", en_name: "Minatomen", area: "練馬駅", genres: ["あっさり系"], features: "山陰地方の新鮮な食材を使用した、魚介の出汁と旨味が際立つプレミアムな中華蕎麦。", en_features: "Premium Chuka Soba featuring fresh seafood ingredients from the San'in region. Incredible umami flavor.", recommendation: "特製魚介中華蕎麦 / Special Seafood Ramen", lat: 35.7423377, lng: 139.6548777 },
  { name: "ラーメン見田家", en_name: "Ramen Mitaya", area: "練馬駅", genres: ["家系", "濃厚系"], features: "ライス無料サービスが嬉しい、濃厚で中毒性のある本格横浜家系ラーメン。ガッツリ食べたい時に。", en_features: "Authentic, rich Yokohama Iekei (pork/soy) ramen. Very addictive and comes with free rice.", recommendation: "ラーメン+ 無料ライス / Ramen & Free Rice", lat: 35.7373197, lng: 139.6536792 },
  { name: "麺屋 寿", en_name: "Menya Kotobuki", area: "下石神井", genres: ["あっさり系"], features: "シンプルながらも一つ一つの素材が丁寧に作られたハイクオリティな醤油ラーメン。", en_features: "Highly refined and simple shoyu ramen made with carefully selected ingredients.", recommendation: "特製醤油ラーメン / Premium Shoyu Ramen", lat: 35.7272258, lng: 139.6033215 },
  { name: "富士亭", en_name: "Fujitei", area: "北町", genres: ["濃厚系", "その他"], features: "胡麻の風味が豊かな、濃厚でクリーミーな担々麺が地域の絶大な支持を集める。", en_features: "Famous for its rich, creamy, and sesame-flavored Tantanmen (spicy noodle). Highly loved by locals.", recommendation: "特製担々麺 / Special Tantanmen", lat: 35.7673521, lng: 139.6636132 },

  // 16-50 オリジナルの名店 (Original Classics - Translated & Restored)
  { name: "麺処 井の庄", en_name: "Mendokoro Inosho", area: "石神井公園", genres: ["つけ麺", "濃厚系"], features: "カップ麺にもなった「辛辛魚つけ麺」は豚骨魚介スープに唐辛子が絡む激辛の芸術。", en_features: "Legendary shop famous for 'Karakara Uo' (Spicy Fish) Tsukemen. Features a rich pork-seafood broth heavily spiced with chili.", recommendation: "辛辛魚つけ麺 / Spicy Fish Tsukemen", lat: 35.7381, lng: 139.5986 },
  { name: "らぁ麺 和來", en_name: "Ramen Warai", area: "石神井公園", genres: ["まぜそば", "あっさり系"], features: "トリュフ薫る漬け卵黄を絡めて食べるまぜそばが絶品。洗練された淡麗スープも人気。", en_features: "Elegant mazesoba (soupless ramen) topped with a truffle-infused cured egg yolk. Highly sophisticated.", recommendation: "まぜそば / Truffle Mazesoba", lat: 35.7375, lng: 139.5990 },
  { name: "ラーメン春樹", en_name: "Ramen Haruki", area: "石神井公園", genres: ["家系", "濃厚系"], features: "深夜まで営業している安心感。好みに合わせてチューニングできる横浜家系。", en_features: "Open late night. A comforting Yokohama Iekei ramen where you can customize noodles and oil.", recommendation: "ラーメン（硬め・濃いめ） / Customized Ramen", lat: 35.7368, lng: 139.5978 },
  { name: "中華そば べんてん", en_name: "Chuka Soba Benten", area: "成増", genres: ["あっさり系", "つけ麺"], features: "かつて高田馬場で伝説と呼ばれた名店。自家製麺と奥深い和風スープの組み合わせは至高。", en_features: "A legendary shop. Exceptional handmade noodles in a profound traditional Japanese soup.", recommendation: "塩ラーメン / Shio Ramen", lat: 35.7441, lng: 139.6512 },
  { name: "RAMEN GOTTSU", en_name: "RAMEN GOTTSU", area: "練馬駅", genres: ["濃厚系", "その他"], features: "魚介豚骨の濃密白湯スープ。ミシュラン・ビブグルマン選出のスタイリッシュな店。", en_features: "Sleek atmosphere serving dense, award-winning pork & seafood paitan broth. Michelin Bib Gourmand.", recommendation: "GOTTSUらーめん / Gottsu Signature Ramen", lat: 35.7448, lng: 139.6508 },
  { name: "濃菜麺 井の庄", en_name: "Kousaimen Inosho", area: "練馬駅", genres: ["濃厚系"], features: "大量の野菜と濃厚ドロドロスープのパワフルな一杯。ジューシーなローストポークも絶品。", en_features: "Powerful ramen packed with vegetables in an ultra-thick soup, topped with juicy roast pork.", recommendation: "濃菜麺 / Kousaimen (Thick Veggie Ramen)", lat: 35.7445, lng: 139.6515 },
  { name: "ぼにしも", en_name: "Bonishimo", area: "練馬駅", genres: ["あっさり系"], features: "鶏と魚介のクラシックなあっさりスープが沁み渡る。こぢんまりとした隠れ家的な名店。", en_features: "A comforting classic clear broth made from chicken and seafood. A cozy, hidden-gem shop.", recommendation: "チャーシューめん / Chashu Ramen", lat: 35.7442, lng: 139.6502 },
  { name: "ドリルマン", en_name: "Drillman", area: "練馬駅", genres: ["あっさり系", "つけ麺"], features: "秋田県産醤油や厳選煮干しを使用した、洗練された一杯。レンガ調でおしゃれ。", en_features: "Stylish shop using premium Akita soy sauce and selected dried sardines (Niboshi) for an elegant flavor.", recommendation: "特製中華そば / Special Chuka Soba", lat: 35.7450, lng: 139.6520 },
  { name: "うかんむり", en_name: "Ukanmuri", area: "練馬駅", genres: ["鶏白湯"], features: "博多水炊きの製法を元にした無化調の鶏スープ。鶏つみれが美味しい体に優しい一杯。", en_features: "Chemical-free chicken soup based on Hakata Mizutaki (hot pot) technique. Features delicious chicken meatballs.", recommendation: "水炊き中華そば / Mizutaki Chicken Ramen", lat: 35.7438, lng: 139.6495 },
  { name: "麺屋 藤しろ", en_name: "Menya Fujishiro", area: "練馬駅", genres: ["鶏白湯"], features: "大山地鶏を贅沢に使ったコラーゲンたっぷりの鶏白湯。女性にも大人気。", en_features: "Tori Paitan (rich chicken broth) made with premium Daisen chicken. Very rich in collagen and popular among women.", recommendation: "鶏白湯ラーメン / Tori Paitan", lat: 35.7447, lng: 139.6510 },
  { name: "安ざわ家", en_name: "Anzawaya", area: "練馬駅", genres: ["あっさり系", "濃厚系"], features: "生姜がガツンと効いた長岡生姜醤油ラーメンと、ボリューム満点の定食が名物。", en_features: "Famous for its punchy Ginger-Shoyu ramen and monstrous meat set meals.", recommendation: "中華そば＋チャーシューエッグ / Shoyu & Char Siu Egg", lat: 35.7443, lng: 139.6498 },
  { name: "麺 酒 やまの", en_name: "Yamano", area: "練馬駅", genres: ["まぜそば"], features: "台湾まぜそばのインスパイア系でありながら独自の進化を遂げた大人気店。追い飯は必須。", en_features: "Wildly popular for its Taiwan Mazesoba (spicy soupless noodles). Finishing the leftover sauce with rice is a must.", recommendation: "まぜそば052 / Mazesoba 052", lat: 35.7440, lng: 139.6505 },
  { name: "神兵衛", en_name: "Jinbee", area: "練馬駅", genres: ["濃厚系"], features: "野菜ポタージュのベジポタスープがクセになる、少し変わった濃厚ラーメン。", en_features: "A unique Veggie-Potage (rich vegetable) thick soup that is incredibly addictive.", recommendation: "ベジポタらーめん / Veggie Potage Ramen", lat: 35.7446, lng: 139.6518 },
  { name: "小法師", en_name: "Kobo-shi", area: "練馬駅", genres: ["あっさり系", "その他"], features: "会津喜多方ラーメンのお店。平打ち熟成多加水麺とトロトロの手作りチャーシューが最高。", en_features: "Authentic Aizu Kitakata ramen featuring flat wavy high-hydration noodles and extremely tender pork.", recommendation: "喜多方ラーメン / Kitakata Ramen", lat: 35.7444, lng: 139.6500 },
  { name: "坂内", en_name: "Bannai", area: "練馬駅", genres: ["あっさり系"], features: "全国にファンを持つ喜多方ラーメンのチェーン。あっさり醤油とたっぷりの肉が特徴。", en_features: "Famous Kitakata ramen chain offering a clean soy broth and generous portions of sliced pork.", recommendation: "肉そば / Meat Soba", lat: 35.7449, lng: 139.6522 },
  { name: "中華そば 座座", en_name: "Chuka Soba Zaza", area: "大泉学園", genres: ["あっさり系", "その他"], features: "トロトロに煮込まれた豚バラ軟骨（バイカ）が乗る個性派。黒いスープなのにスッキリとした甘みがある。", en_features: "Unique ramen topped with ultra-tender braised pork ribs. The dark soup has a surprisingly clean sweetness.", recommendation: "バイカ中華そば / Baika Chuka Soba", lat: 35.7520, lng: 139.5820 },
  { name: "らーめん こうすけ", en_name: "Ramen Kosuke", area: "大泉学園", genres: ["あっさり系"], features: "路地裏に佇む名店。クリアで繊細な塩スープは、最後の一滴まで飲み干したくなるほど。", en_features: "A hidden gem in the alleys. The clear and delicate Shio (salt) broth makes you want to drink every last drop.", recommendation: "特製塩ラーメン / Special Shio Ramen", lat: 35.7518, lng: 139.5818 },
  { name: "麺亭 英", en_name: "Mentei Hide", area: "大泉学園", genres: ["あっさり系"], features: "丁寧に作られたこだわりの中華そば。シンプルだからこそ技が光る味わい。", en_features: "Carefully crafted traditional Chuka Soba. A simple yet incredibly skillful flavor.", recommendation: "醤油ラーメン / Shoyu Ramen", lat: 35.7515, lng: 139.5815 },
  { name: "睡大虎", en_name: "Suidaiko", area: "東大泉", genres: ["その他"], features: "土鍋でグツグツと煮えたぎる熱々のラーメンが名物の老舗。ボリューム満点。", en_features: "A long-established shop famous for its boiling hot ramen served in an earthen pot (donabe).", recommendation: "土鍋ラーメン / Donabe Ramen", lat: 35.7412, lng: 139.5902 },
  { name: "丸源ラーメン", en_name: "Marugen Ramen", area: "大泉学園", genres: ["濃厚系"], features: "肉そばが看板メニュー。豚骨鶏ガラのスープに甘辛いお肉がたっぷり乗った一杯。", en_features: "Famous for 'Niku-Soba' (Meat Ramen). A deep broth topped with generous sweet and spicy pork.", recommendation: "肉そば / Niku Soba", lat: 35.7522, lng: 139.5825 },
  { name: "富士見台 大勝軒", en_name: "Fujimidai Taishoken", area: "富士見台", genres: ["つけ麺"], features: "地元民に深く愛されるクラシックな「もりそば」。太麺と酸味のあるスープが完璧にマッチ。", en_features: "Classic 'Morisoba' (tsukemen) loved by locals. Features thick dipping noodles with a sweet and sour broth.", recommendation: "もりそば / Morisoba (Tsukemen)", lat: 35.7398, lng: 139.6318 },
  { name: "麺処 盛盛", en_name: "Mendokoro Morimori", area: "富士見台", genres: ["濃厚系"], features: "動物系出汁と魚介の香りが重なる深みのある味わい。質の高いチャーシューも評判。", en_features: "A deep flavor combining animal broth and seafood aromas. Highly praised for its quality char siu (pork).", recommendation: "特製らーめん / Special Ramen", lat: 35.7395, lng: 139.6315 },
  { name: "うまいエクスプレス", en_name: "Umai Express", area: "富士見台", genres: ["あっさり系"], features: "昔ながらのキレのある醤油中華そば。毎日食べても飽きない安心の味。", en_features: "Old-school sharp soy-sauce Chuka Soba. A comforting taste you won't get tired of eating every day.", recommendation: "中華そば / Chuka Soba", lat: 35.7400, lng: 139.6320 },
  { name: "麺処 穂し乃", en_name: "Mendokoro Hoshino", area: "練馬高野台", genres: ["濃厚系", "あっさり系"], features: "煮干しと大量の鶏がらのWスープが絶品。光が丘エリアで常に行列ができる超人気店。", en_features: "Exceptional double soup made from dried sardines and heavy chicken bones. Very popular in its area.", recommendation: "特製中華そば / Special Chuka Soba", lat: 35.7280, lng: 139.6180 },
  { name: "麺や金時", en_name: "Menya Kintoki", area: "江古田", genres: ["その他", "まぜそば"], features: "クリアな塩ラーメンと、本格スパイシーな汁なし担々麺が看板。全国レベルの実力店。", en_features: "National-level shop known for crystal clear Shio ramen and super authentic Soupless Tantanmen.", recommendation: "塩らぁ麺 または 汁なし担々麺 / Shio or Tantanmen", lat: 35.7350, lng: 139.6650 },
  { name: "ラーメン屋ジョン", en_name: "Ramen-ya John", area: "武蔵関", genres: ["濃厚系", "あっさり系"], features: "練馬区西部エリアを代表する名店。濃厚スープから煮干しまで幅広いメニューを高い次元で提供。", en_features: "A top-ranked shop. Offers everything from rich tonkotsu-style to delicate niboshi at a very high level.", recommendation: "特製ラーメン / Special Ramen", lat: 35.7480, lng: 139.5760 },
  { name: "神也", en_name: "Kaminari", area: "東武練馬", genres: ["あっさり系"], features: "厳選素材を使用した端麗系塩ラーメンが人気の隠れた名店。丁寧な仕事が光る。", en_features: "A hidden gem popular for its elegant, clear Shio ramen made with carefully selected ingredients.", recommendation: "塩らーめん / Shio Ramen", lat: 35.7510, lng: 139.6420 },
  { name: "来来亭", en_name: "Rairai-tei", area: "石神井", genres: ["あっさり系", "その他"], features: "京都風醤油の鶏ガラスープに背脂がチャッチャと乗る。ネギ多めカスタマイズがおすすめ。", en_features: "Kyoto-style chicken shoyu ramen topped with savory pork back fat. Ordering extra green onions is recommended.", recommendation: "ラーメン（背脂多め） / Ramen (Extra Fat)", lat: 35.7430, lng: 139.6480 },
  { name: "ささら", en_name: "Sasara", area: "氷川台", genres: ["濃厚系"], features: "地元の人で賑わう名店。コクのあるスープと自家製餃子が鉄板の組み合わせ。", en_features: "Bustling local shop. A strong, rich soup paired with their homemade gyoza is an ironclad combination.", recommendation: "らーめん / Ramen", lat: 35.7390, lng: 139.6380 },
  { name: "麺屋わおん", en_name: "Menya Waon", area: "上石神井", genres: ["あっさり系"], features: "丁寧に取られた和風出汁と上品な麺のバランスが秀逸。落ち着いた雰囲気のお店。", en_features: "The balance between carefully drawn Japanese dashi (broth) and elegant noodles is excellent. Relaxing atmosphere.", recommendation: "醤油らーめん / Shoyu Ramen", lat: 35.7460, lng: 139.5950 },
  { name: "げんこつらぅめん", en_name: "Genkotsu Ramen", area: "平和台", genres: ["濃厚系", "家系"], features: "濃いめにカエシが効いたパンチのある一杯。白ご飯がモリモリ進む濃い味の極み。", en_features: "A punchy bowl with strong soy-sauce 'kaeshi'. The ultimate rich taste that goes perfectly with white rice.", recommendation: "げんこつらーめん / Genkotsu Ramen", lat: 35.7420, lng: 139.6550 },
  { name: "石神井とら", en_name: "Shakujii Tora", area: "石神井公園", genres: ["つけ麺"], features: "昔ながらの甘酢が効いた酸味のあるつけ汁が特徴のレトロなつけ麺。根強いファンが多い。", en_features: "Retro tsukemen featuring a dipping broth with old-fashioned sweet and sour vinegar. Has deep-rooted fans.", recommendation: "つけ麺 / Tsukemen", lat: 35.7370, lng: 139.5970 },
  { name: "ラーメンハウスなか", en_name: "Ramen House Naka", area: "石神井公園", genres: ["あっさり系"], features: "驚きのワンコインで食べられる、ノスタルジー溢れる昔ながらの屋台系ラーメン。", en_features: "Nostalgic street-food style ramen available for an incredibly low price.", recommendation: "ラーメン / Standard Ramen", lat: 35.7385, lng: 139.5995 },
  { name: "ふくちゃん", en_name: "Fukuchan", area: "練馬・桜台", genres: ["濃厚系", "その他"], features: "安くて満腹になれる豚骨ラーメンと「とろろ丼」のセットが地元民のお財布と胃袋を救う。", en_features: "Cheap and filling Tonkotsu ramen sets. Highly valued by the local community for its cost performance.", recommendation: "とんこつラーメンセット / Tonkotsu Ramen Set", lat: 35.7445, lng: 139.6488 },
  { name: "桜台らぁ麺 美志満", en_name: "Sakuradai Mishima", area: "桜台", genres: ["あっさり系"], features: "イワシ、シイタケ、昆布の旨味を凝縮した黄金色の塩スープ。小さな店舗ながら実力派。", en_features: "Golden shio broth packed with umami from sardines, shiitake, and kelp. Small shop but highly acclaimed.", recommendation: "魚介塩チャーシュー麺 / Seafood Shio Chashu Ramen", lat: 35.7435, lng: 139.6470 }
];

let map;
let markers = [];

// Icons & UI Logic
function getGenreBorderClass(genres) {
    if (genres.includes('濃厚系') || genres.includes('家系')) return 'orange-border';
    if (genres.includes('あっさり系') || genres.includes('鶏白湯')) return 'gold-border';
    if (genres.includes('まぜそば') || genres.includes('つけ麺')) return 'blue-border';
    if (genres.includes('その他')) return 'gray-border';
    return 'gold-border';
}

function getShopInitialSymbol(en_name) {
    // get first letters of first two words, fallback fully
    let words = en_name.replace(/[^a-zA-Z ]/g, "").split(" ").filter(w => w.length > 0);
    if(words.length >= 2) {
        return (words[0][0] + words[1][0]).toUpperCase();
    } else if (words.length === 1 && words[0].length >= 2) {
        return words[0].substring(0,2).toUpperCase();
    } else {
        return "RM";
    }
}

function getGenreColor(genres) {
    if (genres.includes('濃厚系') || genres.includes('家系')) return '#ff5500'; // Neon Orange
    if (genres.includes('あっさり系') || genres.includes('鶏白湯')) return '#d4af37'; // Gold
    if (genres.includes('まぜそば') || genres.includes('つけ麺')) return '#1e90ff'; // Dodger Blue
    return '#888888';
}

function initMap() {
    if (map) return;
    map = L.map('map', {
        zoomControl: false
    }).setView([35.743, 139.630], 13);
    
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OSM & CARTO'
    }).addTo(map);
    
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    ramenShops.forEach(shop => {
        if (shop.lat && shop.lng) {
            const color = getGenreColor(shop.genres);
            const markerIcon = L.divIcon({
                className: 'custom-marker',
                html: `<div style="background-color: ${color}; width: 14px; height: 14px; border-radius: 50%; border: 2px solid #000; box-shadow: 0 0 10px ${color};"></div>`,
                iconSize: [14, 14],
                iconAnchor: [7, 7],
                popupAnchor: [0, -7]
            });
            
            const mapQuery = encodeURIComponent(shop.name + " 練馬");
            const mapLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

            const popupContent = `
                <div style="font-family: var(--font-en); background: #1a1a1a; padding: 12px; border-radius: 8px; color: #f5f5f5; border: 1px solid rgba(255,255,255,0.1);">
                    <strong style="font-size: 16px; font-family: var(--font-ja); display:block; color: #fff;">${shop.name}</strong>
                    <span style="font-size: 11px; color: #aaa; text-transform:uppercase;">${shop.en_name}</span><br>
                    <span style="font-size: 10px; color: var(--primary-gold); margin-top:6px; display:inline-block;">★ RECOMMENDED</span><br>
                    <span style="font-size: 13px; font-family: var(--font-ja); font-weight: bold; color: white;">${shop.recommendation}</span><br>
                    <a href="${mapLink}" target="_blank" rel="noopener noreferrer" style="display:inline-block; margin-top:12px; padding:8px 14px; background:var(--primary-gold); color:#000; text-decoration:none; border-radius:20px; font-size:11px; font-weight:bold; letter-spacing:1px;">📍 OPEN IN MAPS</a>
                </div>
            `;

            const marker = L.marker([shop.lat, shop.lng], { icon: markerIcon }).bindPopup(popupContent, {
                className: 'premium-popup'
            });
            marker.genre = shop.genres;
            markers.push(marker);
            marker.addTo(map);
        }
    });

    updateMapFilters();
}

const style = document.createElement('style');
style.innerHTML = `
    .premium-popup .leaflet-popup-content-wrapper { background: #0a0a0a; border: 1px solid #333; box-shadow: 0 10px 30px rgba(0,0,0,0.8); }
    .premium-popup .leaflet-popup-tip { background: #0a0a0a; border: 1px solid #333; }
    .premium-popup .leaflet-popup-close-button { color: #fff !important; }
`;
document.head.appendChild(style);

function updateMapFilters() {
    if (!map) return;
    markers.forEach(marker => {
        const matches = currentFilter === 'all' || marker.genre.some(g => g === currentFilter || currentFilter === 'all');
        if (matches) {
            if (!map.hasLayer(marker)) map.addLayer(marker);
        } else {
            if (map.hasLayer(marker)) map.removeLayer(marker);
        }
    });
}

function switchView(viewType) {
    const listWrap = document.getElementById('shop-container');
    const mapWrap = document.getElementById('map-wrap');
    const btnList = document.getElementById('btn-list');
    const btnMap = document.getElementById('btn-map');

    if (viewType === 'list') {
        listWrap.classList.remove('hidden');
        mapWrap.classList.add('hidden');
        btnList.classList.add('active');
        btnMap.classList.remove('active');
    } else {
        listWrap.classList.add('hidden');
        mapWrap.classList.remove('hidden');
        btnList.classList.remove('active');
        btnMap.classList.add('active');
        
        if (!map) {
            setTimeout(() => { initMap(); }, 50);
        } else {
            setTimeout(() => { map.invalidateSize(); }, 50);
        }
    }
}

let currentFilter = 'all';

function renderShops() {
    const container = document.getElementById('shop-container');
    container.innerHTML = '';

    const filteredShops = currentFilter === 'all' 
        ? ramenShops 
        : ramenShops.filter(shop => shop.genres.includes(currentFilter));

    const countDisplay = document.getElementById('shop-count-display');
    if (countDisplay) {
        countDisplay.innerHTML = `<span class="en">TOTAL ${filteredShops.length} SHOPS</span> / <span class="ja">全${filteredShops.length}店舗</span>`;
    }

    if (filteredShops.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:#666; margin-top:20px; font-family: var(--font-en);">No shops found.</p>';
        return;
    }

    filteredShops.forEach(shop => {
        const card = document.createElement('div');
        card.className = 'shop-card block-hover';
        
        const accentColor = getGenreColor(shop.genres);
        const borderClass = getGenreBorderClass(shop.genres);
        const symbol = getShopInitialSymbol(shop.en_name);
        
        card.style.borderLeft = `4px solid ${accentColor}`;

        const mapQuery = encodeURIComponent(shop.name + " 練馬");
        const mapLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

        card.innerHTML = `
            <div class="shop-icon ${borderClass}">${symbol}</div>
            <div class="shop-content">
                <div class="shop-area">${shop.area}</div>
                <h2 class="shop-name">${shop.name}</h2>
                <div class="shop-name-en">${shop.en_name}</div>
                
                <p class="shop-features">${shop.features}</p>
                <p class="shop-features-en">${shop.en_features}</p>
                
                <div class="shop-recommendation">
                    <span class="recommendation-label">Recommend / おすすめ</span>
                    <span class="recommendation-menu">${shop.recommendation}</span>
                </div>
                
                <div class="map-btn-container">
                    <a href="${mapLink}" class="map-link-btn" target="_blank" rel="noopener noreferrer">
                        <span style="font-size: 16px;">📍</span> OPEN IN GOOGLE MAPS
                    </a>
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
}

function sendMessage(displayLabel, searchKeywords) {
    appendMessage(displayLabel, 'user');

    setTimeout(() => {
        const response = generateAIResponse(searchKeywords);
        appendMessage(response, 'ai');
    }, 600);
}

function appendMessage(text, sender) {
    const messagesContainer = document.getElementById('chat-messages');
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${sender}-message`;
    
    if (sender === 'user') {
        const parts = text.split(" / ");
        if(parts.length > 1) {
            msgDiv.innerHTML = `${parts[0]} <span class="en-msg">${parts[1]}</span>`;
        } else {
            msgDiv.innerHTML = text;
        }
    } else {
        msgDiv.innerHTML = text;
    }
    
    messagesContainer.appendChild(msgDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateAIResponse(keywordsString) {
    const keywords = keywordsString.split(' ');
    
    let results = ramenShops.filter(shop => {
        let match = false;
        keywords.forEach(keyword => {
            const sk = keyword.toLowerCase();
            if (shop.name.toLowerCase().includes(sk) || 
                shop.en_name.toLowerCase().includes(sk) ||
                shop.area.toLowerCase().includes(sk) || 
                shop.genres.some(g => g.toLowerCase().includes(sk)) || 
                shop.features.toLowerCase().includes(sk) ||
                shop.en_features.toLowerCase().includes(sk)) {
                match = true;
            }
        });
        return match;
    });

    // Shuffle and pick up to 3 results
    results = results.sort(() => 0.5 - Math.random()).slice(0, 3);

    if (results.length === 0) {
        return `ごめんなさい、見つかりませんでした🥺<br><span class="en-msg">Sorry, we couldn't find any matches.</span>`;
    }
    
    let html = `気分に合わせたおすすめのお店です！ / Here is our recommendation:<br><br>`;
    results.forEach(shop => {
        html += `<strong>${shop.name}</strong><br><span style="font-size:12px; color:#aaa;">(${shop.en_name} - ${shop.area})</span><br>🍜 ${shop.recommendation}<br><br>`;
    });

    return html;
}

// Initial Setup
document.addEventListener('DOMContentLoaded', () => {
    renderShops();

    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = e.currentTarget;
            filterBtns.forEach(b => b.classList.remove('active'));
            target.classList.add('active');
            
            currentFilter = target.getAttribute('data-genre');
            renderShops();
            updateMapFilters();
        });
    });
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(err => console.error(err));
    });
}
