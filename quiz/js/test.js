// database stuff

var database = 
[
	[
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, consequatur?",
		"Lorem",
		"ipsum",
		"dolor",
		"sit"
	],
	[
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, voluptas?",
		"Lorem",
		"ipsum",
		"dolor",
		"sit"
	],
	[
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, eos?",
		"Lorem",
		"ipsum",
		"dolor",
		"sit"
	],
	[
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, deleniti?",
		"Lorem",
		"ipsum",
		"dolor",
		"sit"
	],
	[
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, similique?",
		"Lorem",
		"ipsum",
		"dolor",
		"sit"
	],
	[
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, illum?",
		"Lorem",
		"ipsum",
		"dolor",
		"sit"
	],
	[
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, ea?",
		"Lorem",
		"ipsum",
		"dolor",
		"sit"
	],
	[
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, veritatis?",
		"Lorem",
		"ipsum",
		"dolor",
		"sit"
	],
	[
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, obcaecati?",
		"Lorem",
		"ipsum",
		"dolor",
		"sit"
	],
	[
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, ducimus?",
		"Lorem",
		"ipsum",
		"dolor",
		"sit"
	]
];



// added 'answer' to match id
//                            1   2   3   4   5   6   7   8   9   10
var resultQuery = [ 'answer','b','b','c','a','d','b','c','d','b','b' ];
var inputQuery = new Array(10);




// let the games begin


// show GUI interface
function intialize(){


	for (var i=1; i<=database.length; i++) {

		$('#test').append('<h3>' + i + ". " + database[i-1][0] + '</h3>' + '<form><div><input type="radio" name="option" value="a" id="' + i + '1"><label for="' + i + '1">' + database[i-1][1] + '</label></div><div><input type="radio" name="option" value="b" id="' + i + '2"><label for="' + i + '2">' + database[i-1][2] + '</label></div><div><input type="radio" name="option" value="c" id="' + i + '3"><label for="' + i + '3">' + database[i-1][3] + '</label></div><div><input type="radio" name="option" value="d" id="' + i + '4"><label for="' + i + '4">' + database[i-1][4] + '</label></div></form>');
	};


	$('#testContainer button#start').hide();
	$('#testContainer button#done').css('display','block');

	getIdentifier();

};



// get answer identifier and add answer to database
function getIdentifier() {

	$('#testContainer form input').on('click', function () {

		var identify = this.id;
		var question, answer;

		question = parseInt(identify/10);
		answer = parseInt(identify%10);

		// add answer to inputQuery database
		setAnswer(question,answer);

	});

};



function setAnswer(question,answer) {

	switch (answer) {
		case 1:
			answerArray = 'a';
			break;
		case 2:
			answerArray = 'b';
			break;
		case 3:
			answerArray = 'c';
			break;
		case 4:
			answerArray = 'd';
			break;
	}

	inputQuery[question] = answerArray;

};


// validate if all answered
function validate() {

	if ( $('#testContainer input:checked').length === database.length ) {
		done();
	}
	else {
		alert('You must answer to all questions!');
	};

};


// show progress
function done() {

	$('#test').hide();
	$('#done').hide();

	// show results
	for (var i=1; i<=database.length; i++) {

		$('#show').append('<h3>' + i + ". " + database[i-1][0] + '</h3>' + '<ul><li dbindex="' + i + 'a">' + database[i-1][1] + '</li><li dbindex="' + i + 'b">' + database[i-1][2] + '</li><li dbindex="' + i + 'c">' + database[i-1][3] + '</li><li dbindex="' + i + 'd">' + database[i-1][4] + '</li></ul>');
	};

	var iCorect = 0,
			iWrong  = 0;

	// add classes
	for (var i=1; i<resultQuery.length; i++) {


		if ( inputQuery[i] === resultQuery[i] ) {
			
			$('li[dbindex=' + i + inputQuery[i] + ']').addClass('corect');
			iCorect++;

		}
		else {

			$('li[dbindex=' + i + inputQuery[i] + ']').addClass('wrong');
			iWrong++;

		}

	};

	// show results (number)
	$('#show').after('<p>wrong answers: <span class="wrong">'+iWrong+'</span></p>');
	$('#show').after('<p>corect answers: <span class="corect">'+iCorect+'</span></p>');

};