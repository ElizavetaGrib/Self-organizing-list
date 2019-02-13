class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class SelfOrganizedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insert(data) {
			var x = new Node(data);
			if(this.head == null)
			{
				this.head = x;
				this.tail = x;
			}
			else
			{
				this.tail.next = x;
				x.prev = this.tail;
				this.tail = x;
			}
    }

    size() {
			var x = this.head;
			var count;
			for(count = 0; x != null; count++)
			{
				x = x.next; 
			}
			return count;
    }

    at(index) {
			var lastindex = this.size() - 1;
			if (index < 0) 
			{
				return null; 
			}
			if (index > lastindex) 
			{
				return null;
			}
			var x = this.head;
			var i;
			for(i = 0; index != i; i++)
			{
				x = x.next;
			}
			return x.data;
    }

    findNode(data) {
			if (this.head == null)
			{
				return null;
			}
			var x = this.head;
			while ((data != x.data) && (x.next != null))
			{
				x = x.next;
			}
			if (data == x.data)
			{
				return x;
			}
			else 
			{ 
				return null;
			}

    }

    toArray() {
			var array = [];
			var size = this.size();
			var i;
			for (i = 0; i < size; i++)
			{ 
				array[i] = this.at(i);
			}
			return array;
    }

    removeAt(index) {
			var prelastindex = this.size() - 2; 
			if ((index >= 0) && (index <= prelastindex + 1))
			{ 
				var array = this.toArray();
				var i;
				for (i = index; i <= prelastindex; i++)
				{
					array[i] = array[i+1];
				}
				var newlist = new SelfOrganizedList();
				var newsize = prelastindex + 1;
				for (i = 0; i < newsize; i++)
				{
					newlist.insert(array[i]);
				}
				this.head = newlist.head;
				this.tail = newlist.tail;
			}		
    }

    moveToFront(node) {
			if(node == this.head)
			{
				return;
			}
			if(node == this.tail)
			{
				this.tail = this.tail.prev;
				this.tail.next = null;
			}
			else
			{
				node.prev.next = node.next;
				node.next.prev = node.prev;
			}
			node.next = this.head;
			node.prev = null;
			this.head.prev = node;
			this.head = node;	
    }

    reorganize(data) {
			var x = this.findNode(data);
			if(x == null)
			{
				return false;
			}
			else
			{
				this.moveToFront(x);
				return true;
			}
    }
}

module.exports = {
    SelfOrganizedList,
    Node
};