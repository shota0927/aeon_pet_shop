$(function () {

  //ハンバーガーメニューのアクション
  $(".js-hamburger--login").click(function () {
    //ボタンがクリックされたら
    $('.header-nav--login').fadeIn(300); 
    $('.header__burger-musk').fadeIn(300);

    $(".js-bars").click(function () {
      //ナビゲーションのリンクがクリックされたら
      $('.header-nav--login').fadeOut(300);
      $('.header__burger-musk').fadeOut(300);
    });

    $(".header-nav a").click(function () {
      //ナビゲーションのリンクがクリックされたら
      $('.header-nav--login').fadeOut(300);
      $('.header__burger-musk').fadeOut(300);
    });
  });

  $(".js-hamburger--non-login").click(function () {
    //ボタンがクリックされたら
    $('.header-nav--non-login').fadeIn(300); 
    $('.header__burger-musk').fadeIn(300);

    $(".js-bars").click(function () {
      //ナビゲーションのリンクがクリックされたら
      $('.header-nav--non-login').fadeOut(300);
      $('.header__burger-musk').fadeOut(300);
    });

    $(".header-nav a").click(function () {
      //ナビゲーションのリンクがクリックされたら
      $('.header-nav--non-login').fadeOut(300);
      $('.header__burger-musk').fadeOut(300);
    });
  });

  //スクロール
  $('a[href*="#"]').click(function () {
    var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  
    var pos = $(elmHash).offset().top - 70; //idの上部の距離からHeaderの高さを引いた値を取得
  
    $('body,html').animate({
      scrollTop: pos
    }, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  
    return false;
  });


  // datepicker
  $("#datepicker").datepicker({
    buttonImage: "image/common/icon__calendar.png",        // カレンダーアイコン画像
    buttonText: "カレンダーを表示",
    buttonImageOnly: true,           // 画像として表示
    showOn: "both",                  // カレンダー呼び出し元の定義
    showOtherMonths: true,
    selectOtherMonths: true
  });

  // $.datepicker.regional['ja'] = {
  //   closeText: '閉じる',
  //   prevText: '<前',
  //   nextText: '次>',
  //   currentText: '今日',
  //   monthNames: ['1月','2月','3月','4月','5月','6月',
  //   '7月','8月','9月','10月','11月','12月'],
  //   monthNamesShort: ['1月','2月','3月','4月','5月','6月',
  //   '7月','8月','9月','10月','11月','12月'],
  //   dayNames: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
  //   dayNamesShort: ['日','月','火','水','木','金','土'],
  //   dayNamesMin: ['日','月','火','水','木','金','土'],
  //   weekHeader: '週',
  //   dateFormat: 'yy/mm/dd',
  //   firstDay: 0,
  //   isRTL: false,
  //   showMonthAfterYear: true,
  //   yearSuffix: '年'};
  // $.datepicker.setDefaults($.datepicker.regional['ja']);

  // 検索バー：予測変換を表示
  $(".search__bar").focus(function() {
    $(".suggest__wrapper").addClass("active");
  });
  $(".search__bar").blur(function() {
    $(".suggest__wrapper").removeClass("active");
  });

  // アコーディオン
  $(".accordion__button").each(function() {
    $(this).on("click", function() {
      $($(this).parent()).next($(".accordion__slide")).slideToggle();
      return false;
    });
  });

  // カウンター
  const minusButton = document.getElementById("counter-minus-button");
  const plusButton = document.getElementById("counter-plus-button");
  const counterNumber = document.getElementById("counter__number");

  minusButton.addEventListener("click", function(event) {
    if(counterNumber.value > 0) {
      counterNumber.value--;
    }
  });

  plusButton.addEventListener("click", function(event) {
    counterNumber.value++;
  });

  // タブのコンテンツ表示
  let tabs = $(".tab__input");
  $(".tab__input").on("click", function() {
    $(".active").removeClass("active");
    const index = tabs.index(this);
    $(".text__wrapper").eq(index).addClass("active");
  });

  // ヘッダーのタブ切り替え動きサンプル
    $('.booking-tab__buttons span').click(function(){
      var thisclass=$(this).attr('class');
      $('#booking-tab__lamp').removeClass().addClass('#booking-tab__lamp').addClass(thisclass);
    });


    // デイトピッカー月表示
    /* Japanese initialisation for the jQuery UI date picker plugin. */
    /* Written by Kentaro SATO (kentaro@ranvis.com). */
    ( function( factory ) {
      if ( typeof define === "function" && define.amd ) {

        // AMD. Register as an anonymous module.
        define( [ "../widgets/datepicker" ], factory );
      } else {

        // Browser globals
        factory( jQuery.datepicker );
      }
    }( function( datepicker ) {

    datepicker.regional.ja = {
      closeText: "閉じる",
      prevText: "&#x3C;前",
      nextText: "次&#x3E;",
      currentText: "今日",
      monthNames: [ "1月","2月","3月","4月","5月","6月",
      "7月","8月","9月","10月","11月","12月" ],
      monthNamesShort: [ "1月","2月","3月","4月","5月","6月",
      "7月","8月","9月","10月","11月","12月" ],
      dayNames: [ "日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日" ],
      dayNamesShort: [ "日","月","火","水","木","金","土" ],
      dayNamesMin: [ "日","月","火","水","木","金","土" ],
      weekHeader: "週",
      dateFormat: "yy/mm/dd",
      firstDay: 0,
      isRTL: false,
      showMonthAfterYear: true,
      yearSuffix: "年" };
    datepicker.setDefaults( datepicker.regional.ja );

    return datepicker.regional.ja;

    } ) );
    // デイトピッカー年月表示
    $(function(){
			$('.c-ym').datepicker({
        showOnlyMonths: true,
        dateFormat: "yy/mm"
			});
		
		});

    var btn = $('.calender2__table td');
    btn.click(function(){
      btn.removeClass('active');
      $(this).addClass('active');
    });

});