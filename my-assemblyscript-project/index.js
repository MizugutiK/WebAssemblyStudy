// WebAssembly モジュールを読み込む
async function loadWasm() {
    try {
        // WebAssembly モジュールを取得
        const response = await fetch('./build/release.wasm'); // パスを正しく設定
        if (!response.ok) {
            throw new Error(`Failed to fetch WebAssembly module: ${response.statusText}`);
        }

        const wasmBinary = await response.arrayBuffer();
        const { instance } = await WebAssembly.instantiate(wasmBinary);

        // WebAssembly の関数を呼び出す
        const result = instance.exports.add(5, 3);

        // 結果を表示
        document.getElementById('Result').innerText = `Result from WebAssembly: ${result}`;
    } catch (error) {
        console.error("Error loading WebAssembly module:", error);
        document.getElementById('Result').innerText = "Error loading WebAssembly module.";
    }
}
  // キャンバスに画像を表示する
  function loadImageToCanvas(imageSrc) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = function () {
        // 画像の描画
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    
    img.onerror = function () {
        console.error("Error loading image:", imageSrc);
    };

    // 画像のソースを指定
    img.src = imageSrc;
}

// WebAssembly モジュールを読み込む関数を実行
loadWasm();
loadImageToCanvas('ROGO.png');
