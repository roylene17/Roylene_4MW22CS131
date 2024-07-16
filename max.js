function findMax(arr)
{
    if(arr.length===0)
        {
        return null;
        }
    let max=arr[0];
        for( let i=1;i<arr.length;i++)
        {
            if(arr[i]>max)
            {
            max=arr[i];
            }
        }
    return max;
}
let numbers=[24,55,78,99,1,6,4];
let result=findMax(numbers);
console.log(result);