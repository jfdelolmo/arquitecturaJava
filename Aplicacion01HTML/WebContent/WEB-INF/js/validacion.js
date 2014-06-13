function validacion() {
	var isbn= document.getElementById("isbn");
	var miformulario=document.getElementById("miformulario");
	if(isbn.value==""){
		alert("No se ha indicado ISBN");
	}else{
		miformulario.submit();
	}
}