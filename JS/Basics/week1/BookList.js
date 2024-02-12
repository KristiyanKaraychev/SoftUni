function BookList(input){
    let pagesTotal = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);
    let hours = pagesTotal / pagesPerHour / days;
    console.log(hours)
}

BookList([2000,20,2]);