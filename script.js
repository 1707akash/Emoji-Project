


document.getElementById("searchText").addEventListener("keyup",searchEmoji);

function searchEmoji(){
    let inputVaue = document.getElementById("searchText").value;
    // console.log(inputVaue);
    displayResult(inputVaue);
};



function displayResult(searchQuery=""){
    let filterData = emojiList.filter((e)=>{
        if(e.description.indexOf(searchQuery) != -1){
            return true;
        }
        if(e.tags.some(elem=>elem.startsWith(searchQuery))){
            return true;
        }
        if(e.aliases.some(elem=>elem.startsWith(searchQuery))){
            return true;
        }
    });


    let parent = document.getElementById("searchResultBox");
    parent.innerHTML="";

    filterData.forEach((ele)=>{
    // creating table-row and table cells-
    let newRow = document.createElement("tr");
    let emojiCell = document.createElement("td");
    let descrp = document.createElement("td");
    let aliasCell = document.createElement("td");

    // filling emojis, desc and aliases in table cells- 
    emojiCell.innerText = ele.emoji;
    descrp.innerText = ele.description;
    aliasCell.innerText = ele.aliases;

    // entering the cells in table row- 
    newRow.appendChild(emojiCell);
    newRow.appendChild(descrp);
    newRow.appendChild(aliasCell);

    parent.appendChild(newRow);

});
    
};

window.onload = ()=>displayResult();