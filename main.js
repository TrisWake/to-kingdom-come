function strikeThrough(){
   const firstArgItem = document.querySelector('#arguments > li')
   firstArgItem.style.textDecoration = 'line-through'
}

strikeThrough()

function attachURL(id, url){
    document.querySelector(`#${id}`).src = url
}
attachURL('image-1', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-OkIox0eHzdapxiijF5haRF7_CkkI8NWXtw&s")

attachURL('image-2', "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Memphis_Grizzlies.svg/640px-Memphis_Grizzlies.svg.png")

attachURL('image-3', "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/ten.png")

function removeFirstListItem(){
 const firstItem = document.querySelector('#Arguments > li')
 if(firstItem){
    firstItem.remove()
 }
}
removeFirstListItem()
removeFirstListItem()

function adjustTextSize(font, id){
    const element = document.querySelector('#cc')
    if(element){
        element.style.fontSize = fontSize
    }
}

function appendToList(element){
    const ul = document.querySelector('#arguments')
}
if(ul){
    ul.appendChild(element)
}
const imgElement = document.querySelector('#images')
if(imgElement){
    appendToList(imgElement)
}