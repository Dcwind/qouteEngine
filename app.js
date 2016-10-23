$("#random").click(function() {
  random = "#" + Math.floor(Math.random()*16777215).toString(16);
  $("body").css("background-color", random);
 
var forismatic = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"; //Link of the API
	
$.getJSON(forismatic, function(data) {
	$("p").html("\"" + data.quoteText+ "\"" + ' <a id="link" href="" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>');
	$("#link").attr("href", "https://twitter.com/intent/tweet?url=[your%20URL]&text=" + '"' + data.quoteText + '"' + " – " + data.quoteAuthor);
	if(data.quoteAuthor){
	$("#author").html(data.quoteAuthor);
	}
 	else {
	$("#author").html("Anonymous");
	 }
});
	
});