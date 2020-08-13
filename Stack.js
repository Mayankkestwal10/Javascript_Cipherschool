class Stack{
	constructor(){
      this.stk = [];
    }
	
    push = function(element){
    	this.items.push(elements)
    }
    
    pop = function(){
    	let popitem = this.items.pop();
        return popitem;
    }
    
   peek = function(){
     return this.stk[this.stk.length - 1];
   }

   isEmpty = function(){
     return this.stk.length === 0;
   }     

   clear = function(){
      this.stk.length = 0;
   }
     
   size = function(){
     return this.stk.length;
   }
}