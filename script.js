const handelCategories = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const category = data.data;
    const categoryContainer = document.getElementById('category-container');
    category.forEach(category => {
        const categoryContent = document.createElement('div');
        categoryContent.classList ='mr-4 mb-4'
        categoryContent.innerHTML=`
        <button onclick="handelCard('${category.category_id}')" )" class="tab hover:bg-red-500 bg-gray-200 hover:text-white">${category.category}</button> 
        `
        categoryContainer.appendChild(categoryContent)
    });
    // console.log(category);
}

const handelCard = async(id) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await res.json();
    const card = data.data
    // console.log(card.length);
    const cardContainer = document.getElementById('card-container');
    const emptyContainer = document.getElementById('empty-container');
    cardContainer.textContent = ''
    emptyContainer.textContent = ''
    if (card.length > 0) {
        card.forEach(newCard => {
            const date = newCard.others.posted_date;
            dateValue = parseFloat(date)



            if (isNaN(dateValue)) {
                dateValue =''
            }
            else{
                dateValue = dateValue
            }

            const convertToHoursMin = (dateValue) =>{
                const hours = Math.floor(dateValue / 3600) ;
                const min = Math.floor((dateValue % 3600) / 60 )
                const time = `${hours}hrs ${min}min ago`
                if (hours > 0 && min > 0) {
                    return {time}
                }
                else{
                    return '';
                }
                // return {time}
            }

            const resultDate = convertToHoursMin(dateValue);

        //    console.log(resultDate.time);


            const cardContent = document.createElement('div');
            cardContent.innerHTML =`
            <div class="card">
            <div class="relative">
            <figure class="rounded-xl h-[180px] w-full"><img src="${newCard?.thumbnail}" alt="Image" /></figure>
            </div>
            <h1 class="absolute right-2 top-[140px] bg-gray-800 px-2 rounded text-white"> ${resultDate?.time?resultDate?.time :''}</h1
            <div class="mt-5">
              <div class="flex flex-row items-start gap-2">
                  <div class="avatar">
                    <div class="w-10 rounded-full">
                      <img src="${newCard?.authors[0]?.profile_picture}" />
                    </div>
                  </div>
                  <div>
                    <h1 class="card-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, laudantium.</h1>
                    <div class="card-actions justify-start mt-4">
                        <div class="text-[#111111B3] ">${newCard?.authors[0]?.profile_name} </div> 
                        <div class="">
                        ${newCard?.authors[0]?.verified?`   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clip-path="url(#clip0_11_34)">
                          <path d="M19.375 10.0001C19.375 10.8001 18.3922 11.4595 18.1953 12.197C17.9922 12.9595 18.5063 14.022 18.1203 14.6892C17.7281 15.3673 16.5484 15.4486 15.9984 15.9986C15.4484 16.5486 15.3672 17.7282 14.6891 18.1204C14.0219 18.5064 12.9594 17.9923 12.1969 18.1954C11.4594 18.3923 10.8 19.3751 10 19.3751C9.2 19.3751 8.54062 18.3923 7.80312 18.1954C7.04062 17.9923 5.97813 18.5064 5.31094 18.1204C4.63281 17.7282 4.55156 16.5486 4.00156 15.9986C3.45156 15.4486 2.27187 15.3673 1.87969 14.6892C1.49375 14.022 2.00781 12.9595 1.80469 12.197C1.60781 11.4595 0.625 10.8001 0.625 10.0001C0.625 9.20012 1.60781 8.54075 1.80469 7.80325C2.00781 7.04075 1.49375 5.97825 1.87969 5.31106C2.27187 4.63293 3.45156 4.55168 4.00156 4.00168C4.55156 3.45168 4.63281 2.272 5.31094 1.87981C5.97813 1.49387 7.04062 2.00793 7.80312 1.80481C8.54062 1.60793 9.2 0.625122 10 0.625122C10.8 0.625122 11.4594 1.60793 12.1969 1.80481C12.9594 2.00793 14.0219 1.49387 14.6891 1.87981C15.3672 2.272 15.4484 3.45168 15.9984 4.00168C16.5484 4.55168 17.7281 4.63293 18.1203 5.31106C18.5063 5.97825 17.9922 7.04075 18.1953 7.80325C18.3922 8.54075 19.375 9.20012 19.375 10.0001Z" fill="#2568EF"/>
                          <path d="M12.7094 7.20637L9.14062 10.7751L7.29062 8.92668C6.88906 8.52512 6.2375 8.52512 5.83594 8.92668C5.43437 9.32824 5.43437 9.97981 5.83594 10.3814L8.43125 12.9767C8.82187 13.3673 9.45625 13.3673 9.84687 12.9767L14.1625 8.66106C14.5641 8.25949 14.5641 7.60793 14.1625 7.20637C13.7609 6.80481 13.1109 6.80481 12.7094 7.20637Z" fill="#FFFCEE"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_11_34">
                            <rect width="20" height="20" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>` : ''}   
                        </div>
                      </div>
                      <div class="mt-2">
                        <h1 class="text-[#111111B3] ">${newCard?.others?.views}</h1>
                      </div>
                  </div>
              </div>
            </div>
          </div>
            `
            cardContainer.appendChild(cardContent)
        });
    }
    else{
        const cardContent = document.createElement('div');
        cardContent.innerHTML=`
        <div class="w-full mx-auto mt-4 md:mt-16 lg:mt-24">
        <div class="flex flex-col items-center">
            <img class="w-[140px]" src="images/Icon.png" alt="Image">
        <h1 class="text-xl md:text-4xl font-bold mt-4 md:mt-8" >Oops!! Sorry, There is no </h1>
        <h1 class=" text-xl md:text-4xl font-bold" > content here</h1>
        </div>
        </div>

        `
        emptyContainer.appendChild(cardContent)
    }

}







handelCategories()



// sort by data
const catagories = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const category = data.data;
    category.forEach(category => {
        sortByView(category.category_id)
    });
    
}
const sortByView = async (id) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    const data = await res.json();
    const card = data.data;
    // console.log(card);
    const views = []
    card.forEach(view=> {
        // console.log(view.others.views);
        const eachView = view.others.views;
        const eachViewValue = parseFloat(eachView)
        views.push(eachViewValue);
        views.sort((a,b) =>{
            return (b-a);
        })
        // console.log(view);

    });
    console.log(views);
}



// catagories()