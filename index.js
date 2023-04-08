let textbox = document.getElementById("textbox");
        textbox.addEventListener('input',function(){
            let text = this.value;
            // console.log(text);
            let char = text.length;
            document.getElementById("char").innerHTML = char;
            //now for word : for that we use space 

            text = text.trim(); // trim removes extra spaces at start and end
            
            let words = text.split(" ");
            //but now to remove extra space in between start and end
            let cleanlist = words.filter(function(elm){
                return elm != "";
            });
            // console.log(words);
            document.getElementById("word").innerHTML=cleanlist.length;

        });