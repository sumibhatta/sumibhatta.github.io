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

            for (let i = 0; i < a.length; i++) {
                console.log(a)
                document.getElementById('obj-id').innerHTML += a[i]['id'] + "<br/>";
                document.getElementById('main').innerHTML += a[i]['name'] + "<br/>";
                document.getElementById('obj-links').innerHTML += a[i]['clone_url'] + "<br/>";

            }
        }
    )