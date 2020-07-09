import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

// const myGitHub = "ianbautista"
// const giHubCard = `https://api.github.com/users/${gitHubName}`

const myGit = "https://api.github.com/users/ianbautista";

// {
//   "avatar_url": "https://avatars1.githubusercontent.com/u/64442827?v=4",
//   "bio": null,
//   "blog": "",
//   "company": "@LambdaSchool",
//   "created_at": "2020-04-27T21:58:34Z",
//   "email": null,
//   "events_url": "https://api.github.com/users/ianbautista/events{/privacy}",
//   "followers": 6,
//   "followers_url": "https://api.github.com/users/ianbautista/followers",
//   "following": 11,
//   "following_url": "https://api.github.com/users/ianbautista/following{/other_user}",
//   "gists_url": "https://api.github.com/users/ianbautista/gists{/gist_id}",
//   "gravatar_id": "",
//   "hireable": null,
//   "html_url": "https://github.com/ianbautista",
//   "id": 64442827,
//   "location": null,
//   "login": "ianbautista",
//   "name": "Christian Bautista",
//   "node_id": "MDQ6VXNlcjY0NDQyODI3",
//   "organizations_url": "https://api.github.com/users/ianbautista/orgs",
//   "public_gists": 0,
//   "public_repos": 28,
//   "received_events_url": "https://api.github.com/users/ianbautista/received_events",
//   "repos_url": "https://api.github.com/users/ianbautista/repos",
//   "site_admin": false,
//   "starred_url": "https://api.github.com/users/ianbautista/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/ianbautista/subscriptions",
//   "twitter_username": null,
//   "type": "User",
//   "updated_at": "2020-07-09T18:13:13Z",
//   "url": "https://api.github.com/users/ianbautista"
// }

const cards = document.querySelector(".cards");

axios
	.get(myGit)
	.then((response) => {
		cards.appendChild(cardMaker(response));
	})
	.catch((error) => {
		error;
	});

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/
console.log(myGit);
/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

function cardMaker(info) {
	// creating new DOM elements
	const card = document.createElement("div");
	const cardImg = document.createElement("img");
	const cardInfo = document.createElement("div");
	const cardName = document.createElement("h3");
	const cardUsername = document.createElement("p");
	const cardInfoLocation = document.createElement("p");
	const cardInfoProfile = document.createElement("p");
	const profileURL = document.createElement("a");
	const cardInfoFollowers = document.createElement("p");
	const cardInfoFollowing = document.createElement("p");
	const cardInfoBio = document.createElement("p");

	// adding the classes
	card.classList.add("card");
	cardInfo.classList.add("card-info");
	cardName.classList.add("name");
	cardUsername.classList.add("username");

	// supplying content
	cardImg.setAttribute("src", info.data["avatar_url"]);
	cardName.textContent = info.data.name;
	cardUsername.textContent = info.data.login;
	cardInfoLocation.textContent = "Location: " + info.data.location;
	profileURL.setAttribute("href", info.data["html_url"]);
	profileURL.innerHTML = "Profile: " + info.data["html_url"];
	cardInfoFollowers.textContent = "Followers: " + info.data.followers;
	cardInfoFollowing.textContent = "Following: " + info.data.following;
	cardInfoBio.textContent = "Bio: " + info.data.bio;

	// building the structure / appending elements
	card.appendChild(cardImg);
	card.appendChild(cardInfo);
	cardInfo.appendChild(cardName);
	cardInfo.appendChild(cardUsername);
	cardInfo.appendChild(cardInfoLocation);
	cardInfo.appendChild(cardInfoProfile);
	cardInfoProfile.appendChild(profileURL);
	cardInfo.appendChild(cardInfoFollowers);
	cardInfo.appendChild(cardInfoFollowing);
	cardInfo.appendChild(cardInfoBio);

	return card;
}

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

// {
//   "login": "tetondan",
//   "id": 8883343,
//   "node_id": "MDQ6VXNlcjg4ODMzNDM=",
//   "avatar_url": "https://avatars2.githubusercontent.com/u/8883343?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/tetondan",
//   "html_url": "https://github.com/tetondan",
//   "followers_url": "https://api.github.com/users/tetondan/followers",
//   "following_url": "https://api.github.com/users/tetondan/following{/other_user}",
//   "gists_url": "https://api.github.com/users/tetondan/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/tetondan/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/tetondan/subscriptions",
//   "organizations_url": "https://api.github.com/users/tetondan/orgs",
//   "repos_url": "https://api.github.com/users/tetondan/repos",
//   "events_url": "https://api.github.com/users/tetondan/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/tetondan/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": "Daniel Frehner",
//   "company": null,
//   "blog": "http://www.danielfrehner.com",
//   "location": "Jackson Hole, Wy",
//   "email": null,
//   "hireable": null,
//   "bio": "Program Manager (PT Web) @ Lambda School\r\n",
//   "twitter_username": null,
//   "public_repos": 57,
//   "public_gists": 3,
//   "followers": 138,
//   "following": 8,
//   "created_at": "2014-09-23T17:47:56Z",
//   "updated_at": "2020-06-26T20:20:04Z"
// }

// {
//   "login": "dustinmyers",
//   "id": 10288477,
//   "node_id": "MDQ6VXNlcjEwMjg4NDc3",
//   "avatar_url": "https://avatars0.githubusercontent.com/u/10288477?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/dustinmyers",
//   "html_url": "https://github.com/dustinmyers",
//   "followers_url": "https://api.github.com/users/dustinmyers/followers",
//   "following_url": "https://api.github.com/users/dustinmyers/following{/other_user}",
//   "gists_url": "https://api.github.com/users/dustinmyers/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/dustinmyers/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/dustinmyers/subscriptions",
//   "organizations_url": "https://api.github.com/users/dustinmyers/orgs",
//   "repos_url": "https://api.github.com/users/dustinmyers/repos",
//   "events_url": "https://api.github.com/users/dustinmyers/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/dustinmyers/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": "Dustin Myers",
//   "company": null,
//   "blog": "",
//   "location": "St George, UT",
//   "email": null,
//   "hireable": null,
//   "bio": null,
//   "twitter_username": null,
//   "public_repos": 159,
//   "public_gists": 8,
//   "followers": 153,
//   "following": 11,
//   "created_at": "2014-12-24T09:53:39Z",
//   "updated_at": "2020-07-07T19:18:36Z"
// }

const followersArray = [
	"https://api.github.com/users/tetondan",
	"https://api.github.com/users/dustinmyers",
	"https://api.github.com/users/justsml",
	"https://api.github.com/users/luishrd",
	"https://api.github.com/users/bigknell",
	"https://api.github.com/users/uniloki",
];

followersArray.forEach((profile) => {
	axios
		.get(profile)
		.then((response) => {
			cards.appendChild(cardMaker(response));
		})
		.catch((error) => {
			error;
		});
});

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
