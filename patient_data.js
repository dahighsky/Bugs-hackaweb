
var d={h1:{name:{},age:{},gender:{},blood:{},diag:{},spec:{},fac:{}}}

function datas(name,age,gender,blood,diag,spec,fac)
{

	for(var i = 0; i < Object.keys(d).length; i++)
	{   
	    var n=(Object.keys(d["h1"]["name"]).length+1)
	    var s="p"+n
	    d["h1"]["name"][s]=name
	}

	for(var i = 0; i < Object.keys(d).length; i++)
	{   
	    var s="p"+Object.keys(d["h1"]["name"]).length
	    d["h1"]["age"][s]=age
	}

	for(var i = 0; i < Object.keys(d).length; i++)
	{   
	    var s="p"+Object.keys(d["h1"]["name"]).length
	    d["h1"]["gender"][s]=gender
	}

	for(var i = 0; i < Object.keys(d).length; i++)
	{   
	    var s="p"+Object.keys(d["h1"]["name"]).length
	    d["h1"]["blood"][s]=blood
	}

	for(var i = 0; i < Object.keys(d).length; i++)
	{   
	    var s="p"+Object.keys(d["h1"]["name"]).length
	    d["h1"]["diag"][s]=diag
	}

	for(var i = 0; i < Object.keys(d).length; i++)
	{   
	    var s="p"+Object.keys(d["h1"]["name"]).length
	    d["h1"]["spec"][s]=spec
	}

	for(var i = 0; i < Object.keys(d).length; i++)
	{   
	    var s="p"+Object.keys(d["h1"]["name"]).length
	    d["h1"]["fac"][s]=fac
	}

	return d
}
