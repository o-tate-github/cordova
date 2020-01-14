var vueapp = {
	main: function() {
		var app = new Vue({
  		el: '#app',
  		data: {
				counter: 0,
				result: 0.0,
				hasComputed: false,
				animationMode: "show-content",
    		questionList: [
      		{id:  1, answer: 3, direction:  1, text: '今日の気分は全体的には良い感じ？'},
					{id:  2, answer: 3, direction: -1, text: '今日は寝たきりだったり休んでいた？'},
      		{id:  3, answer: 3, direction:  1, text: '今日のあなたはちょっといい感じ？'},
					{id:  4, answer: 3, direction: -1, text: '今日はユーウツな冴えない気持ち？'},
					{id:  5, answer: 3, direction:  1, text: '今日の仕事には夢中になれた？'},
					{id:  6, answer: 3, direction: -1, text: '今日は悲しかったり虚しかった？'},
					{id:  7, answer: 3, direction: -1, text: '今日はゆっくり物事を考えられた？'},
					{id:  8, answer: 3, direction:  1, text: '今日はうっかりミスや早とちりは？'},
					{id:  9, answer: 3, direction: -1, text: '今日は疲れたとかだるい感じは？'},
					{id: 10, answer: 3, direction:  1, text: '今日のお天気は身体には良かった？'},
					{id: 11, answer: 3, direction: -1, text: '今日はもうダメだ..とか思ったかな？'},
					{id: 12, answer: 3, direction:  1, text: '今日の１日は価値ある１日だった？'}
    		],
				answerLevels: [
					{value: 1, text: '1'},
					{value: 2, text: '2'},
					{value: 3, text: '3'},
					{value: 4, text: '4'},
					{value: 5, text: '5'}
				],
				comments: [
					{text: '落ち着け。ちゃんとお薬飲んで無理せず..。'},
					{text: '涙のあとには虹もでる..まずはリラックス。'},
					{text: 'あまりくよくよせずに、とりあえず寝よう！'},
					{text: '良くも悪くもなくフツーです。普通が一番！'},
					{text: '調子いいね！少しブレーキ意識してみよう♪'},
					{text: 'キレッキレに絶好調！突っ走りには要注意！'}
				]
  		},
			methods: {
				nextQuestion: function () {
					this.animationMode = "show-content";
					this.counter++;
				},
				previousQuestion: function () {
					this.animationMode = "show-content";
					this.counter--;
				},
				viewResult: function () {
					this.animationMode = "show-content";
					var sumValue = 0;
					for (i = 0; i < this.questionList.length; i++) {
						if (this.questionList[i].direction == 1) {
							sumValue += this.questionList[i].answer;
						}
						else {
							sumValue += (6 - this.questionList[i].answer);
						}
					}
					this.result = Math.round((sumValue / this.questionList.length) * 10.0) / 10.0;
					this.hasComputed = true;
				},
				tryAgain: function () {
					this.animationMode = "show-content";
					this.counter = 0;
					this.result = 0;
					for (i = 0; i < this.questionList.length; i++) {
						this.questionList[i].answer = 3;
					}
					this.hasComputed = false;
				},
				transition: function(funcName) {
					this.animationMode = "hide-content";
					setTimeout(this[funcName], 1000);
				}
			}
		})
	}
};
