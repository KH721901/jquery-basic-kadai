$(function () {
  // id属性がcheckの要素がクリックされたら
  $('.btn').on('click', function () {
    // 5. 注意を促すメッセージを表示する
    $('.text-box').val('クリックしました！');
  });
 });
 