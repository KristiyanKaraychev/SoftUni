function bitcoinMining(input) {

    const bitcoin_price = 11949.16;
    const gram_of_gold = 67.51;

    let days = input.length;
    let grams_per_day = 0;
    let total_gold = 0;
    let bought_bitcoin = false;
    let day_bought_bitcoin = 0;

    for (let i = 1; i <= days; i++) {
        
        grams_per_day = Number(input.shift());
        
        if (i % 3 === 0) {
            grams_per_day = grams_per_day * 0.70;
        }
        
        total_gold += grams_per_day * gram_of_gold;

        if (bought_bitcoin === false) {
            if (total_gold >= bitcoin_price) {
                day_bought_bitcoin = i;
                bought_bitcoin = true;
            }
        }
    }

    if (bought_bitcoin) {
        console.log(`Bought bitcoins: ${Math.floor(total_gold / bitcoin_price)}\nDay of the first purchased bitcoin: ${day_bought_bitcoin}\nLeft money: ${(total_gold - (Math.floor(total_gold / bitcoin_price) * bitcoin_price)).toFixed(2)} lv.`);
    } else {
        console.log(`Bought bitcoins: ${Math.floor(total_gold / bitcoin_price)}\nLeft money: ${(total_gold - (Math.floor(total_gold / bitcoin_price) * bitcoin_price)).toFixed(2)} lv.`);
    }
    
}

bitcoinMining([50, 100]);