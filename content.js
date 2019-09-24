// console.log("content.js file: Chrome extension ready to go!");

posts = [];
// collect all the posts
for(let i = 0; i < document.links.length; i++) 
{ 
	console.log(document.links[i].title);
	posts.push(document.links[i].title)
}


let url = "http://127.0.0.1:5000/social_media_posts";
let headers = new Headers();
headers.set('Accept', 'application/json');
headers.set('Content-Type', 'application/json');
headers.set('Access-Control-Allow-Credentials', true);
headers.set('Access-Control-Allow-Origin', '*');
headers.set('Access-Control-Allow-Methods', 'POST');
headers.set('Access-Control-Allow-Headers', 'application/json');

fetch(url, {
      method: "post",
      headers: headers,
      body: JSON.stringify({"social_media_posts": posts})
    })
    .then((response) => {
    console.log(response);
    response.json().then((data) => {
        console.log(data.social_media_posts);
        sentiments = JSON.parse(data.social_media_posts);

        for(let i = 0; i < document.links.length; i++) 
		{ 
			if(sentiments[i]==="neg")
			{
				document.links[i].style['background-color'] = '#fb886f';
			}
		}
        
    });
});

// fetch("http://127.0.0.1:5000/social_media_posts", {
//   method: "post",
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//     "Access-Control-Allow-Origin" : "*", 
// 	"Access-Control-Allow-Credentials" : true 
//   },

//   //make sure to serialize your JSON body
//   body: JSON.stringify({
//     "social_media_posts": posts
//   })
// })
// .then( (response) => { 
//    console.log(response.body.json());
//    return "hello";
// });
// Sending and receiving data in JSON format using POST method
		
		// var xhr = new XMLHttpRequest();
		// var url = "http://127.0.0.1:5000/social_media_posts";
		// xhr.open("POST", url, true);
		// xhr.setRequestHeader("Content-Type", "application/json");
		// xhr.onreadystatechange = function () {
		//     if (xhr.readyState === 4 && xhr.status === 200) {
		//         var json = JSON.parse(xhr.responseText);
		//         console.log(json.social_media_posts);
	 //    	}
		// };
		// var data = JSON.stringify({"social_media_posts": posts});
		// xhr.send(data);
