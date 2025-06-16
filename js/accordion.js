$(function(){
// タブのクリック時に実行する処理
$(".toggleIcon").on("click", function() {
// アイコンのclass属性を切り替え
$(this).toggleClass("active");
// DOMの中から.titleをすべて取得
const titleArray = document.querySelectorAll(".title");
// .toggleIconのデータ属性を取得
const index = this.dataset.listIndex
// titleArrayからDOMを取得し、兄弟要素のアコーディオンを開閉する
$(titleArray[index]).next().slideToggle()
});
});