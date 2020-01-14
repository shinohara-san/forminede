let peopleArray = [1, 3, 9, 10, 20, 223];
// ララベル上で配列の中にユーザーIDを引っ張ってくるの頼む
let i = 0;

$('.like').on('click', function () {
    $('#' + peopleArray[i]).attr('hidden', true);
    $('#' + peopleArray[i + 1]).attr('hidden', false);
    i = i + 1;
    if (i == peopleArray.length) {
      $('#nobody').attr('hidden', false);
    }
    // そしてデータベースにライクを送る処理頼む
    console.log('like!');
  });

$('.nope').on('click', function () {
    $('#' + peopleArray[i]).attr('hidden', true);
    $('#' + peopleArray[i + 1]).attr('hidden', false);
    i = i + 1;
    if (i == peopleArray.length) {
      $('#nobody').attr('hidden', false);
    }
    console.log('nope!');
  });



