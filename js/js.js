let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("a");
const gun_div = document.getElementById("b");
const light_div = document.getElementById("c");
const devil_div = document.getElementById("d");
const dragon_div = document.getElementById("e");
const water_div = document.getElementById("f");
const air_div = document.getElementById("g");
const paper_div = document.getElementById("h");
const sponge_div = document.getElementById("i");
const wolf_div = document.getElementById("j");
const tree_div = document.getElementById("k");
const human_div = document.getElementById("l");
const snake_div = document.getElementById("m");
const scissor_div = document.getElementById("n");
const fire_div = document.getElementById("o");

function goToIndex(){
	window.location.href = "index.html";
}

function goToRules(){
	window.location.href = "rules.html";
}

function goToHome(){
	window.location.href = "home.html";
}	


function getComputerChoice(){
	const choices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o'];
	const randomNumber = Math.floor(Math.random() * 15);
	return choices[randomNumber];
}

function convertToWord(letter){
	if(letter == "a") return "Rock";
	if(letter == "b") return "Gun";
	if(letter == "c") return "Thunder";
	if(letter == "d") return "Devil";
	if(letter == "e") return "Dragon";
	if(letter == "f") return "Water";
	if(letter == "g") return "Air";
	if(letter == "h") return "Paper";
	if(letter == "i") return "Sponge";
	if(letter == "j") return "Wolf";
	if(letter == "k") return "Tree";
	if(letter == "l") return "Human";
	if(letter == "m") return "Snake";
	if(letter == "n") return "Scissors";
	else return "Fire";
}


function win(userChoice,computerChoice){
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallComputerWord = "comp".fontsize(3).sub();
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallComputerWord} .You Win!!!`;
	document.getElementById(userChoice).classList.add('green-glow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')},350);
	if(userScore == 5)
		window.location.href = "win.html";
}

function lose(userChoice,computerChoice){
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallComputerWord = "comp".fontsize(3).sub();
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to  ${convertToWord(computerChoice)}${smallComputerWord} .You Lose. `;
	document.getElementById(userChoice).classList.add('red-glow');	
	setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')},350);	
	if(computerScore == 5)
		window.location.href = "lose.html";
}

function draw(userChoice,computerChoice){
	const smallUserWord = "user".fontsize(3).sub();
	const smallComputerWord = "comp".fontsize(3).sub();
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallComputerWord} .It's a draw.`;
	document.getElementById(userChoice).classList.add('gray-glow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('gray-glow')},350);
}

function game(userChoice){
	const computerChoice = getComputerChoice();
	switch(userChoice + computerChoice){
		case "ai":
		case "aj":
		case "ak":
		case "al":
		case "am":
		case "an":
		case "ao":
		case "ba":
		case "bj":
		case "bk":
		case "bl":
		case "bm":
		case "bn":
		case "bo":
		case "ca":
		case "cb":
		case "ck":
		case "cl":
		case "cm":
		case "cn":
		case "co":
		case "da":
		case "db":
		case "dc":
		case "dl":
		case "dm":
		case "dn":
		case "do":
		case "ea":
		case "eb":
		case "ec":
		case "ed":
		case "em":
		case "en":
		case "eo":
		case "fa":
		case "fb":
		case "fc":
		case "fd":
		case "fe":
		case "fn":
		case "fo":
		case "ga":
		case "gb":
		case "gc":
		case "gd":
		case "ge":
		case "gf":
		case "go":
		case "ha":
		case "hb":
		case "hc":
		case "hd":
		case "he":
		case "hf":
		case "hg":
		case "ih":
		case "ib":
		case "ic":
		case "id":
		case "ie":
		case "if":
		case "ig":
		case "jh":
		case "ji":
		case "jc":
		case "jd":
		case "je":
		case "jf":
		case "jg":
		case "kh":
		case "ki":
		case "kj":
		case "kd":
		case "ke":
		case "kf":
		case "kg":
		case "lh":
		case "li":
		case "lj":
		case "lk":
		case "le":
		case "lf":
		case "lg":
		case "mh":
		case "mi":
		case "mj":
		case "mk":
		case "ml":
		case "mf":
		case "mg":
		case "nh":
		case "ni":
		case "nj":
		case "nk":
		case "nl":
		case "nm":
		case "ng":
		case "oh":
		case "oi":
		case "oj":
		case "ok":
		case "ol":
		case "om":
		case "on":
			win(userChoice, computerChoice);
			break;
		case "ia":
		case "ja":
		case "ka":
		case "la":
		case "ma":
		case "na":
		case "oa":
		case "ab":
		case "jb":
		case "kb":
		case "lb":
		case "mb":
		case "nb":
		case "ob":
		case "ac":
		case "bc":
		case "kc":
		case "lc":
		case "mc":
		case "nc":
		case "oc":
		case "ad":
		case "bd":
		case "cd":
		case "ld":
		case "md":
		case "nd":
		case "od":
		case "ae":
		case "be":
		case "ce":
		case "de":
		case "me":
		case "ne":
		case "oe":
		case "af":
		case "bf":
		case "cf":
		case "df":
		case "ef":
		case "nf":
		case "of":
		case "ag":
		case "bg":
		case "cg":
		case "dg":
		case "eg":
		case "fg":
		case "og":
		case "ah":
		case "bh":
		case "ch":
		case "dh":
		case "eh":
		case "fh":
		case "gh":
		case "hi":
		case "bi":
		case "ci":
		case "di":
		case "ei":
		case "fi":
		case "gi":
		case "cj":
		case "dj":
		case "ej":
		case "fj":
		case "gj":
		case "hj":
		case "ij":
		case "dk":
		case "ek":
		case "fk":
		case "gk":
		case "hk":
		case "ik":
		case "jk":
		case "el":
		case "fl":
		case "gl":
		case "hl":
		case "il":
		case "jl":
		case "kl":
		case "fm":
		case "gm":
		case "hm":
		case "im":
		case "jm":
		case "km":
		case "lm":
		case "gn":
		case "hn":
		case "in":
		case "jn":
		case "kn":
		case "ln":
		case "mn":
		case "ho":
		case "io":
		case "jo":
		case "ko":
		case "lo":
		case "mo":
		case "no":
			lose(userChoice, computerChoice);
			break;
		case "aa":
		case "bb":
		case "cc":
		case "dd":
		case "ee":
		case "ff":
		case "gg":
		case "hh":
		case "ii":
		case "jj":
		case "kk":
		case "ll":
		case "mm":
		case "nn":
		case "oo":
			draw(userChoice, computerChoice);
			break;
	}
}

function main()
{
	rock_div.addEventListener('click', function(){
		game("a");
	})
	gun_div.addEventListener('click', function(){
		game("b");	
	})
	light_div.addEventListener('click', function(){
		game("c");
	})
	devil_div.addEventListener('click', function(){
		game("d");
	})
	dragon_div.addEventListener('click', function(){
		game("e");	
	})
	water_div.addEventListener('click', function(){
		game("f");
	})
	air_div.addEventListener('click', function(){
		game("g");
	})
	paper_div.addEventListener('click', function(){
		game("h");	
	})
	sponge_div.addEventListener('click', function(){
		game("i");
	})
	wolf_div.addEventListener('click', function(){
		game("j");
	})
	tree_div.addEventListener('click', function(){
		game("k");	
	})
	human_div.addEventListener('click', function(){
		game("l");
	})
	snake_div.addEventListener('click', function(){
		game("m");
	})
	scissor_div.addEventListener('click', function(){
		game("n");	
	})
	fire_div.addEventListener('click', function(){
		game("o");
	})
}

main();



















	


