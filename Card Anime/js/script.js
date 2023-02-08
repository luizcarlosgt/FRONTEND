const card = document.querySelector('.card');

const urls = [
    'https://i0.wp.com/techwek.com/wp-content/uploads/2021/10/Wallpapers-Naruto.jpg?fit=960%2C1707&ssl=1',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScE1jC9hux7nps_vpggOdeJJm2lgqkmPtbBUfde9XsJeEng4x8TKIK8LXjdIWVneeg9Ok&usqp=CAU',
    'https://www.teahub.io/photos/full/22-224494_anime-wallpaper-4k-iphone.jpg',
    'https://1.bp.blogspot.com/-YsZYPtrLaZc/YKsFQ1TMspI/AAAAAAAAA3U/LJ749FUeLLsb51SZKK4ahN7a7Svd7GUbQCLcBGAsYHQ/s1309/491139fc36562c7bb34e3906843c750d.jpg',
    'https://i0.wp.com/omeudiadia.com.br/wp-content/uploads/2022/07/silencio.webp?resize=576%2C1024&ssl=1'
]

setInterval(function(){
    let randomNumber = Math.floor(Math.random() * urls.length)
    card.style.backgroundImage = "url("+urls[randomNumber]+")"
    card.style.backgroundSize = 'cover'
    console.log(randomNumber)
}, 4000)