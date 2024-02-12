function Login(input) {

    let password_init = input[0];
    let password_reversed = "";

    for (let i = password_init.length; i >= 0 ; i --) {
        password_reversed += password_init.charAt(i);
    };

    let iter = 1;

    while (password_reversed !== input[iter]) {
        
        if (iter === 4) {
            console.log(`User ${password_init} blocked!`);
            return;
        }

        console.log("Incorrect password. Try again.");

        iter ++;
    };

    console.log(`User ${password_init} logged in.`);
}

Login(['sunny','rainy','cloudy','sunny','notsunny']);