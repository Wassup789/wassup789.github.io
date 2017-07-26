window.onload = function(){
    var tbody = document.querySelector("#releases tbody");
    for(var i = 0; i < data.length; i++){
        var node = document.querySelector("#masterRow").cloneNode(true);
        node.removeAttribute("id");
        node.style.display = "table-row";
        if(data[i].links.download !== "")
            node.children[0].children[0].href = data[i].links.download;
        else
            node.children[0].children[0].style.display = "none";
        if(data[i].links.changelog !== "")
            node.children[3].children[0].href = data[i].links.changelog;
        else{
            node.children[3].children[0].href = "";
            node.children[3].children[0].text = "None";
            node.children[3].children[0].classList.add("empty")
        }
        node.children[1].innerHTML = "v" + data[i].version;
        node.children[2].innerHTML = moment(data[i].date, "YYYY/MM/DD").format("MMMM Do, YYYY");
        node.children[3].children[0].href = data[i].links.changelog;
        tbody.appendChild(node);
    }
};