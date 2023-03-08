const mapping = {
					"A" : "anarosh", "B" : "borolok","C" : "chocolate", "D" : "dhaka",
					"E" : "egg", "F" : "farhan.", "G" : "sayu", "H" : "hasan",
					"I" : "izuku", "J" : "juice", "K" : "kallu", "L" : "long",
					"M" : "murgi", "N" : "nigga", "O" : "ohio-", "P" : "pond",
					"Q" : "queen", "R" : "razer", "S" : "sanjida", "T" : "taka",
					"U" : "uganda", "V" : "vascor", "W" : "wonder", "X" : "xahid",
					"Y" : "yuri", "Z" : "zeke",
					
					
					"0" : "Y",
					"1" : "F", "2" : "G", "3" : "B",
					"4" : "J", "5" : "N", "6" : "S",
					"7" : "A", "8" : ".F", "9" : "AA"
				}
// Function for toggle functionality
function toggle()
{
		const decrypt = "Decrypt Message";
		const encrypt = "Encrypt Message";
		let curr = document.getElementById("toggle").innerHTML;
		
		if(curr == decrypt)
		{
			document.getElementById("toggle").innerHTML = encrypt;
			document.getElementById("input").value = "";
			document.getElementById("output").value = "";
			document.getElementById("input").placeholder = "Paste your code";
			document.getElementById("convert").innerHTML = "Convert to Plain Text"
			document.getElementById("convert").setAttribute('onclick','morse2text()');
		}
		else{
			document.getElementById("toggle").innerHTML = decrypt;
			document.getElementById("input").value = "";
			document.getElementById("output").value = "";
			document.getElementById("input").placeholder = "Write your message";
			document.getElementById("convert").innerHTML = "Convert to Morse Code"
			document.getElementById("convert").setAttribute('onclick','text2morse()');
		}
}



// Function for encrypting the message 
function text2morse()			
{	
	let input = document.getElementById("input").value;
	
	input = input.toUpperCase();
	
	let arr1 = input.split("");
	
	let arr2 = arr1.map(x => {
		if(mapping[x])
		{
			return mapping[x];
		}
		else{						
			return x;
		}
	});
	
	let code = arr2.join(" ");
	
	document.getElementById("output").value = code;	
}

// Function to search value in an object
function getKey(obj, val) {
  return Object.keys(obj).find(key => obj[key] === val);
}

// Function for decrypting the message
function morse2text()
{
	let code = document.getElementById("input").value;
	let arr1 = code.split(" ");
	
	let arr2 = arr1.map(x=>{
		if(getKey(mapping,x))
		{
			return getKey(mapping,x);
		}
		else if(x==""){
			return " ";
		}
		else{
			return x;
		}
	});	
	
	let text = arr2.join("").replace(/\s\s+/g, ' ');	
	document.getElementById("output").value = text;		
}