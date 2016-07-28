function getRandom() {



 var responses = ["Yes", "No", "Maybe", "Unclear try again later", "Wrong question"];
    var number=  Math.floor(Math.random() * 5) + 1;
   // var rand = responses[Math.floor(Math.random() * responses.length)]
       

        if (number == 1) {
            alert(responses[0]);
        }
        if (number == 2) {
            alert(responses[1]);
        }
        if (number == 3) {
            alert(responses[2]);
        }
        if (number == 4) {
            alert(responses[3]);
        }
        else
            alert(responses[4]);
    }
