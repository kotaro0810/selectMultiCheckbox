(function() {
  // ユーザーが画面上で選択しているテキスト範囲を取得します。
  const selection = window.getSelection();

  // 選択範囲が存在しない場合は処理を中断します。
  if (!selection.rangeCount) return;

  // 選択範囲の最初のレンジ（範囲）を取り出します。
  // rangeCount は取得できる範囲の数、getRangeAt(0) は最初の範囲を意味します。
  const range = selection.getRangeAt(0);

  // ページ内のすべてのチェックボックス要素を取得します。
  // querySelectorAll は条件に合う要素をすべて返します。
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  // 取得したチェックボックスの一覧を一つずつ処理します。
  checkboxes.forEach(cb => {
    // 現在のチェックボックスが選択範囲に含まれているかを判定します。
    // intersectsNode は、指定した要素が範囲と交差しているかどうかを調べるメソッドです。
    if (range.intersectsNode(cb)) {
      // チェックボックスがまだチェックされていない場合だけチェックを付けます。
      if (!cb.checked) {
        cb.checked = true; // チェックボックスをONにします。

        // change イベントを手動で発生させます。
        // これにより、チェック状態の変更を監視している他のコード（onchange など）も反応します。
        cb.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }
  });
})();