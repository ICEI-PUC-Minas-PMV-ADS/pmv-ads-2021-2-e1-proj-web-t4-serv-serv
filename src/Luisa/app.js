let element1 = document.getElementById("grid-item1")

var img = document.createElement("img")
element1.style.backgroundImage = "https://picsum.photos/200";
element1.appendChild(img)

const images = [
    {e: 'grid-item1', img: 'https://picsum.photos/200'},
    {e: 'grid-item2', img: 'https://picsum.photos/200'},
    {e: 'grid-item3', img: 'https://picsum.photos/200'},
    {e: 'grid-item4', img: 'https://picsum.photos/200'},
    {e: 'grid-item5', img: 'https://picsum.photos/200'},
    {e: 'grid-item6', img: 'https://picsum.photos/200'},
    {e: 'grid-item7', img: 'https://picsum.photos/200'},
    {e: 'grid-item8', img: 'https://picsum.photos/200'},
    {e: 'grid-item9', img: 'https://picsum.photos/200'},
    ]

    images.forEach(item => {
        var img = document.createElement("img")
        img.src = item.img
        var e = document.getElementById(item.e)
        e.appendChild(img)
        })

    