function heavycalculate(a,b) {
    return new Promise ((resolve , reject) => {
    SetTimeeout( function () {
        const result = a + b;
        resolve(result);
    } );
    });
}
const result = heavycalculate(1,2);
console.log(result)