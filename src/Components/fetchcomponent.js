

export default async function GetData()
{
let promise = await fetch('https://api.adviceslip.com/advice');
let data = await promise.json();
return data;
}


