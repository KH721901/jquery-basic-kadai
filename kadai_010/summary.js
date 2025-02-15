$(function() {

  // id属性がchange-colorの要素がクリックされたら
  $('#change-color').on('click', function(){
    // id属性がtargetの要素のcolorプロパティをBlueにする
    $('#target').css('color', 'Blue');
  });

  $('#change-text').on({
    'click': () => {
      $('p').text('Hello!');
    },
  });

  $('#fade-out').on('click', function() {
    // フェードアウトする
    $('p').fadeOut();
  });

  $('#fade-in').on('click', function() {
    // フェードインする
    $('p').fadeIn();
  });

 });