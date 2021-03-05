const Memory = require('./memory')

const memory = new Memory;

class Array {
    constructor() {
        this.length = 0;
        this._capacity = 0;
        this.ptr = memory.allocate(this.length);
    }
    push(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
        memory.set(this.ptr + this.length, value);
        this.length++;
    }
    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
        this._capacity = size;
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return memory.get(this.ptr + index);
    }
    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }
    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        memory.set(this.ptr + index, value);
        this.length++;
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index +1, this.length - index -1);
        this.length--;
    }
}

function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);
    //length is 1, capacity is 3, and memory address is 0

    arr.push(5)
    arr.push(15)
    arr.push(19)
    arr.push(45)
    arr.push(10)
    //length is 6, capacity is 12, and memory address is 3
    console.log(arr);

    //add the following in the main function and then print the array.
    arr.pop();
    arr.pop();
    arr.pop();
    console.log(arr);
    //length is 3, capacity is 12, and address is 3. the last three items were removed from the array
    
    //Print the 1st item in the array
    console.log(arr.get(0));

    //Empty the array and add just 1 item
    arr.pop();
    arr.pop();
    arr.pop();
    arr.push("tauhida");
    console.log(arr);
    
    //Print this 1 item that you just added. What is the result?
    console.log(arr.get(0));
    //The output is NaN. Since the memory is set up as a float array, it can only store numbers, not strings. 

    //What is the purpose of the `_resize()` function in your Array class?
    //The resize function is called when the length of the array becomes larger than the capacity, in order to increase the size of the capacity by a set size ratio.
}

main()