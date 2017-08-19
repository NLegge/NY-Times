//
var queryUrl = 
"http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + 
lookupValue + 
"&page=0&begin_date=" +  
startDate + 
"&end_date=" + 
endDate + 
"&limit=" + 
limit + 
"&api-key=f15664fb38f440f682152372ea0878a3"
var lookupValue;
//YYYYMMDD
var startDate;
//YYYYMMDD
var endDate;
var limit;

$('').on('click', function (re) {
  lookupValue = $()

});

lookupValue = 'dragon boat';
startDate = '20170101';
endDate = '20170818';
limit = 0;
$.ajax({
     url: queryURL,
     method: "GET"
   }).done(function (response) 	
   console.log(response);
   })

