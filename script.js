window.onmouseup = testing;
function testing() {
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
        copyAns = copyAns.replaceAll(" And","")
        let replaceArr = [" With", " For", " Focus", "With", "For", "focus"];
        replaceArr.map((item) => {
            copyAns = copyAns.replaceAll(item, "")
        })
        copyAns = copyAns.replaceAll("&","and")

        console.log(copyAns);
                // Create a message element
                const messageElement = document.createElement('div');
                messageElement.innerHTML = 'Text modified and copied to clipboard!';
                messageElement.style.position = 'absolute';
                // messageElement.style.backgroundColor = '#4CAF50';
                messageElement.style.backgroundColor = '#202124';
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
                let sec = 1000
                setTimeout(function () {
                    document.body.removeChild(messageElement);
                }, sec * 1.1);
    }



    // alert("copied")
}
