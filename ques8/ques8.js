var obj = { 
    "4": {"name": "abc"},
    "10": {"name": "ab2"},
    "5": {"name": "abc3"},
    "6": {"name": "abc5"}
};

var arr = [];
for(var i in obj) {
    var o = {};
    if(obj.hasOwnProperty(i)) {
       o.id = i;
       o.name = obj[i].name;
       arr.push(o); 
    }        
} 
arr.sort(function (a,b) {
   a.id - b.id;
});
console.log(arr);