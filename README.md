## セットアップ手順

```
npm install -g yarn
yarn
```

## 初期におこなったことのメモ

```
yarn add --dev typescript@4.4.2
./node_modules/.bin/tsc src/install-typescript.ts
```

面倒なので

```
npx tsc src/install-typescript.ts
```

とやると一々パスを指定しなくてもよくなる。

## ts-nodeで楽をする

```
npx ts-node src/install-typescript.ts
```
tscも実行してくれる。

## ts-node-devを入れてみる

```
npx ts-node-dev --respawn src/install-typescript.ts
```

## package.json で簡略式をscriptsに追加

```
"dev": "ts-node-dev --respawn",
```
を追加してみることにした。
```
yarn dev src/hoge.ts
```

などで起動できるようになる