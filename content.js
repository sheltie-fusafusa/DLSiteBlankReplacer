// content.js

// ページのHTMLを取得
var pageHTML = document.body.innerHTML;

// テキストの置換ルール
var rules = [
    {pattern: /メスガキ/g, replacement: "ざぁ～こ♡"},
    {pattern: /レイプ/g, replacement: "合意なし"},
    {pattern: /ロリ/g, replacement: "つるぺた"},
    {pattern: /ロリババア/g, replacement: "つるぺたババア"},
    {pattern: /監禁/g, replacement: "閉じ込め"},
    {pattern: /鬼畜/g, replacement: "超ひどい"},
    {pattern: /逆レイプ/g, replacement: "逆レ"},
    {pattern: /強制\/無理矢理/g, replacement: "命令/無理矢理"},
    {pattern: /近親相姦/g, replacement: "近親もの"},
    {pattern: /拷問/g, replacement: "責め苦"},
    {pattern: /催眠/g, replacement: "トランス/暗示"},
    {pattern: /獣姦/g, replacement: "畜えち"},
    {pattern: /洗脳/g, replacement: "精神支配"},
    {pattern: /痴漢/g, replacement: "秘密さわさわ"},
    {pattern: /調教/g, replacement: "しつけ"},
    {pattern: /奴隷/g, replacement: "下僕"},
    {pattern: /陵辱/g, replacement: "屈辱"},
    {pattern: /輪姦/g, replacement: "回し"},
    {pattern: /蟲姦/g, replacement: "虫えっち"},
    {pattern: /モブ姦/g, replacement: "モブおじさん"},
    {pattern: /異種姦/g, replacement: "異種えっち"},
    {pattern: /機械姦/g, replacement: "機械責め"},
    {pattern: /睡眠姦/g, replacement: "すやすやえっち"},
    {pattern: /催眠音声/g, replacement: "トランス/暗示ボイス"},
  // 他の置換ルールを追加
];

// 各ルールに従ってテキストを置換
rules.forEach(function(rule) {
  pageHTML = pageHTML.replace(rule.pattern, rule.replacement);
});

// 置換されたHTMLをページに適用
document.body.innerHTML = pageHTML;