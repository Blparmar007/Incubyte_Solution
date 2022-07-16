const Add = require('./index');
describe('Function is working', () => {
    
    test('Simple Add with Comma',()=>{

        var ans = -1;
        
            ans = Add("1,2");
            expect(ans).toBe(3);
    })

    test('Empty String',()=> {
        ans = Add("");
        expect(ans).toBe(0);
    })

    test('Unknown amount of numbers',()=>{

        var ans = -1;
        
            ans = Add("1,2,3,4,5,6,7");
            expect(ans).toBe(28);
    })


    
    test('Support comma and new line - 1',()=>{

        var ans = -1;
        
            ans = Add("1,2\n,2,3");
            expect(ans).toBe("following input is not okay");
    })

    test('Support comma and new line - 2',()=>{

        var ans = -1;
        
            ans = Add("1,2,\n2,3");
            expect(ans).toBe("following input is not okay");
    })

    test('Support comma and new line - 3',()=>{

        var ans = -1;
        
            ans = Add("1,2\n2,3");
            expect(ans).toBe(8);
    })

    test('support different delimeter',()=>{

        var ans = -1;
        
            ans = Add("//;1;2");
            expect(ans).toBe(3);
    })

    test('Add with a negative number',()=>{

        var ans = -1;
        
            ans = Add("//;1;2;-1");
            expect(ans).toBe("negatives not allowed");
    })

    test('Number is greater than 1000',()=>{

        var ans = -1;
        
            ans = Add("1,2\n2,3000");
            expect(ans).toBe(5);
    })


    
 });





