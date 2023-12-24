var a = document.getElementById('abc')

function add(){
    var add = document.getElementById('addtodo')
    var li = document.createElement('li')
    var label = document.createElement('label')
    var textinsert = document.createTextNode(add.value)
    li.appendChild(textinsert)
    console.log(li)
    a.appendChild(li)
    add.value = null
    var del = document.createElement('button')
    var cd = document.createTextNode("Delete")
    del.appendChild(cd)
    label.appendChild(del)
    del.setAttribute('onclick','delitem(this)')
    del.setAttribute('class',' aib')
    var ed = document.createElement('button')
    var ei = document.createTextNode('Edit');
    ed.appendChild(ei)
    label.appendChild(ed)
    ed.setAttribute('onclick','edi(this)')
    ed.setAttribute('class','beauty')
    label.setAttribute('class','lab')
    li.appendChild(label)
}
function delitem(e){
    e.parentNode.parentNode.remove()
}

function delall(){
    a.innerHTML = ''
}


function edi(e){
    var a = prompt("Enter value which you want to edit.",e.parentNode.parentNode.firstChild.nodeValue)
    e.parentNode.parentNode.firstChild.nodeValue = a
}