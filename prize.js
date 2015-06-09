/* 20150609 */
var lottery = document.getElementsByClassName('lottery')[0];
var truth = document.getElementsByClassName('truth')[0];
var littlePic = document.getElementsByClassName('little_pic')[0];
var truthPic = document.getElementsByClassName('truth_pic')[0];
var prize = document.getElementsByClassName('prize')[0];
var prizeNum = document.getElementsByClassName('prize_num')[0];
var flag = 0;
var num = 0;
var timer;
var t_pic;

function Game(){
	this.namesArr=["name_查","name_萍","name_s"];    /*童年照片名*/
	this.truthsArr=["p1","p2","p3"];				/*成年照片名，与上面的顺序对应*/
};

Game.prototype.init = function(){
	lottery.value = "开始";
	prizeNum.innerHTML = "一等奖";
};

Game.prototype.start = function(){
	var names = this.namesArr;
	var truths = this.truthsArr;
	prize.addEventListener("change",function(evt){
		var index = prize.selectedIndex;
		getPrize(index);
	},false);
	
	lottery.addEventListener("click",function(evt){
		if(flag===0){
			lottery.value = "停止";
			flag=1;
			truthPic.src = "1.jpg";
			getPicName(names,truths);
		}else{
			lottery.value = "开始";
			flag=0;
			stopPic(names,truths);
		}
	},false);

	truth.addEventListener("click",function(evt){
		truthPic.src = t_pic;
	},false);
};

function getPicName(names,truths){
	num = 0;
	timer = setInterval(function(){
		num++;
		if(num===names.length){
			num = 0;
		}
		littlePic.src = "photos/"+ names[num] +".jpg";
		t_pic = "photos/"+ truths[num] +".jpg";
	},100);
}

function stopPic(names,truths){
	clearInterval(timer);
	if(names.length>=2){
		names.splice(num,1);
		truths.splice(num,1);
	}else{
		alert("Game over!");
	}
}

function getPrize(index){
	prizeNum.innerHTML = prize.options[index].text;
}

function play(){
	var game = new Game();
	game.init();
	game.start();
}

play();