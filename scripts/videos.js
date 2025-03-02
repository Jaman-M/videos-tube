console.log('videos script added');

// added function for timing format
function getTimeString(time) {
    const hour = parseInt(time / 3600);
    let remainingSecond = parseInt(time % 3600);
    const minute = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60;
    return `${hour} hour ${minute} minutes ${remainingSecond} seconds ago`;

}

// steps: fetch, load, display

// create loadCategories
const loadCategories = () => {
    // fetch
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then((data) => displayCategories(data.categories))
        .catch((error) => console.log(error))
}

// load videos 
const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then((data) => displayVideos(data.videos))
        .catch((error) => console.log(error))
};

// this is the object copied
const cardDemo = {
    "category_id": "1001",
    "video_id": "aaag",
    "thumbnail": "https://i.ibb.co/DRxB1Wm/sunris.jpg",
    "title": "Sunrise Reverie",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/yQFJ42h/ava.jpg",
            "profile_name": "Ava Johnson",
            "verified": false
        }
    ],
    "others": {
        "views": "1.1K",
        "posted_date": "16950"
    },
    "description": "'Sunrise Reverie' by Ava Johnson takes listeners on a serene journey through tranquil melodies and soft harmonies. With 1.1K views, this track is perfect for morning relaxation or an evening wind-down. Ava's heartfelt lyrics and soothing voice create a sense of peace, making it a go-to for fans seeking calm and inspiration in their musical choices."
}

const displayVideos = (videos) => {
    // console.log(videos);
    const videoContainer = document.getElementById('videos');
    videos.forEach((video) => {
        console.log(video);
        // card making
        const card = document.createElement('div');
        card.classList = 'card card-compact'
        card.innerHTML =
            `
        <figure class='h-[200px] relative'>
    <img
    class='h-full w-full object-cover'
      src= ${video.thumbnail} />
      ${video.others.posted_date?.length == 0 ? "" : `<span class="absolute right-2 bottom-2 rounded p-1 bg-black text-white">${getTimeString(video.others.posted_date)}</span>`}
      
  </figure>
  <div class="px-0 py-2 gap-2 flex">
    <div>
        <img class="w-10 h-10 rounded-full object-cover"  src=${video.authors[0].profile_picture} />
    </div>
    <div>
        <h2 class='font-bold'>${video.title}</h2>
        <div class="flex items-center gap-2">
            <p class=text-gray-400>${video.authors[0].profile_name}</p>


            ${video.authors[0].verified == true ? `<img class="w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png"/>` : ""}
        </div>
        
        <p></p>
    </div>
    
  </div>
        `

        videoContainer.append(card);
    })
}

//create displayCategorier
const displayCategories = (categories) => {

    const categoryContainer = document.getElementById('categories');


    categories.forEach((item) => {
        console.log(item);

        //create a button
        const button = document.createElement('button');
        button.classList = 'btn';
        button.innerText = item.category;

        // add button to category container
        categoryContainer.append(button)

    })

}


loadCategories();
loadVideos();