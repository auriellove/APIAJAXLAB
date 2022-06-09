const redPromise = fetch("https://www.reddit.com/r/aww/.json")
.then(res => res.json());

function displayChildren(data) {
    const child = data.children[0];
    
}

redPromise.then(data => {console.log(data)
console.log(data.data.children)
const post = data.data.children

for (let data of post) {
console.log(data);


const div = document.createElement("div");

const Name = data.data.title;
console.log(Name);
const heading = document.createElement("h1");
heading.innerHTML = Name;
div.appendChild(heading);

const cimg = document.createElement("img");
cimg.src = data.data.thumbnail;
div.appendChild(cimg);

const link = document.createElement("a");
link.href = data.data.url;
div.appendChild(link);

document.body.appendChild(div);
// document.body.style.thumbnail = data.data.thumbnail;
}


}); 

//need a title image and working link for each



