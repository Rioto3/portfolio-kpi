# Analytics Dashboard

## 概要
GA4とBigQueryを活用したデジタルポートフォリオのKPI分析環境。

## フォルダ構成
```
analysis/
└── portfolio_analytics_dashboard.ipynb  # メイン分析ノートブック

```

## セットアップ
1. 必要なライブラリ
```python
pip install pandas plotly google-cloud-bigquery
```

2. BigQuery認証設定
- Google Cloud Consoleでサービスアカウントキーを作成
- 環境変数の設定
```bash
export GOOGLE_APPLICATION_CREDENTIALS="path/to/service-account-key.json"
```

## 使用方法
1. Jupyter Notebookの起動
```bash
jupyter notebook
```

2. `portfolio_analytics_dashboard.ipynb` を開く
3. 各セルを順に実行

## データ分析内容
- ユニークビジター数の推移
- ページ滞在時間分析
- アクセスパターン分析
- KPI達成度の可視化


## 注意事項
- BigQueryの無料枠：10GB/月
- データは24時間ごとに更新
- 長期保存データは適宜エクスポート推奨