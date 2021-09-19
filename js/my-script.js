$(function () {

  // セレクトでその他（other）が選択されたときだけテキスト入力欄が出現
  $('.D13-cut-option-table__select').change(function() {
    console.log($("option:selected", this).val());
    
    if ($("option:selected", this).val() == 'other') {
      console.log(2);
      $(this).parent().parent().find('.D13-cut-option-table__input').css('display','block');
    }else{ 
      console.log(3);
      $(this).parent().parent().find('.D13-cut-option-table__input').css('display','none');
    }
  });

  // 追加ボタンを押したら入力オプションが増える、バツ押したら消える
  var minCount = 1;
  var maxCount = 10;
  // 追加
  $('.D13-input-option__add-button').on('click', function(){
    var inputCount = $('#D13-input-option .D13-input-option').length;
    if (inputCount < maxCount){
      var element = $('#D13-input-option .D13-input-option:last-child').clone(true);// 末尾をイベントごと複製
      // 複製したinputのクリア
      var inputList = element[0].querySelectorAll('input[type="text"]');
      for (var i = 0; i < inputList.length; i++) {
        inputList[i].value = "";
      }
      $('#D13-input-option .D13-input-option').parent().append(element);// 末尾追加
    }
  });
  // 削除
  $('.D13-input-option__del-button').on('click', function(){// イベントごと複製しているのでonのselectorは未設定
    var inputCount = $('#D13-input-option .D13-input-option').length;
    if (inputCount > minCount){
      $(this).closest('.D13-input-option').remove();
    }
  });

  // 追加ボタンを押したら入力オプションが増える、バツ押したら消える
  // 追加
  $('.D18-belongings__add-button').on('click', function(){
    var inputCount = $('#D18-belongings__item-select .D18-belongings__item').length;
    if (inputCount < maxCount){
      var element = $('#D18-belongings__item-select .D18-belongings__item:last-child').clone(true);// 末尾をイベントごと複製
      // 複製したinputのクリア
      var inputList = element[0].querySelectorAll('input[type="select"]');
      for (var i = 0; i < inputList.length; i++) {
        inputList[i].value = "";
      }
      $('#D18-belongings__item-select .D18-belongings__item').parent().append(element);// 末尾追加
    }
  });
  // 削除
  $('.D18-belongings__del-button').on('click', function(){// イベントごと複製しているのでonのselectorは未設定
    var inputCount = $('#D18-belongings__item-select .D18-belongings__item').length;
    if (inputCount > minCount){
      $(this).closest('.D18-belongings__item').remove();
    }
  });

  // 追加ボタンを押したら入力オプションが増える、バツ押したら消える
  // 追加
  $('.D18-price-calculation__add-button').on('click', function(){
    var inputCount = $('#D18-price-calculation__item-option .D18-price-calclation__select').length;
    if (inputCount < maxCount){
      var element = $('#D18-price-calculation__item-option .D18-price-calclation__select:last-child').clone(true);// 末尾をイベントごと複製
      // 複製したinputのクリア
      var inputList = element[0].querySelectorAll('input[type="text"]');
      for (var i = 0; i < inputList.length; i++) {
        inputList[i].value = "";
      }
      $('#D18-price-calculation__item-option .D18-price-calclation__select').parent().append(element);// 末尾追加
    }
  });
  

  //チェックボックスにチェックしたら下のコンテンツ表示
  $('#single').click(function() {
    $("#single-wrapper").slideToggle(this.checked);
  });
  $('#care-4-point-set').click(function() {
    $("#care-4-point-set-wrapper").slideToggle(this.checked);
  });
  $('[name="option"]:radio').change( function() {
    if($('#has-option').prop('checked')){
      $('#has-option-wrapper').slideDown();
    } else if ($('#no-option').prop('checked')) {
      $('#has-option-wrapper').slideUp();
    } 
  });
  $('.D22-js-radio').change( function() {
    var val = $(this).attr('class');
    if(val == 'D22-js-open D22-js-radio' && $(this).prop('checked')){
      $(this).parent().parent().parent().find('.D22-interview__hidden-wrapper').slideDown();
    } else if (val == 'D22-js-hidden D22-js-radio' && $(this).prop('checked')) {
      $(this).parent().parent().parent().find('.D22-interview__hidden-wrapper').slideUp();
    } 
  });
  $('.D25-js-radio').change( function() {
    var val = $(this).attr('class');
    if(val == 'D25-js-open D25-js-radio' && $(this).prop('checked')){
      $(this).parent().parent().parent().find('.D25-interview__hidden-wrapper').slideDown();
    } else if (val == 'D25-js-hidden D25-js-radio' && $(this).prop('checked')) {
      $(this).parent().parent().parent().find('.D25-interview__hidden-wrapper').slideUp();
    } 
  });

  $(".E07-js-radio").change(function () {
    var val = $(this).attr("class");
    if (val == "E07-js-open E07-js-radio" && $(this).prop("checked")) {
      $(this)
        .parent()
        .parent()
        .parent()
        .find(".E07-interview__hidden-wrapper")
        .slideDown();
    } else if (val == "E07-js-hidden E07-js-radio" && $(this).prop("checked")) {
      $(this)
        .parent()
        .parent()
        .parent()
        .find(".E07-interview__hidden-wrapper")
        .slideUp();
    }
  });

  $(".datepicker").datepicker({
    buttonImage: "/image/common/icon-calenderInput.svg",        // カレンダーアイコン画像
    buttonText: "カレンダーを表示",
    buttonImageOnly: true,           // 画像として表示
    showOn: "both",                  // カレンダー呼び出し元の定義
    showOtherMonths: true,
    selectOtherMonths: true
  });


});