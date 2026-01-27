<img src="./portfolio-1.svg"/>

## 概要

Webシステムのポートフォリオ

## 動作要件

### [Docker Desktop](https://docs.docker.com/desktop/)

アプリケーションの開発・起動用 \
※後述するVSCodeのDev Containersの動作要件にもなります。

  * [Mac](https://docs.docker.com/desktop/setup/install/mac-install/)
  * [Windows](https://docs.docker.com/desktop/setup/install/windows-install/) ※WSL用の設定を推奨

### [VSCode](https://code.visualstudio.com/) 

コードエディター \
DevContainersを使用するため、エディターですが実質必須

#### 拡張機能
  * [DevContainers](https://github.com/devcontainers)

## 動作要件（ローカル起動する場合）

### [aqua](https://aquaproj.github.io/docs/install/)　

各種ツールのインストール用 

### [OpenSSL](https://docs.openiam.com/docs-4.2.1.3/appendix/2-openssl)

自己証明書と秘密鍵の作成用

## 起動方法

### ローカル

1. VSCodeで本プロジェクトを開く
1. `aqua i`
1. `task generate-keys` ※[openssl](https://docs.openiam.com/docs-4.2.1.3/appendix/2-openssl)が必要
1. `docker compose up`
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