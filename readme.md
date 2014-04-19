nw-shooter - 射手字幕下载器
==============================================================
射手字幕下载器可以从射手网上自动下载视频对应的字幕。

- 使用node-webkit编写UI，可以方便地跨平台使用。
- 使用射手影音的字幕API，理论上射手影音播放器能够下载的字幕都可以下载到。

## 安装   


- 从源代码编译

	github repository： [https://github.com/ngjaying/nw-shooter.git](https://github.com/ngjaying/nw-shooter.git "https://github.com/ngjaying/nw-shooter.git")

详细打包方法参见
[https://github.com/rogerwang/node-webkit/wiki/How-to-package-and-distribute-your-apps](https://github.com/rogerwang/node-webkit/wiki/How-to-package-and-distribute-your-apps "node-webkit程序打包方法")

- 直接下载windows下可运行程序

    [http://pan.baidu.com/s/1jGJqKaq](http://pan.baidu.com/s/1jGJqKaq "下载地址")
	
下载解压后，双击**射手字幕下载器.exe**即可运行。

## 如何使用

选择影音文件后，界面上会有每个文件的进度条闪烁，同时字幕会自动开始下载。绿色表示下载成功，红色表示下载失败(射手服务器上没有字幕会下载失败)。字幕会自动保存到源文件所在目录，文件名与源文件相同。目前仅下载中文字幕。
