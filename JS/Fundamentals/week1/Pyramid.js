function pyramid(base, increment) {

    let total_size = 0;
    let inner_layer = 0;
    let stone = 0;
    let marble = 0;
    let lapiz = 0;
    let gold = 0;

    let iter = base;
    let steps = 0;

    while (iter > 0) {

        total_size = iter * iter;
        inner_layer = (iter - 2) * (iter - 2);
        steps += 1;

        if (iter <= 2) {
            gold += (iter * iter) * increment;
        } else {
            stone += inner_layer * increment;

            if (steps % 5 === 0) {
                lapiz += (total_size - inner_layer) * increment;
            } else {
                marble += (total_size - inner_layer) * increment;
            }
        }
        
        iter -= 2;
    }

    let height = steps * increment;

    console.log(`Stone required: ${Math.ceil(stone)}\nMarble required: ${Math.ceil(marble)}\nLapis Lazuli required: ${Math.ceil(lapiz)}\nGold required: ${Math.ceil(gold)}\nFinal pyramid height: ${Math.floor(height)}`);
}

pyramid(12,1);