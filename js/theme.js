function changeTheme() {
    var element = document.body;
    element.classList.toggle("light-mode");

    const sqs = document.getElementsByTagName('li');

    for(let i=0;i<sqs.length; i++){
    	if (document.querySelector('.light-mode') !== null){
    		console.log("iefbei");
	    	sqs[i].style.background = "rgba(215, 162, 250, 0.4)";
	    } else {
	    	sqs[i].style.background = "rgba(255, 255, 255, 0.2)";
	    }	
    }

    {
    // .. it exists
}
}