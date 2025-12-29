import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from '../src/app.module';
import * as fs from 'fs';
import * as path from 'path';

/**
 * OpenAPI仕様書を生成するスクリプト
 * JSON形式とYAML形式で出力します
 */
async function generateOpenApiSpec() {
  // NestJSアプリケーションのインスタンスを作成
  const app = await NestFactory.create(AppModule, {
    logger: false, // ログ出力を無効化
  });

  // Swagger設定
  const config = new DocumentBuilder()
    .setTitle('Portfolio Site API')
    .setDescription('Portfolio Site Backend API Documentation')
    .setVersion('1.0')
    .addTag('portfolio')
    .build();

  // OpenAPI仕様書を生成
  const document = SwaggerModule.createDocument(app, config);

  // 出力ディレクトリを作成
  const outputDir = path.join(__dirname, '../docs');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // JSON形式で出力
  const jsonPath = path.join(outputDir, 'openapi.json');
  fs.writeFileSync(jsonPath, JSON.stringify(document, null, 2));
  console.log(`✅ OpenAPI JSON generated: ${jsonPath}`);

  // YAML形式で出力（必要に応じて）
  const yamlPath = path.join(outputDir, 'openapi.yaml');
  const yaml = convertToYaml(document);
  fs.writeFileSync(yamlPath, yaml);
  console.log(`✅ OpenAPI YAML generated: ${yamlPath}`);

  // アプリケーションを終了
  await app.close();
}

/**
 * 簡易的なYAML変換関数
 * 本格的なYAML変換が必要な場合は js-yaml パッケージを使用してください
 */
function convertToYaml(obj: any, indent = 0): string {
  const spaces = '  '.repeat(indent);
  let yaml = '';

  for (const [key, value] of Object.entries(obj)) {
    if (value === null || value === undefined) {
      yaml += `${spaces}${key}: null\n`;
    } else if (typeof value === 'object' && !Array.isArray(value)) {
      yaml += `${spaces}${key}:\n${convertToYaml(value, indent + 1)}`;
    } else if (Array.isArray(value)) {
      yaml += `${spaces}${key}:\n`;
      value.forEach((item) => {
        if (typeof item === 'object') {
          yaml += `${spaces}  -\n${convertToYaml(item, indent + 2)}`;
        } else {
          yaml += `${spaces}  - ${item}\n`;
        }
      });
    } else if (typeof value === 'string') {
      yaml += `${spaces}${key}: "${value}"\n`;
    } else {
      yaml += `${spaces}${key}: ${value}\n`;
    }
  }

  return yaml;
}

// スクリプトを実行
generateOpenApiSpec()
  .then(() => {
    console.log('✨ OpenAPI generation completed successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Error generating OpenAPI specification:', error);
    process.exit(1);
  });
