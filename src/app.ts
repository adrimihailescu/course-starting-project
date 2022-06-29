const button = document.querySelector('button')!;

function clickHandler(message: string) {
    // let userName = 'Adriana';
    console.log('Clicked!' + message)
}

if(button) {
    button.addEventListener("click", clickHandler.bind(null, "'You're welcome!"))
}

    

//this is just a comment