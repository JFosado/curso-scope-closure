const myGlobal = 0;


function myFuction(){
    const myNumber = 1;
    console.log(myGlobal);

    function parent(){ //funcion interna
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child(){
            console.log(inner, myNumber, myGlobal);
        }
        return child()
    }
    return parent ()
}

myFuction();