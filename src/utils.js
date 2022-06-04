const paginate = (paginate) => {
let items_per_page=5
let PageItems= Math.ceil(paginate.length/items_per_page);
    console.log(PageItems)
}

export default paginate
