# フロントエンド開発用ツール

## OpenAPI 仕様書生成

`generate-openapi.ts` は NestJS アプリケーションから OpenAPI (Swagger) 仕様書を生成するスクリプトです。

### 使用方法

```bash
npm run generate:openapi
```

### 出力ファイル

- `docs/openapi.json` - JSON形式のOpenAPI仕様書
- `docs/openapi.yaml` - YAML形式のOpenAPI仕様書

生成されたファイルはフロントエンド開発時のAPI仕様確認やコード生成に使用できます。

