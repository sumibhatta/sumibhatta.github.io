// fetch("https://api.github.com/users/sumibhatta")
//     .then(
//         response => response.json()
//     )
//     .then(function(data) {
//         console.log(data);
//     })

fetch("https://api.github.com/users/sumibhatta/repos")
    .then(
        response => response.json()
    )
    .then(
        function(a) {
            // console.log(a);
            let titles = document.getElementsByClassName('name');
            let languages = document.getElementsByClassName('language');
            let link = document.getElementsByClassName('link');

            for (let i = 0; i < titles.length; i++) {
                titles[i].innerHTML = a[i]['name'];
                languages[i].innerHTML = a[i]['language'];
                link[i].setAttribute('href', a[i]['clone_url']);

            }
        }
    )