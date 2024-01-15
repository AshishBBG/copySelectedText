let btn = document.querySelector("#add_exam_score")
let adm = document.querySelector("#id_no_fresh_admission-styled");

if(adm){
    adm.value = "Open"
}


if(btn) {
let ex_0 = document.querySelector("#id_exam_score-0-exams_new")

let es_0 = document.querySelector("#id_exam_score-0-exam_score_accepted")


 ex_0.focus();


ex_0.addEventListener("change", function(){

//ielts
    es_0.value = 6

})

}

if(btn){
btn.addEventListener("click", function(){
   setTimeout(function(){

   let ex_1 = document.querySelector("#id_exam_score-1-exams_new")

    let es_1 = document.querySelector("#id_exam_score-1-exam_score_accepted")
    console.log(ex_1)
   console.log(es_1)
     if(ex_1 && es_1){
	//toefl
         ex_1.focus();

 

         ex_1.addEventListener("change", function(){

        es_1.value = 70

     })
  }
},)
})
}



if(btn){
btn.addEventListener("click", function(){
setTimeout(function(){

let ex_2 = document.querySelector("#id_exam_score-2-exams_new")

let es_2 = document.querySelector("#id_exam_score-2-exam_score_accepted")



 if(ex_2 && es_2){
//act

 ex_2.focus();


ex_2.addEventListener("change", function(){

    es_2.value = 18

})
}

},)
})
}

if(btn){
btn.addEventListener("click", function(){
setTimeout(function(){

let ex_3 = document.querySelector("#id_exam_score-3-exams_new")

let es_3 = document.querySelector("#id_exam_score-3-exam_score_accepted")



 if(ex_3 && es_3){
//pte

 ex_3.focus();


ex_3.addEventListener("change", function(){

    es_3.value = 50

})
}
},)
})
}


if(btn){
btn.addEventListener("click", function(){
setTimeout(function(){

let ex_4 = document.querySelector("#id_exam_score-4-exams_new")

let es_4 = document.querySelector("#id_exam_score-4-exam_score_accepted")



 if(ex_4 && es_4){
//sat

 ex_4.focus();


ex_4.addEventListener("change", function(){

    es_4.value = 510

})
}
},)
})
}


if(btn){
btn.addEventListener("click", function(){
setTimeout(function(){

let ex_5 = document.querySelector("#id_exam_score-5-exams_new")

let es_5 = document.querySelector("#id_exam_score-5-exam_score_accepted")



 if(ex_5 && es_5){
//duo

 ex_5.focus();


ex_5.addEventListener("change", function(){

    es_5.value = 105

})
}
},)
})
}






let keyMap = {

    49: "International English Language Testing System",
  
    50: "Test of English as Foreign Language",
  
    51: "American College Testing",

    52: "Pearson Test of English Academic",

    53: "Scholastic Assessment Test",
    54: "Duolingo English Test",
}

window.onkeydown = examName;


function examName(e){


    if(e.shiftKey === true){
	return;
}
    //console.log(e)
  
    let uni = keyMap[e.keyCode]
    
    //console.log(uni)
   
    if(uni!==undefined){
 
         e.preventDefault();
   
        document.execCommand("insertText",false,uni)
   
 }

}


let ctrlkey = false;
window.addEventListener("keydown", function(e){
        if(e.key === "Control"){
	ctrlkey = true;
       }
})


window.addEventListener("keyup", function(e){
        if(e.key === "Control"){
	ctrlkey = false;
       }
})


window.onmouseup = testing;
function testing() {

    if(!ctrlkey){
	return;
        }


    let val = window.getSelection().toString();
    // converting selected text into all lower below code
    if (val != '') {
        val = val.toLowerCase();
        // console.log(val);
        let n = val.length;
        // navigator.clipboard.writeText(val)
        let copyAns = "";
        copyAns = val[0].toUpperCase();
        // console.log(copyAns);

        for (let i = 1; i < n; i++) {
            // val = val.toUpperCase();
            if (val[i - 1] == " ") {
                copyAns += val[i].toUpperCase();
            }
            else {
                copyAns += val[i];
            }
        }
        navigator.clipboard.writeText(copyAns)

        // t.select();
        
        let replaceArr = [" With ", " For ", " Focus "];
        replaceArr.map((item) => {
            copyAns = copyAns.replaceAll(item, "")
        })
        copyAns = copyAns.replaceAll("&","and")
        copyAns = copyAns.replaceAll(" And "," and")
        console.log(copyAns);
                // Create a message element
                const messageElement = document.createElement('div');
                messageElement.innerHTML = 'Text modified and copied to clipboard!';
                messageElement.style.position = 'absolute';
                messageElement.style.backgroundColor = '#4CAF50';
                messageElement.style.color = '#fff';
                messageElement.style.padding = '10px';
                messageElement.style.borderRadius = '5px';
        
                // Get the selection range
                const selection = window.getSelection();
                const range = selection.getRangeAt(0);
                const rect = range.getBoundingClientRect();
                // alert(rect.top)
                // Position the message element above the selection
                // messageElement.style.top = rect.top - messageElement.offsetHeight - 15 + 'px';
                messageElement.style.top = rect.top + 24 + "px";
                messageElement.style.left = rect.left + "px";
        
                // Append the message element to the body
                document.body.appendChild(messageElement);
        
                // Remove the message element after a certain time (e.g., 3 seconds)
                setTimeout(function () {
                    document.body.removeChild(messageElement);
                }, 1000);
    }



    console.log("copied")
}
