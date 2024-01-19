const input="if ( v > 0 ) return true"

function* lexer(str){
    var tokenizer=str.split(" ");
    console.log('sndbsb: ', tokenizer);
    for(const x of tokenizer ){
        console.log(x);
        
        function symb(type, value){
            return {
                type,
                value
            }
        }

        if(x === undefined){
            yield{
                type:"EOF", 
            };
        }else if(x === "if"){
            yield symb("keyword", "if")
        }else if(x === "("){
            yield symb("keyword", "(")
        }else if(x === ">"){
            yield symb("keyword", ">")
        }else if(x === ")"){
            yield symb("keyword", ")")
        }else if(x === "return"){
            yield symb("keyword", "return")
        }else if(x === "true"){
            yield symb("keyword", "true")
        }else if(x === "v"){
            yield symb("var", "v")
        }else if(x==="0"){
            yield symb("number", "0")
        }else{
            throw new SyntaxError(`unexpected character "${x}"`);
        }
    }
}

for ( const token of lexer(input)){
    console.log(token)
}