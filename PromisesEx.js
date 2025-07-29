function getNumber(num)
{
    return new Promises(resolve=>setTimeout(()=>resolve(num),500)); 
}
getNumber(2)
.then(n=>getNumber(n+3))
.then(n2=>console.log("Result",n2))
.catch(arr=>console.error(err)); 
