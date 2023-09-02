// sort by data
// const catagories = async() =>{
//     const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
//     const data = await res.json();
//     const category = data.data;
//     category.forEach(category => {
//         sortByView(category.category_id)
//     });
    
// }
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
    views.forEach(view => {
        console.log(view);
    });
}