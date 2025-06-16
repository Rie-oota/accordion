$(function(){
// タブのクリック時に実行する処理
$(".toggleIcon").on("click", function() {
// アイコンのclass属性を切り替え
$(this).toggleClass("active");
// 項目を表示させる
$(this).next().slideToggle();
});
});