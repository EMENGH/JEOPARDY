// this file contains the main logic for the Jeopardy game web page
// creation date: July 12th, 2017
// author: Edgar Mendez

$(function() {
console.log('linked');
//
// main line
//created new variable to store game score
var score = 0;

// data array composed of a series of objects
var QuestDataArray = [
	{
	   	btnId: 11,
	    quest1:"what is Bogota",
	    quest2:"what is Mexico city", 
	    quest3:"what is La Paz - Bolivia",
	    quest4:"what is Kathmandu",
	    jpdyText:"The highest capital city in the world (altitude)",
	    correctAnswer:"3",
	    isAnswered:"false",
	    isAnsweredCorrectly:"false",
	    scoreValue:200
	},
	{
	   	btnId:12,
	   	quest1:"what is Russia",
	    quest2:"what is India",
	    quest3:"what is United States",
	    quest4:"what is China",
	    jpdyText:"The largest country in the world",
	    correctAnswer:"1",
	    isAnswered:"false",
	    isAnsweredCorrectly:"false",
	    scoreValue:300
	},
	{
	   	btnId: 13,
	    quest1:"what is Artic ocean",
	    quest2:"what is Indian ocean", 
	    quest3:"what is Pacific ocean",
	    quest4:"what is Atlantic ocean",
	    jpdyText:"The larges body of water in the planet",
	    correctAnswer:"3",
	    isAnswered:"false",
	    isAnsweredCorrectly:"false",
	    scoreValue:400
	},
	{
	   	btnId:14,
	   	quest1:"what is Stockholm",
	    quest2:"what is Amsterdam",
	    quest3:"what is Oslo",
	    quest4:"what is Helsinki",
	    jpdyText:"The capital of Finland",
		correctAnswer:"4",
	    isAnswered:"false",
	    isAnsweredCorrectly:"false",
	    scoreValue:600
	},
	{
	   	btnId:15,
	   	quest1:"what is 9",
	    quest2:"what is 12",
	    quest3:"what is 7",
	    quest4:"what is 5",
	    jpdyText:"states covered by the appalachian mountains",
	    correctAnswer:"1",
	    isAnswered:"false",
	    isAnsweredCorrectly:"false",
	    scoreValue:800
	},
	{
	   	btnId:21,
	   	quest1:"what is patriots",
	    quest2:"what is Steelers",
	    quest3:"what is 49ers",
	    quest4:"what is Cowboys",
	    jpdyText:"the winners of SuperBowl 2017",
		correctAnswer:"1",
	    isAnswered:"false",
	    isAnsweredCorrectly:"false",
	    scoreValue:200
	},
    {
	   	btnId:22,
	   	quest1:"1-22: what is Moscow",
	    quest2:"2-22: what is Beijing",
	    quest3:"3-22: what is Tokyo",
	    quest4:"4-22: what is Paris",
	    jpdyText:"The city hosting the 2020 summer olympics",
		correctAnswer:"3",
	    isAnswered:"false",
	    isAnsweredCorrectly:"false",
	    scoreValue:300
	},
    {
	   	btnId:23,
	   	quest1:"what is Argentina",
	    quest2:"what is Italy",
	    quest3:"what is Germany",
	    quest4:"what is Brazil",
	    jpdyText:"the country with most FIFA World Cup championships",
		correctAnswer:"4",
	    isAnswered:"false",
	    isAnsweredCorrectly:"false",
	    scoreValue:400
	},
    {
	   	btnId:24,
	   	quest1:"what is 10.08 seconds",
	    quest2:"what is 9.58 seconds",
	    quest3:"what is 8.96 seconds",
	    quest4:"what is 9.01 seconds",
	    jpdyText:"The actual men's world record for 100 mts",
		correctAnswer:"2",
	    isAnswered:"false",
	    isAnsweredCorrectly:"false",
	    scoreValue:600
	},
	{
	   	btnId:25,
	   	quest1:"what is Fencing",
	    quest2:"what is In-line skating",
	    quest3:"what is Rugby Sevens",
	    quest4:"what is Mountain biking",
	    jpdyText:"This is not approved as a summer olympic discipline",
		correctAnswer:"2",
	    isAnswered:"false",
	    isAnsweredCorrectly:"false",
	    scoreValue:800
	},
    {
	    btnId:31,
	    quest1:"what is Mercury",
	    quest2:"what is Saturn",
	    quest3:"what is Mars",
	    quest4:"what is Pluto",
	    jpdyText:"The smallest planet in our solar system",
	    correctAnswer:"1",
	    isAnswered:"false",
	    isAnsweredCorrectly:"false",
	    scoreValue:200
	},
    {
	    btnId:32,
	    quest1:"what is Jupiter",
	    quest2:"what is Mercury",
	    quest3:"what is Uranus",
	    quest4:"what is Saturn",
	    jpdyText:"The sixth planet from the sun",
	    correctAnswer:"4",
	    isAnswered:"false",
	    isAnsweredCorrectly:"false",
	    scoreValue:300
	},
    {
	    btnId:33,
	    quest1:"what is Apollo 13",
	    quest2:"what is Apollo 19",
	    quest3:"what is Apollo 17",
	    quest4:"what is Apollo 11",
	    jpdyText:"The last NASA Apollo mission",
	    correctAnswer:"3",
	    isAnswered:"false",
	    isAnsweredCorrectly:"false",
	    scoreValue:400
	},
    {
	    btnId:34,
	    quest1:"what is 16",
	    quest2:"what is 27",
	    quest3:"what is 49",
	    quest4:"what is 67",
	    jpdyText:"The official number of Jupiter's moons",
	    correctAnswer:"4",
	    isAnswered:"false",
	    isAnsweredCorrectly:"false",
	    scoreValue:600
	},
    {
	    btnId:35,
	    quest1:"what is Lacerta",
	    quest2:"what is Andromeda",
	    quest3:"what is Perseus",
	    quest4:"what is Triangulum",
	    jpdyText:"The 19th largest constellation in the sky",
	    correctAnswer:"2",
	    isAnswered:"false",
	    isAnsweredCorrectly:"false",
	    scoreValue:800
	},
    {
	    btnId:41,
	    quest1:"what is the Skin",
	    quest2:"what is the Liver",
	    quest3:"what are Kidneys",
	    quest4:"what is the Brain",
	    jpdyText:"The biggest organ in the human body",
	    correctAnswer:"1",
	    isAnswered:"false",
	    isAnsweredCorrectly:"false",
	    scoreValue:200
	},
    {
	    btnId:42,
	    quest1:"what is 243",
	    quest2:"what is 270",
	    quest3:"what is 212",
	    quest4:"what is 206",
	    jpdyText:"The number of bones in an adult human body",
	    correctAnswer:"4",
	    isAnswered:"false",
	    isAnsweredCorrectly:"false",
	    scoreValue:300
	},
    {
	    btnId:43,
	    quest1:"what is 113",
	    quest2:"what is 118",
	    quest3:"what is 115",
	    quest4:"what is 117",
	    jpdyText:"The number of elements in the periodic table",
	    correctAnswer:"2",
	    isAnswered:"false",
	    isAnsweredCorrectly:"false",
	    scoreValue:400
	},
    {
	    btnId:44,
	    quest1:"what is Oxygen",
	    quest2:"what is Hydrogen",
	    quest3:"what is Nitrogen",
	    quest4:"what is Argon",
	    jpdyText:"The most abundant element in our atmosphere",
	    correctAnswer:"3",
	    isAnswered:"false",
	    isAnsweredCorrectly:"false",
	    scoreValue:600
	},
    {
	    btnId:45,
	    quest1:" what is AB- ",
	    quest2:" what is Rh-",
	    quest3:" what is O-",
	    quest4:" what is AB+",
	    jpdyText:"The rarest blood type in the world ",
	    correctAnswer:"2",
	    isAnswered:"false",
	    isAnsweredCorrectly:"false",
	    scoreValue:800
	},
    {
	    btnId:51,
	    quest1:"what is 360",
	    quest2:"what is 180",
	    quest3:"what is 90",
	    quest4:"what is 45",
	    jpdyText:"The sum of the internal angles of a triangle",
	    correctAnswer:"2",
	    isAnswered:"false",
	    isAnsweredCorrectly:"false",
	    scoreValue:200
	},
    {
	    btnId:52,
	    quest1:"what is 180",
	    quest2:"what is 360",
	    quest3:"what is 540",
	    quest4:"what is 720",
	    jpdyText:"The sum of external angles of a triangle",
	    correctAnswer:"2",
	    isAnswered:"false",
	    isAnsweredCorrectly:"false",
	    scoreValue:300
	},
    {
	    btnId:53,
	    quest1:" what is i",
	    quest2:" what is i cubed",
	    quest3:" what is i quadrupled",
	    quest4:" what is i squared",
	    jpdyText:"The equivalence to -1",
	    correctAnswer:"4",
	    isAnswered:"false",
	    isAnsweredCorrectly:"false",
	    scoreValue:400
	},
    {
	    btnId:54,
	    quest1:" what is a parabola",
	    quest2:" what is a circle",
	    quest3:" what is an ellipse",
	    quest4:" what is a hyperbola",
	    jpdyText:"A curve where any point is at an equal distance from a center fixed point",
	    correctAnswer:"1",
	    isAnswered:"false",
	    isAnsweredCorrectly:"false",
	    scoreValue:600
	},
    {
	    btnId:55,
	    quest1:" what is median",
	    quest2:" what is mode",
	    quest3:" what is range",
	    quest4:" what is mean",
	    jpdyText:"The item that appears most often in the data set",
	    correctAnswer:"2",
	    isAnswered:"false",
	    isAnsweredCorrectly:"false",
	    scoreValue:800
    },
    {
	    btnId:61,
	    quest1:"what is Italy",
	    quest2:"what is Peru",
	    quest3:"what are Ireland",
	    quest4:"what is Mexico",
	    jpdyText:"where potatos and tomatos are originary from",
	    correctAnswer:"2",
	    isAnswered:"false",
	    isAnsweredCorrectly:"false",
	    scoreValue:200
	},
    {
	    btnId:62,
	    quest1:"what is basil",
	    quest2:"what is artichoke",
	    quest3:"what is lemon grass",
	    quest4:"what is avocado",
	    jpdyText:"Fundamental ingredient to make Pesto sauce",
	    correctAnswer:"1",
	    isAnswered:"false",
	    isAnsweredCorrectly:"false",
	    scoreValue:300
	},
    {
	    btnId:63,
	    quest1:"what is Italian cuisine",
	    quest2:"what is Thai cuisine",
	    quest3:"what is Mexican cuisine",
	    quest4:"what is Chinese cuisine",
	    jpdyText:"The most popular Ethnic food in the United States",
	    correctAnswer:"4",
	    isAnswered:"false",
	    isAnsweredCorrectly:"false",
	    scoreValue:400
	},
    {
	    btnId:64,
	    quest1:"what is Potatoes",
	    quest2:"what is Corn",
	    quest3:"what is Rice",
	    quest4:"what is fish",
	    jpdyText:"most widely eaten food in the world",
	    correctAnswer:"3",
	    isAnswered:"false",
	    isAnsweredCorrectly:"false",
	    scoreValue:600
	},
    {
	    btnId:65,
	    quest1:"what is 2",
	    quest2:"what is 70",
	    quest3:"what is 25",
	    quest4:"what is 9",
	    jpdyText:"The number of calories in a gram of fat",
	    correctAnswer:"4",
	    isAnswered:"false",
	    isAnsweredCorrectly:"false",
	    scoreValue:800
	}
    ];	    


	// handle process when a button on the board has been clicked
	function handleClickValue() {

	    for(var i = 0; i < QuestDataArray.length; i++) {

	        //console.log($buttonClickId);

	   	   if ($buttonClickId === QuestDataArray[i].btnId.toString()) {
	   	      // $('#idValue').html(QuestDataArray[i].btnId);
	   	      $('label[for=questValue1]').html(QuestDataArray[i].quest1);
	   	      //alert("this is i right now: " + i);
	   	      $('label[for=questValue2]').html(QuestDataArray[i].quest2);
	   	      $('label[for=questValue3]').html(QuestDataArray[i].quest3);
	   	      $('label[for=questValue4]').html(QuestDataArray[i].quest4);

	   	       
	   	       $('#textValue5').html(QuestDataArray[i].jpdyText);

	   	   }
		};	  

	// if selection matches the right question, User gets the value of the field accumulated.
	// if not, then User gets the value of that field deducted from the accumulator.
	     
	}


	//player clicks on the reset/restart button. all buttons are enabled, page is refreshed and score set to zero.
	$('#start').on('click', function(){
		score = 0;
		$('.valuebtn').prop('disabled', false);
		location.reload(true);
	});

// function to open the modal setting (materialize)
	function whenClicked(){
	    //$('.modal').modal();
	  	$('#modal1').modal('open');
	  	// $('#modal1').modal('close');
	}

    var $buttonClickId;
    var i = 0;
    // function to handle the main processing. calls when 
	$('.valuebtn').on('click', function(){
		console.log('valuebtn' + event.target.id);
		$('#answerStatus').html('');
		$("input[name='Question']").each(function (index, elem){
    		$(elem).prop('checked',false);
		});

		$buttonClickId = event.target.id;
		console.log($buttonClickId);
		whenClicked();
	    handleClickValue();
		
	})


    // function called when user clicks on one of the 4 options to answer a question
	$("input[name='Question']").on('click', function(){
        for(var i = 0; i < QuestDataArray.length; i++) {

		if(QuestDataArray[i].btnId.toString() === $buttonClickId)
		{
			//alert(QuestDataArray[0].correctAnswer);
			if('questValue' + QuestDataArray[i].correctAnswer === this.id)
			{

				$('#answerStatus').html('Correct Answer!');

				$('#'+ $buttonClickId).prop('disabled', true);

                // increase score when the choice is correct
				score += (QuestDataArray[i].scoreValue);
				console.log('Score' + score);

				$('#score').text(score);
				//mark the question as IsAnswered = true
				isAnswered = true;
			}
			else
			{
            	$('#answerStatus').html('Wrong Answer!')
				$('#'+ $buttonClickId).prop('disabled', true);
				
				//decrease the score when the choice is incorrect
				score -= (QuestDataArray[i].scoreValue);
				console.log('Score' + score);
				$('#score').text(score);
							
				//mark the question as IsAnswered = true
				isAnswered = true;

			}
		}
	}	
});

});
