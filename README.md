# TypeScript for JavaScript Developpers

## セットアップ手順

```sh
npm install -g yarn
yarn
```

## 初期におこなったことのメモ

```sh
yarn add --dev typescript@4.4.2
./node_modules/.bin/tsc src/install-typescript.ts
```

面倒なので

```sh
npx tsc src/install-typescript.ts
```

とやると一々パスを指定しなくてもよくなる。

## ts-node で楽をする

```sh
npx ts-node src/install-typescript.ts
```

tsc も実行してくれる。

## ts-node-dev を入れてみる

```sh
npx ts-node-dev --respawn src/install-typescript.ts
```

## package.json で簡略式を scripts に追加

```json
"dev": "ts-node-dev --respawn",
```

を追加してみることにした。

```sh
yarn dev src/hoge.ts
```

などで起動できるようになる。
hoge.ts は編集して保存するたびにトランスパイルされ、実行される。

## tsconfig.json を生成する

```sh
npx tsc --init
```

## npm を使ってパッケージのバージョンを調べる

```sh
npm info ts-node versions
```

## Jest で Test

```sh
yarn test
```

でテストが実行可能なように `package.json` に追記してます。
