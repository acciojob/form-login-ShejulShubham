function getFormvalue() {
    //Write your code here
	const fname = document.querySelector("input[name='fname']");
	const lname = document.querySelector("input[name='lname']");

	alert(`${fname.value} ${lname.value}`);
}
