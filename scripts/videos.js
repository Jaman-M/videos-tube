console.log('videos script added');

// steps: fetch, load, display

// create loadCategories
const loadCategories = () => {
    // fetch
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then((data) => displayCategories(data.categories))
        .catch((error) => console.log(error))
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


loadCategories()