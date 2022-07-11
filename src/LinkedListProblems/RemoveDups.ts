import { LinkedList } from '@datastructures-js/linked-list'
import { LinkedListNode } from '@datastructures-js/linked-list/src/linkedListNode'

const list = new LinkedList<number>()
list.insertFirst(1)
list.insertFirst(2)
list.insertFirst(3)
list.insertFirst(4)
list.insertFirst(1)
list.insertFirst(5)
list.insertFirst(6)
list.insertFirst(1)
list.insertFirst(3)

const removeDupsWithBuffer = (list: LinkedList<number>) => {
  const trackedVals = new Map<any, any>()
  let node = list.head()
  let prevNode: LinkedListNode<number> | undefined = undefined

  while (node && node.hasNext) {
    if (!!trackedVals.get(node.getValue()) && prevNode) {
      prevNode.setNext(node.getNext())
    }
    trackedVals.set(node.getValue(), node.getValue())
    prevNode = node
    node = node.getNext()
  }
}

const removeDupsWithOutBuffer = (list: LinkedList<number>) => {
  let node = list.head()

  while (node && node.hasNext) {
    let runnerNode = node
    let prevNode: LinkedListNode<number> | undefined = undefined
    while (runnerNode && runnerNode.hasNext) {
      if (runnerNode.getValue() === node.getValue() && prevNode) {
        prevNode.setNext(runnerNode.getNext())
      }
      prevNode = runnerNode
      runnerNode = runnerNode.getNext()
    }
    node = node.getNext()
  }
}

console.log(`Before: ${list.toArray()}`)
removeDupsWithOutBuffer(list)
console.log(`After: ${list.toArray()}`)

console.log(`Before: ${list.toArray()}`)
removeDupsWithBuffer(list)
console.log(`After: ${list.toArray()}`)
