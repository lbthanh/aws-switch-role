### 拡張機能のインストール
AWS management console had a limit to show only last 5 the history of AWS accounts.
This chrome extension to help you link to your new account without extra hassle.

#### データーの準備：
+ aws_account_roles.csvにデーターを記入する
```
　【ファイルフォーマット】
　　　　project_name,aws_account_number,aws_account_role,display_name,environment

　 例：　your-code,000123456789,your-role,your-code@your-role,development
        your-code,001123456789,your-role,your-code@your-role,production


  （※）environmentは「development」また「production」を設定してください。
#### Chrome拡張機能にパッケージをインストール：
```
　① Chrome を開く、chrome://extensionsへアクセス。
　②「パッケージ化されていない拡張機能を読み込む」を選択する。
　③ このプロジェクトのフォルダーに指定する。
　④ Chromeの右上に拡張機能が表示されます。
``` 
