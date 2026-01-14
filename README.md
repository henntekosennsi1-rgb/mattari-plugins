# 🎮 MattariMinecraft プラグイン配布サイト

MattariMinecraftで開発したプラグインの配布・ドキュメントサイトです。

## 🚀 セットアップ

### 必要環境
- Node.js 18以上
- npm または pnpm

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/your-username/mattari-plugins.git
cd mattari-plugins

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

開発サーバーが `http://localhost:4321` で起動します。

## 📁 プロジェクト構造

```
mattari-plugins/
├── src/
│   ├── components/       # 再利用可能なコンポーネント
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── PluginCard.astro
│   │   └── ArticleCard.astro
│   ├── layouts/          # ページレイアウト
│   │   └── Layout.astro
│   ├── pages/            # ページ（URLに対応）
│   │   ├── index.astro
│   │   ├── plugins/
│   │   │   └── [slug].astro
│   │   └── articles/
│   │       └── [slug].astro
│   ├── content/          # Markdownコンテンツ
│   │   ├── plugins/      # プラグイン情報
│   │   └── articles/     # 記事
│   └── styles/           # グローバルスタイル
│       └── global.css
├── public/               # 静的ファイル
│   └── images/
├── astro.config.mjs      # Astro設定
├── package.json
└── README.md
```

## 📝 コンテンツの追加方法

### プラグインを追加する

`src/content/plugins/` に Markdown ファイルを作成：

```markdown
---
name: "プラグイン名"
version: "1.0.0"
icon: "🎮"
category: "minigame"
description: "プラグインの説明"
tags: ["タグ1", "タグ2"]
downloads: 100
bedrockSupport: true
spigotUrl: "https://www.spigotmc.org/..."
modrinthUrl: "https://modrinth.com/..."
githubUrl: "https://github.com/..."
---

## 概要

プラグインの詳細な説明...

## 導入方法

1. ダウンロード
2. pluginsフォルダに配置
3. サーバーを再起動

## コマンド一覧

| コマンド | 説明 | 権限 |
|---------|------|------|
| /example | 例 | example.use |

## Config解説

\`\`\`yaml
setting: value
\`\`\`
```

### 記事を追加する

`src/content/articles/` に Markdown ファイルを作成：

```markdown
---
title: "記事タイトル"
emoji: "📖"
description: "記事の説明"
tags: ["タグ"]
date: "2026-01-14"
featured: true
---

記事の本文...
```

## 🔧 カスタマイズ

### サイト情報の変更

`astro.config.mjs` を編集：

```javascript
export default defineConfig({
  site: 'https://your-domain.com',  // 本番URL
  base: '/mattari-plugins',          // GitHub Pagesの場合
});
```

### 色・デザインの変更

`src/styles/global.css` の CSS変数を編集：

```css
:root {
  --primary: #667eea;        /* メインカラー */
  --primary-dark: #764ba2;   /* メインカラー（暗め） */
  --accent-green: #00d4aa;   /* アクセントカラー */
  /* ... */
}
```

## 🚀 デプロイ

### GitHub Pages

1. GitHub Actionsの設定ファイルを作成（`.github/workflows/deploy.yml`）
2. リポジトリ設定でGitHub Pagesを有効化
3. mainブランチにpushすると自動デプロイ

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

### 本番ビルド

```bash
# ビルド
npm run build

# プレビュー
npm run preview
```

## 📚 参考リンク

- [Astro ドキュメント](https://docs.astro.build)
- [Astro Starlight](https://starlight.astro.build/) - より高度なドキュメントサイト用

## 📄 ライセンス

MIT License
