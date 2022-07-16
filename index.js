function Add(str) 
{
    if(str === "") return 0;
    str = str.toString();
    // split by commas and store in array and assign array to a var called strArr
    if(str.includes("\n,")===true || str.includes(",\n")===true)
        return "following input is not okay";

    str = str.replace("\n", ",");
    
    var delimeter = ',';
    if(str[0]=='/' && str[1]=='/')
    {
        delimeter = str[2];
    }

   

    

    let strArr = str.split(delimeter);

    for(let i = 0;i<strArr.length;i++)
    {
        
        if(strArr[i][0]==='-')
            return "negatives not allowed";
    }

    for(let i = 0;i<strArr.length;i++)
    {
        
        if(parseInt(strArr[i])>=1000)
            strArr[i] = '0';
            
    }

    // reduce method to sum
    if(str[0] === '/' && str[1] === '/') {
        strArr = strArr.slice(1);
    }

    let sum = strArr.reduce(function(total,sum){
        return parseFloat(total) + parseFloat(sum);
    })
    
    return  sum;
}

module.exports = Add;