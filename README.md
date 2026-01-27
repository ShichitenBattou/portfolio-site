<img src="./portfolio-1.svg"/>

# ポートフォリオ

## 概要

Webシステムのポートフォリオです。

## Requirements

動作確認に必要な物

* [Docker Desktop](https://docs.docker.com/desktop/)\
  アプリケーションの起動用 
  * [Mac](https://docs.docker.com/desktop/setup/install/mac-install/)
  * [Windows](https://docs.docker.com/desktop/setup/install/windows-install/) ※WSL用の設定を推奨

* [VSCode](https://code.visualstudio.com/) \
  コードエディター

* [aqua](https://aquaproj.github.io/docs/install/)　\
  各種ツールのインストール用 

* [OpenSSL](https://docs.openiam.com/docs-4.2.1.3/appendix/2-openssl)\
  自己証明書と秘密鍵の作成用

## 起動方法

### ローカル

1. VSCodeで本プロジェクトを開く
1. プロジェクトルートにて下記コマンドを順に実行
    ```bash
    aqua i # ツール類のインストール
    task generate-keys # opensslを使用して鍵と証明書を作成
    docker compose up # 起動
    ```
1. https://localhost/ or http://localhost/ からアクセス可能

<!-- FIXME: バインドマウントするファイルが検出されず、フォルダとしてマウントしようとしてバグっている -->
<!--
### DevContainers

1. コマンドパレット（`Ctrl + P`）から`DevContainers: Rebuild and Reopen in Container` \
  ※DevContainerでプロジェクトを開きなおす
1. プロジェクトルートで`task generate-keys`を実行
1. プロジェクトルートで`docker compose up`を実行
1. https://localhost/ or http://localhost/ からアクセス可能
-->