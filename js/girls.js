
function fetch(url){
	$.getJSON(url,function(x,st){
		if(st==='success'){

			if(x.count>0){

				var _ts=x.topics;
				$.each(_ts,function(i,t){

					//well
					if(t.comments_count>10){
						var _ps=t.photos;
						$.each(_ps,function(j,p){
							addIMG(p.alt,p.title);
						});
					}else{
						//not popular
					}
				});

			}
		}
	});
}


function addIMG(alt,title){
	// todo 
	if(!!alt){

	//	var img='<img src="'+alt+'" title="'+title+'" class="img-thumbnail" width="5%" >';
		var img='<img src="'+alt+'" title="'+title+'" >';

		$(img).insertAfter('#_start');
	}


}


var latest;

$('.girls').delegate('img','click',function(){
	if(!!latest){
		sea(latest,'5%');
	}
	sea($(this),'auto');
	latest=$(this);

});

function sea(obj,arg){
	$(obj).css('width',arg);
	$(obj).css('height',arg);
}


var _urls=[
'https://api.douban.com/v2/group/407518/topics?count=1&callback=?',
//'https://api.douban.com/v2/group/kaopulove/topics?callback=?',
//'https://api.douban.com/v2/group/ai_Junko/topics?callback=?',
//'https://api.douban.com/v2/group/haixiuzu/topics?callback=?',
];

function shuffle(o){ 
	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
}

function letsdance(){

	shuffle(_urls).every(function(x){
		fetch(x);
		return true;
	});
}

letsdance();
