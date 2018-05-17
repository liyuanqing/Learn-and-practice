##node服务器构建

###一、构建环境说明
	1.服务器系统要求：
		支持 macOS，Linux，Windows，示例采用centos7.2
	2.硬件配置要求：
		根据实际项目进行选择
	3.node版本要求：
		>6.0.0建议使用lts版本
	4.node.js平台的web应用框架
		可选的有express、koa、egg等。
###二、操作步骤
	1.操作系统安装
		可以使用阿里云、腾讯云、电信云、亚马逊云等云服务器或本地安装虚拟机抑或当前系统进行操作，示例采用阿里云进行部署：
		创建ECS示例选择公共镜像centos7.2，安装成功后使用root用户登录linux实例。
	2.部署node.js环境——二进制文件安装或者源码安装后进行编译，示例采用二进制文件安装
		下载压缩包至系统指定目录，解压后，在bin文件夹中就已存在node和npm，无需手工编译。
		详细安装步骤：
			1.wget命令下载node.js安装包。
			wget https:nodejs.org/dist/v6.9.5/node-v6.9.5-linux-x64.tar.xz
			2.解压文件
			tar xvf node-v6.9.5-linux-x64.tar.xz
			3.创建软连接，使node和npm命令全局有效
			ln -s /root/node-v6.9.5-linux-x64/bin/node /usr/local/bin/node
			ln -s /root/node-v6.9.5-linux-x64/bin/npm /usr/local/bin/npm
			4.查看node、npm版本
			5.node.js环境安装完毕
			另：软件默认安装在/root/node-v6.9.5-linux-x64/目录下。如果需要将该软件安装到其他目录（如：/opt/node/）下，请进行如下操作：

			mkdir -p /opt/node/
			mv /root/node-v6.9.5-linux-x64/* /opt/node/
			rm -f /usr/local/bin/node
			rm -f /usr/local/bin/npm
			ln -s /opt/node/bin/node /usr/local/bin/node
			ln -s /opt/node/bin/npm /usr/local/bin/npm
	3.使用nvm部署node.js环境
		NVM（Node version manager）是Node.js的版本管理软件，使用户可以轻松在Node.js各个版本间进行切换。适用于长期做 node 开发的人员或有快速更新node版本、快速切换node版本这一需求的用户。
		
		安装步骤：		
			1、直接使用git将源码克隆到本地的~/.nvm目录下，并检查最新版本。
			
			yum install git
			git clone https://github.com/cnpm/nvm.git ~/.nvm && cd ~/.nvm && git checkout `git describe --abbrev=0 --tags`
			2、激活NVM。
			
			echo ". ~/.nvm/nvm.sh" >> /etc/profile
			source /etc/profile
			3、列出Node.js的所有版本。
			
			nvm list-remote
			4、安装多个Node.js版本。
			
			nvm install v6.9.5
			nvm install v7.4.0
			5、查看已安装Node.js版本，当前使用的版本为v6.9.5。
			
			[root@iZuf62didsxigy36d6kjtrZ .nvm]# nvm ls
			->       v6.9.5
			         v7.4.0
			6、切换Node.js版本至v7.4.0。
			
			[root@iZuf62didsxigy36d6kjtrZ .nvm]# nvm use v7.4.0
			Now using node v7.4.0
			NVM的更多操作请参考帮助文档：
			
			nvm help

	4.部署测试项目
		1.新建项目文件example.js。

		cd ~
		touch example.js
		2、使用vim编辑器打开项目文件example.js。
		
		yum install vim
		vim example.js
		输入“i”，进入编辑模式,将以下项目文件内容粘贴到文件中。使用“Esc”按钮，退出编辑模式，输入“:wq”，回车，保存文件内容并退出。
		
		项目文件内容：
		
		const http = require('http');
		const hostname = '0.0.0.0';  //或私有IP
		const port = 80;
		const server = http.createServer((req, res) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		res.end('Hello World\n');
		});
		server.listen(port, hostname, () => {
		console.log(`Server running at http://${hostname}:${port}/`);
		});
		
		3、运行项目。
		
		node ~/example.js
		注：可以使用命令“node ~/example.js &”将项目置于后台运行。
		
		4、使用命令查看项目端口是否存在。
		
		netstat -tpln
		
		5、在浏览器中输入http://IP:端口号 访问项目。
		
		到这里我们的Node.js项目就部署完成了。
###ps：
	1.阿里云端口配置
		阿里云默认开启22、80、3389端口，应用启动时端口非80端口时，需要在安全规则内进行相应配置，否则端口无法使用。
		
		通过ssh命令行启动node.js服务时，关闭链接服务会自动停止，若需要应用一直运行，需要添加forever，为了能够全局使用建议全局安装。

		forever详细使用请通过forever -help获取
		服务启动：forever start index.js
		服务停止：foreveer stop index.js
		运行中服务列表：forever list
