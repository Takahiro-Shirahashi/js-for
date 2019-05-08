//（）の内側で繰り返しの条件を設定し、{}の内側で何を繰り返すのかを設定する
for(var i = 1 ; i <= 10 ; i = i + 1){
//変数iをコンソールへ出力。+以降をアレンジ
  console.log(i + '回目の繰り返し処理まで正常に出来ています。');
//console.log(i);との結果の違いを確認する為のアレンジ
  document.getElementById('result').textContent=(i + '回目の繰り返し処理まで正常に出来ています。');
}
