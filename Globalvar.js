let globalvar="I am global";
function showGlobal()
{
    let name="Dinesh";
    console.log(globalvar);
    console.log("Hello"+name);
}
showGlobal();
console.log(globalvar);
console.log("Hello"+name);

{
    const inside=42;
    console.log(inside);
}
console.log(typeof inside);
{
    var insidevar=42;
}
console.log(typeof insidevar);