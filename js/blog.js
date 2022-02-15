var Tetinen = Tetinen || { }
Tetinen.ajax = function(method,uri,data,user,password) {
	var returndata
	if(window.XMLHttpRequest){
		var xhr = new XMLHttpRequest()
	}else{
		var xhr = new ActiveXObject("Microsoft.XMLHTTP")
	}
	xhr.open(method,uri,false)
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			returndata = xhr.response
		}
	}
	xhr.send()
	return returndata
}
Tetinen.parse = function(jsonstring){
	var parsejson = JSON.parse(jsonstring)
	var returnvalue = ""
	for(var i in parsejson){
		if(parsejson[i].title == null || parsejson[i].content == null || parsejson[i].date == null || parsejson[i].title == "" || parsejson[i].content == "" || parsejson[i].date == ""){
			returnvalue = returnvalue + ""
		}else if(parsejson[i].url == null || parsejson[i].url == ""){
			returnvalue = returnvalue+"<h2>"+parsejson[i].title+"</h2><span class='date'>"+parsejson[i].date+"</span><br><br><span>"+parsejson[i].content+"</span>"
		}else{
			returnvalue = returnvalue+"<a href="+parsejson[i].url+" style='color:black;'><h2>"+parsejson[i].title+"</h2></a><span class='date'>"+parsejson[i].date+"</span><br><br><span>"+parsejson[i].content+"</span>"
		}
	}
	return returnvalue
}