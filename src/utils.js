const paginate = (paginate) => {
let items_per_page=5
let PageItems= Math.ceil(paginate.length/items_per_page);
const Newfollowers= Array.from({length:PageItems},(_,index)=>{
    let start= index*items_per_page
    return paginate.slice(start,start+items_per_page)
})
console.log(Newfollowers);
}

export default paginate
