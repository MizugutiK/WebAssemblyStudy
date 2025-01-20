import fs from 'fs';
import { instantiate } from '@assemblyscript/loader';

// WebAssembly モジュールをロードして使用する
const wasm = fs.readFileSync('./build/release.wasm');
const { exports } = await instantiate(wasm);

// AssemblyScript の関数を呼び出して結果を表示
console.log("Result from WebAssembly:", exports.add(5, 3)); // add 関数を使用
