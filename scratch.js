class _Node{
	constructor(value,next){
		this.value = value;
		this.next = next;
	}
}

class Stack{
	constructor(){
		this.head = null;
	}
	
	push(value){
		let x = new _Node(value, null);
		if(this.head === null){this.head = x; return this.head;}
		const newHead = new _Node(value, this.head);
		this.head = newHead;
	}

	pop(){
		let popped = this.head;
		this.head = popped.next;
		return popped.value;
	}
}

	function peek(stack){
		return stack.head.value;
	}
	function display(stack){
		let displaying = stack.head;
		while(displaying !== null){
			console.log(displaying.value);
			displaying = displaying.next;
		}
	}


let starTrek = new Stack();

starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');
starTrek.pop();
console.log(starTrek.pop());
console.log(starTrek);
console.log(peek(starTrek));
display(starTrek);

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

	let stackStorage = new Stack();
		for(let i = 0 ; i < s.length; i++){
			stackStorage.push(s.charAt(i));
		}
		let reverse = '';
	/*	let x = stackStorage.head;
	while(x !== null){
		reverse += x.value;
		x = x.next;
	}*/
	for(let i = 0; i < s.length; i++){reverse += stackStorage.pop();}

	return s === reverse;
}

// true, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));

function openClose(s){

	let stackStorage = new Stack();
		for(let i = s.length-1 ; i >= 0 ; i--){
			stackStorage.push(s.charAt(i));
		}
	let x = stackStorage.head;
	let openCount = 0;
	let closeCount = 0;
	while(x !== null){
		if(x.value === '('){openCount++;}
		if(x.value === ')'){closeCount++;}
		x = x.next;
	}
	//extra open brace
	if(openCount > closeCount){
		let y = stackStorage.head;
		let characterCountOpen = 1;
		while(y.value !== '('){
			characterCountOpen++;
			y=y.next;
		}
		console.log('Open Parenthesis without complimentary close detected in string at character # ' + characterCountOpen);
	}
	//extra close brace
	if(openCount < closeCount){
		let stackStorageReverse = new Stack();
		for(let i = 0 ; i < s.length; i++){
			stackStorageReverse.push(s.charAt(i));
		}


		let z = stackStorageReverse.head;
		let characterCountClose = 1;
		while(z.value !== '('){
			characterCountClose++;
			z=z.next;
		}
		let w = s.length - characterCountClose;
		console.log('close Parenthesis without complimentary close detected in string at character # ' + w);
		
	}
	
	if(openCount === closeCount){console.log('you\'re fine!');}
}

//note: needs to know which "side" of the completed parenthesis the unpaired one is on

openClose('hello There');
openClose('(hello(oo)hello)');
openClose('qwerrttyt(fffffff()fffff');
openClose('ddddddddddd)ffffffff()fffffff');

function sortStack(unsorted){

	let bin = new Stack();
	let goal = new Stack();

	if(bin.head === null && goal.head === null ){
		goal.push(unsorted.pop());
	}


	while(unsorted.head !== null){
		if(unsorted.head.value <= goal.head.value){goal.push(unsorted.pop());}
		else{
			let x = goal.head.value;
			while(unsorted.head.value > x){
				bin.push(goal.pop());
				if(goal.head === null){x = 10000000;}
				else{x=goal.head.value;}
			}
			goal.push(unsorted.pop());
			while(bin.head !== null){
				goal.push(bin.pop());
			}
		}
	
	}
	return goal;

}

let numberStack = new Stack();
numberStack.push(3);
numberStack.push(5);
numberStack.push(2);
numberStack.push(1);
numberStack.push(4);



display(sortStack(numberStack));

//==========================================================================================


//==========================================================================================

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
  }
  enqueue(data){
    const node = new _Node(data);
    if(this.first === null){
      this.first = node;
    }
    if(this.last){
      node.next = this.last;
      this.last.prev = node;
    }
    this.last = node;
  }
  dequeue(){
    if(this.first === null){
      return;
    }
    const node = this.first;
    this.first = node.prev;
    if(this.first){
      this.first.next = null;
    }
    if(node === this.last){

      this.last = null;
    }
    return node.value;
  }
}

const displayQueue= queue => {
  // return stack.top;
  const queueDisplay = {};
  let currNode = queue.first;
  let position = 0;
  while (currNode) {
    // add node to list obj
    queueDisplay[`node${position}`] = 
    { data: currNode.value, 
      // prev: currNode.prev ? currNode.prev.value : null,
      // next: currNode.next ? currNode.next.value: null 
    };
    // move to the next node
    currNode = currNode.prev;
    position++;
  }
  // console.log(stackDisplay);
  return queueDisplay;
};

const starTrekQ = new Queue();
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
console.log(displayQueue(starTrekQ));
  
