const roads = [
  'ул. Тверская',
  'ул. Ломоносова',
  'проспект Сахарова',
  'ул. Туристская',
  'Троицкий мост',
  'пер. Татарский',
  'ул. Тележная',
  'пл. Театральная',
  'пр-т Товарищеский',
  'ул. Таллинская'
];

function indexOf(string, word) {  
    var m = 0, i = 0,   
        pos, candidate, t,  
        sLength = string.length,  
        wLength = word.length;  
      
    string = string.split('');  
    word = word.split('');      
              
    t = [-1, 0];  
    for (pos = 2, candidate = 0; pos < wLength; ) {  
        if ( word[pos-1] === word[candidate] ) {  
            t[pos] = candidate + 1;  
            pos++; 
            candidate++;  
        }  
        else if ( candidate > 0 )  
          candidate = t[candidate];  
        else   
          t[pos++] = 0;  
    }   
      
    while (m + i < sLength) {  
        if (string[m+i].toLowerCase() === word[i].toLowerCase() ) {  
            i++;  
            if ( i === wLength )   
              return true;  
        }  
        else {  
            m += i - t[i];  
            if ( t[i] > -1 )   
                i = t[i];  
            else  
                i = 0;  
        }  
    }  
    return false;  
}  

function suggest(input) {
	let result = [];

	for(let i = 0; i < roads.length; i++) {
		if(indexOf(roads[i], input)) result.push(roads[i]); 
		if(result.length >= 10) return result;
	}

	return result;
}

console.log(suggest('т'))