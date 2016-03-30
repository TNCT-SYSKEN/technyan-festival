/**
 * Technyan Festival!!!
 * 
 * @author Hagihara Ryosuke <raryosu@gmail.com>
 * @copyright 2016 Hagihara Ryosuke
 * @license MIT License
 * @version 1.0.0


                                                                
                   `                                            
                 :@;@      `+@+                                 
                ;+,,@      ;,,'@                                
                @,,,@      @,,,+,                               
               @,,,,@      @,,,,@                               
               @,,,,@@@@@@+@,,,,'`                              
              `;,,,,,,,,,,,,,,,,,'                              
             `@,,,,,,,,,,,,,,,,,,@                              
            @+,,,,,,,,,,,,,,,,,,,,#@                            
          '@,,,,,,,,,,,,,,,,,,,,,,,,@:                          
         @;,,,,,,,,,,,,,,,,,,,,,,,,,,'@                         
        @,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:@                        
       @,,,,,,,,,,#@@,,,,,,,,@@:,,,,,,,,@                       
      @,,,,,,,,,,:@@@@,,,,,,@@@@,,,,,,,,:@                      
     +:,,,,,,,,,,;@@@@,,@,,,@@@@,,,,,,,,,+,                     
     @,,,,,,,,,,,,@@@,,+@+,,+@@#,,,,,,,,,,@                     
    @,,,,,,,,,,,,,,,,,,@@@,,,,,,,,,,,,,,,,,@                    
   `+,,,,,,,,,,,,,,,,,@,@,@,,,,,,,,,,,,,,,,@                    
   @,,,,,,,,,,,,,,,,,,,,@,,,,,,,,,,,,,,,,,,,+                   
   @,,,,,,,,,,,,,,,,,,,,@,,,,,,,,,,,,,,,,,,,@                   
  .;,,,,,,,,,,,,,,,,,,,,@,,,,,,,,,,,,,,,,,,,+                   
  @,,,,,,,,,,,,,,,,,,,,,@,,,,,,,,,,,,,,,,,,,,:                  
  @,,,,,,,,,:@@,,,,,,,,,@,,,,,,,,,#@',,,,,,,,@                  
  @,,,,,,,,,,,,+@+,,,,,,@,,,,,,'@#,,,,,,,,,,,@                  
  @,,,,,,,,,,,,,,,@@',,,@,,,;@@,,,,,,,,,,,,,,@                  
  @,,,,,,,,,,,,,,,,,:@@:@:@@:,,,,,,,,,,,,,,,,@                  
  @,,,,,,,,,,,,,,,,,,,,;@',,,,,,,,,,,,,,,,,,,@                  
  @,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,@                  
  @,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,;                  
  ,:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'                   
   @,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,@                   
   @,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,@                   
   .',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,#                    
    @,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,@                    
    .+,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,@                     
     @,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,:+                     
      @,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,@                      
       @,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,@                       
        @,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,@                        
         @,,,,,,,,,,,,,,,,,,,,,,,,,,,:@                         
          @',,,,,,,,,,,,,,,,,,,,,,,,#@                          
           ,@:,,,,,,,,,,,,,,,,,,,,:@`                           
            @@@;,,,,,,,,,,,,,,,,'@#@                            
               '@@',,,,,,,,,,'@@'
 * April fool 2016
 */

enchant(); // enchant.jsの有効化

