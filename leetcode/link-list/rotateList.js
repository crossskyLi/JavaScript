import LinkedList from './LinkedList';

function run() {


	function getLinkedList(n) {

		let num = 0;
		const list = new LinkedList();
		while (num < 10) {
			list.append(num)
			num++
		}

		return list
	}

	const list = getLinkedList(10);

	function rotateK(list, k) {
		const head = list.head;
		let currNode = list.head;
		let prevNode = null;
		let nextNode = null;
		let i = 0;
		while (i < k && currNode) {
			// 取到下个节点
			nextNode = currNode.next;
			// 把下个节点赋值上个节点
			currNode.next = prevNode;
			// 当前节点赋值到上个节点
			prevNode = currNode;
			// 下个节点变成当前节点
			currNode = nextNode
			if (i > k) {
				i = 0
			}
			i++
		}
		head.next = nextNode
		list.head = prevNode;

		console.log(list)
	}

	const myRotateKGroup = () => {
		const n = 1;
	}
	const myReverse = (head, tail) => {
		let prev = tail.next;
		let p = head;
		while (prev !== tail) {
				const nex = p.next;
				p.next = prev;
				prev = p;
				p = nex;
		}
		return [tail, head];
	}
	var reverseKGroup = function(head, k) {
		const hair = new ListNode(0);
		hair.next = head;
		let pre = hair;
	
		while (head) {
				let tail = pre;
				// 查看剩余部分长度是否大于等于 k
				for (let i = 0; i < k; ++i) {
						tail = tail.next;
						if (!tail) {
								return hair.next;
						}
				}
				const nex = tail.next;
				[head, tail] = myReverse(head, tail);
				// 把子链表重新接回原链表
				pre.next = head;
				tail.next = nex;
				pre = tail;
				head = tail.next;
		}
		return hair.next;
	};
}

run()


