# Digital Portfolio Analytics Platform

## 概要
デジタルポートフォリオのKPI測定・分析基盤。
Next.jsベースのウェブアプリケーションによるプロトタイプとGA4/BigQueryを活用した分析環境。

## プロジェクト構成
- `src/`: Next.jsアプリケーション
- `analysis/`: データ分析環境
  - Jupyter Notebookベースの分析ツール
  - BigQueryを使用したKPI測定
  - 詳細は `analysis/README.md` を参照

## 技術スタック
- Frontend: Next.js, TypeScript, Tailwind CSS
- Analytics: GA4, BigQuery
- Data Analysis: Python, pandas, plotly

## 開発環境セットアップ
1. 依存関係のインストール
```bash
npm install
```

2. 環境変数の設定
```bash
cp .env.example .env.local
```

3. 開発サーバーの起動
```bash
npm run dev
```

## 分析環境
詳細は `analysis/README.md` を参照してください。

## KPI目標
- ユニークビジター：月間500-1,000人
- ページ滞在時間の最適化
- 問い合わせ数の追跡
- 案件獲得率の測定