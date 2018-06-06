
$(document).ready(function () {



	var data = [
		{
			"id": 1,
			"name": "store",
			"link": "#",
			"parent": 0
		}, 
		{
			"id": 99,
			"name": "dummy",
			"link": "#",
			"parent": 0
		},
		{
			"id": 2,
			"name": "cloth",
			"link": "#",
			"parent": 1
		},{
			"id": 7,
			"name": "jj",
			"link": "#",
			"parent": 4
		},
		 {
			"id": 3,
			"name": "music",
			"link": "#",
			"parent": 1
		}, {
			"id": 4
			, "name": "jacket"
			, "link": "#"
			, "parent": 2
		}, {
			"id": 5,
			"name": "jean",
			"link": "#",
			"parent": 2
		}
		, {
			"id": 6,
			"name": "j",
			"link": "#",
			"parent": 5
		},
		{
			"id": 9,
			"name": "a",
			"link": "#",
			"parent": 8
		},
		{
			"id": 8,
			"name": "jja",
			"link": "#",
			"parent": 5
		}
	];
	data.sort((a, b) => (a.id) - (b.id));
		//1
		for (var i = 0; i <= data.length - 1; i++) {
			//2
			if ( data[i].parent == 0) {
				var count =0
				//3
				for (var j = 0; j <= data.length - 1; j++) {
						//4
						if(data[j].parent == data[i].id){
							count++;
								
						}

				}
					//5
					if(count != 0){
						$("#layer1").append(
								'<li class="icon icon-arrow-left" id="main'+data[i].id+'">'+
								'<a class="icon icon-display" href="#">' + data[i].name + '</a>' +
								'<div class="mp-level">' +
									'<h2 class="icon icon-display">'+data[i].name+'</h2>'+
										'<a class="mp-back" href="#">' + "Back" + '</a>' + 
										'<ul id = "head'+data[i].id+'"></ul>'+
										'</div>'+
								'</li>'
							);

					}
					//6
					else{
								
							$("#layer1").append(
								'<li class="icon icon-arrow-left" id="head'+data[i].id+'" >'+
								'<a class="icon icon-display" href="#">' + data[i].name + '</a>'
							);	

					}
			}
			//7
			else {
				console.log("h")
				var newArray = data.filter(function (el) {
					return data[i].id == el.parent ;
					
				});
				console.log(newArray);
				console.log("====="+data[i].parent);
				console.log("====="+data[i].id);
				//8
				if(newArray.length == 0){
					$("#head"+data[i].parent).append(
					
						'<li class="icon icon-arrow-left"  id = "main'+data[i].id+'" >'+
						'<a class="icon icon-display" href="#">' + data[i].name + '</a>' +
						'</li>'
					);
					}
					//9
					else{
						$("#head"+data[i].parent).append(
							
							'<li class="icon icon-arrow-left"  id = "main'+data[i].id+'" >'+
							'<a class="icon icon-display" href="#">' + data[i].name + '</a>' +
							'<div class="mp-level">' +
								'<h2 class="icon icon-display">'+data[i].name+'</h2>'+
									'<a class="mp-back" href="#">' + "Back" + '</a>' + 
									'<ul id = "head'+data[i].id+'"></ul>'+
							'</div>'+
							'</li>'
						);
				}
			
			}
		}	
	new mlPushMenu($("#mp-menu")[0], $("#trigger")[0]);

});