window.onload = function() {
	var game = new Game(320, 320);
	game.fps = 24;
	game.preload('img/technyanA.png', 'img/technyanB.png', 'img/technyanC.png', 'img/technyanD.png', 'img/technyanE.png', 'img/circle.png');

	game.onload = function() {
		/**
		 * タイトルシーン
		 **/
		var createStartScene = function() {
			var scene = new Scene();
			scene.backgroundColor = '#ffc0cb';

			// タイトル文字列
			var title = new Label('Technyan Festival');
			title.color = '#ffffff';
			title.x = 73;
			title.y = 96;
			title.font = '20px sans-serif';
			scene.addChild(title);

			// サブタイトル（操作説明）
			var subTitle = new Label('輪がてくにゃんに重なるタイミングでクリック');
			subTitle.x = 15;
			subTitle.y = 196;
			subTitle.font = '14px sans-serif';
			scene.addChild(subTitle);

			// クリックでスタート
			var startLabel = new Label('クリックでスタート');
			startLabel.color = '#ffffff';
			startLabel.x = 98;
			startLabel.y = 280;
			startLabel.font = '14px sans-serif';
			scene.addChild(startLabel);

			// タッチイベントを設定
			scene.addEventListener(Event.TOUCH_START, function(e) {
				// クリックされたらゲームシーンに置き換える
				game.replaceScene(createGameScene());
			});
			
			return scene;
		};

		/**
		 * ゲームシーン
		 **/
		var createGameScene = function() {
			var scene = new Scene();
			scene.backgroundColor = '#ffc0cb';

			var time = 1000;
			var score = 0;
			var levelLabel = new Label();

			/*
			// キーの割当
			game.keybind('D'.charCodeAt(0), 'a');
			game.keybind('F'.charCodeAt(0), 'b');
			game.keybind('G'.charCodeAt(0), 'c');
			game.keybind('J'.charCodeAt(0), 'd');
			game.keybind('K'.charCodeAt(0), 'e');
			*/

			// 得点表示ラベル
			var scoreLabel = new Label('スコア: ' + score);
			scoreLabel.x = 10;
			scoreLabel.y = 15;
			scoreLabel.font = '14px sans-serif';
			scene.addChild(scoreLabel);

			// 残り時間ラベル
			var timeLimit = new Label('残り時間: ' + time);
			timeLimit.font = '14px sans-serif';
			timeLimit.x = 10;
			timeLimit.y = 30;
			scene.addChild(timeLimit);

			// x座標を指定
			var geoX = [0, 64, 128, 192, 256];

			// てくにゃんを表示
			var technyanA = new Sprite(64, 64);
			technyanA.image = game.assets['img/technyanA.png'];
			technyanA.y = 250;
			technyanA.x = geoX[0];
			scene.addChild(technyanA);
			var technyanB = new Sprite(64, 64);
			technyanB.image = game.assets['img/technyanB.png'];
			technyanB.y = 250;
			technyanB.x = geoX[1];
			scene.addChild(technyanB);
			var technyanC = new Sprite(64, 64);
			technyanC.image = game.assets['img/technyanC.png'];
			technyanC.y = 250;
			technyanC.x = geoX[2];
			scene.addChild(technyanC);
			var technyanD = new Sprite(64, 64);
			technyanD.image = game.assets['img/technyanD.png'];
			technyanD.frame = 1;
			technyanD.y = 250;
			technyanD.x = geoX[3]
			scene.addChild(technyanD);
			var technyanE = new Sprite(64, 64);
			technyanE.image = game.assets['img/technyanE.png'];
			technyanE.y = 250;
			technyanE.x = geoX[4]
			scene.addChild(technyanE);

			// 円を表示
			var circle = new Sprite(64, 64);
			circle.image = game.assets['img/circle.png'];
			var vals = createCircleStatus();
			circle.x = geoX[vals[0]];
			circle.y = 0;
			circle.speed = vals[1];
			scene.addChild(circle);

			// フレームイベント
			scene.addEventListener(Event.ENTER_FRAME, function() {
				time--;
				timeLimit.text = '残り時間:' + time;
				// 曲が終わったらゲーム終わった画面に連れて行く
				if(time <= 0) {
					game.replaceScene(createGameoverScene(score));
				}
				circle.y += circle.speed;
				if(circle.y >= 320) {
					scene.removeChild(levelLabel);
					score -= 50;
					scoreLabel.text = 'スコア: ' + score;
					levelLabel.text = 'Bad... (-50)';
					levelLabel.color = '#ffffff';
					levelLabel.x = 87.5;
					levelLabel.y = 96;
					levelLabel.font = '28px sans-serif';
					scene.addChild(levelLabel);
					createCircleStatus();
					scene.addChild(circle);
				}
			});

			// タッチイベント
			circle.addEventListener(Event.TOUCH_START, function(e) {
				scene.removeChild(levelLabel);
				// 誤差が小さいとき
				if (
					 (this.y <= technyanA.y+2 && this.y >= technyanA.y-2) || 
					 (this.y <= technyanB.y+2 && this.y >= technyanB.y-2) || 
					 (this.y <= technyanC.y+2 && this.y >= technyanC.y-2) || 
					 (this.y <= technyanD.y+2 && this.y >= technyanD.y-2) || 
					 (this.y <= technyanE.y+2 && this.y >= technyanE.y-2)) {
					score += 500;

					levelLabel.text = 'Excellent!! (+500)';
					levelLabel.x = 40;
				} else if((this.y >= technyanA.y+5 || this.y <= technyanA.y-5) || 
					 (this.y >= technyanB.y+5 || this.y <= technyanB.y-5) || 
					 (this.y >= technyanC.y+5 || this.y <= technyanC.y-5) || 
					 (this.y >= technyanD.y+5 || this.y <= technyanD.y-5) || 
					 (this.y >= technyanE.y+5 || this.y <= technyanE.y-5)) {
					score += 100;
					levelLabel.text = 'Good! (+100)';
					levelLabel.x = 68.5;
				} else {
					score -= 50;
					levelLabel.text = 'Bad... (-50)';
					levelLabel.x = 87.5;
				}
				scoreLabel.text = 'スコア: ' + score;
				createCircleStatus();
				console.log('yeah');
				scene.addChild(circle);
				levelLabel.color = '#ffffff';
				levelLabel.y = 96;
				levelLabel.font = '28px sans-serif';
				scene.addChild(levelLabel);
			});

			/*
			scene.addEventListener("abuttondown", keyEventFunc);
			scene.addEventListener("bbuttondown", keyEventFunc);
			scene.addEventListener("cbuttondown", keyEventFunc);
			scene.addEventListener("dbuttondown", keyEventFunc);
			scene.addEventListener("ebuttondown", keyEventFunc);

			function keyEventFunc(e) {
				scene.removeChild(levelLabel);
				var geoY = circle.y;
				var technyan = e.type.charAt(0).toUpperCase();
				// 誤差が小さいとき
				if (
					 (geoY == technyanA.y) || 
					 (geoY == technyanB.y) || 
					 (geoY == technyanC.y) || 
					 (geoY == technyanD.y) || 
					 (geoY == technyanE.y)) {
					score += 500;

					levelLabel.text = 'Excellent!! (+500)';
				} else if((geoY >= technyanA.y+5 || geoY <= technyanA.y-5) || 
					 (geoY >= technyanB.y+5 || geoY <= technyanB.y-5) || 
					 (geoY >= technyanC.y+5 || geoY <= technyanC.y-5) || 
					 (geoY >= technyanD.y+5 || geoY <= technyanD.y-5) || 
					 (geoY >= technyanE.y+5 || geoY <= technyanE.y-5)) {
					score += 100;
					levelLabel.text = 'Good! (+100)';
				} else {
					score -= 50;
					levelLabel.text = 'Bad... (-50)';
				}
				scoreLabel.text = 'スコア: ' + score;
				createCircleStatus();
				scene.addChild(circle);
				levelLabel.color = '#ffffff';
				levelLabel.x = 0;
				levelLabel.y = 96;
				levelLabel.font = '28px sans-serif';
				scene.addChild(levelLabel);
			}
			*/


			/**
			 * 円の状態を生成する
			 */
			function createCircleStatus() {
				var geo = Math.random()*4;
				geo = Math.round(geo);
				var speed = Math.random()*9 + 5;
				speed = Math.round(speed);
				circle.x = geoX[geo];
				circle.y = 0;
				circle.speed = speed;
				return [geo, speed];
			}

			return scene;
		};

		/**
		 * ゲームオーバーシーン
		 * scoreを渡すとscoreを表示します
		 */
		var createGameoverScene = function(score) {
			var scene = new Scene();
			scene.backgroundColor = '#666';

			// スコアを表示
			var scoreLabel = new Label('Score: ' + score);
			scoreLabel.color = '#fff';
			scoreLabel.x = 79;
			scoreLabel.y = 60;
			scoreLabel.font = '20pt sans-serif';
			scene.addChild(scoreLabel);

			// リトライラベル
			var retry = new Label('画面をクリックでリトライ');
			retry.color = '#fff';
			retry.x = 80;
			retry.y = 120;
			retry.font = '10pt sans-serif';
			scene.addChild(retry);

			// リトライする
			scene.addEventListener(Event.TOUCH_START, function(e) {
				game.replaceScene(createStartScene());
			});
			return scene;
		};

		game.replaceScene(createStartScene());
	}
	game.start();
};