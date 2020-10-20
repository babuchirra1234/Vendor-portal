function isValidEmail(email) {
	var filter = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	//console.log("2::" + email);
	if (filter.test(email)) {
		return true;
	} else {
		return false;
	}
}

function myfunction(){
    alert("my method")
}
function isValidPhone(txtPhone) {
	var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
	if (filter.test(txtPhone)) {
		return true;
	} else {
		return false;
	}
}

function isValidAlphabet(name) {
	var filter = new RegExp(/^[a-zA-Z\s]+$/);
	if (filter.test(name)) {
		return true;
	} else {
		return false;
	}
}
function isValidAddress(address) {
	var filter = /^[0-9a-zA-Z]+$/;
	if (filter.test(address)) {
		return true;
	} else {
		return false;
	}
}
function isValidCharNum(CharNum) {
	var filter = /^[0-9a-zA-Z]+$/;
	if (filter.test(CharNum)) {
		return true;
	} else {
		return false;
	}
}

