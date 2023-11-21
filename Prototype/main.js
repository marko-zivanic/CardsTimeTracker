JSONdata = `
[
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]`;
let amount = 0;
dataChange();

$('.daily-btn').on('click',function(){
	amount= 0;
	dataChange();
});
$('.weekly-btn').on('click',function(){
	amount= 1;
	dataChange();
});
$('.monthly-btn').on('click',function(){
	amount= 2
	dataChange();
});
function dataChange(){
	let data = JSON.parse(JSONdata);
	for(i=0;i<data.length;i++){
		$(`.item${i + 1} .card h2`).html(data[i].title);
		if (amount == 0){
			$(`.item${i + 1} .card h1`).html(data[i].timeframes.daily.current +'hrs');
			$(`.item${i + 1} .card p`).html('Yesterday - ' + data[i].timeframes.daily.previous + 'hrs');
			$('.daily-btn').addClass('selected');
			$('.weekly-btn').removeClass('selected');
			$('.monthly-btn').removeClass('selected');
		}
		else if(amount == 1){
			$(`.item${i + 1} .card h1`).html(data[i].timeframes.weekly.current +'hrs');
			$(`.item${i + 1} .card p`).html('Last Week - ' + data[i].timeframes.weekly.previous + 'hrs');
			$('.daily-btn').removeClass('selected');
			$('.weekly-btn').addClass('selected');
			$('.monthly-btn').removeClass('selected');
		}
		else if(amount == 2){
			$(`.item${i + 1} .card h1`).html(data[i].timeframes.monthly.current +'hrs');
			$(`.item${i + 1} .card p`).html('Last Month - ' + data[i].timeframes.monthly.previous + 'hrs');
			$('.daily-btn').removeClass('selected');
			$('.weekly-btn').removeClass('selected');
			$('.monthly-btn').addClass('selected');
		}
	}
	console.log(data);
}
