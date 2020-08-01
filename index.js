function getName(node) {

    return node.name;

}

function headNode (linkedList, collection){

  return collection[linkedList];

}

function next (head, collection){

    return  collection[head.next];

}

function nodeAt (index, linkedList, collection) {

  let node = collection[linkedList];

  for(let i = 0; i < index; i++){
     node = next(node, collection);
  }
 
  return node;   

}

function addressAt (index, linkedList, collection) {

  if (index > 0){

  let newIndex = index - 1;

  let thisNode = nodeAt(newIndex, linkedList, collection);  

  return thisNode.next;

  }

  else {

    return linkedList;
  }
}

function indexAt (nodeVariable, collection, linkedList) {

  if (collection[linkedList] === nodeVariable){

    //collection[whana] points to firstNode; if nodeVariable is firstNode, return 0;
    return 0;
  }

  else if (collection[collection[linkedList].next]===nodeVariable){

    //collection[rkjasj] points to secondNode; if nodeVariable is secondNode, return 1;

    return 1;
  }

  else{

    let indexPosition = 1;

    let finished = 0;

    let currentNode = collection[linkedList];

    let currentAddress = linkedList;

    while (finished < 1){

      let theNextNode = next(currentNode, collection);

      // this moves from the head to the next node

   let thisAddress = theNextNode.next;


      if (collection[thisAddress]===nodeVariable) {

        //if collection[asnan] points to nodeVariable, return indexPosition + 1; 

        finished += 1;

        indexPosition += 1;

        return indexPosition;
      } 

      else {

      currentAddress = collection[currentAddress].next;

      currentNode = collection[currentAddress];

      }
    }

  }


}

function insertNodeAt (index, address, linkedList, collection) {

  let currentNode = collection[linkedList];

  let currentIndex = 0;

  let addToNextBefore;

  let addressForNext;


  while (currentIndex <= index){

    if (currentIndex === index - 1){

      addressForNext = currentNode.next;

      currentNode.next = address;

      currentIndex +=1;

      currentNode= next(currentNode, collection);

    }

    else if (currentIndex === index){

      currentNode.next = addressForNext;

      currentIndex +=1;

      currentNode= next(currentNode, collection);

    }

    else{

      index += 1;

      currentNode= next(currentNode, collection);
    }
  }

}

function deleteNodeAt (index, linkedList, collection) {

  let currentNode = collection[linkedList];

  let currentIndex = 0;

  let addressForAddingNext;

  let addressToAdd;


  while (currentIndex <= index){

    if (currentIndex === index - 1){

      addressForAddingNext = currentNode;

      currentIndex +=1;

      currentNode= next(currentNode, collection);

    }

    else if (currentIndex === index){

      addressToAdd = currentNode.next;

      addressForAddingNext.next = addressToAdd;

      currentIndex +=1;

      currentNode= next(currentNode, collection);

    }

    else{

      index += 1;

      currentNode= next(currentNode, collection);
    }
  }


  // let firstNode = {name: 'susie', next: 'rkjasj'}
  // let secondNode = {name: 'sam', next: 'asnan'}
  // let newNode = {name: 'jill', next: ''}
  // let lastNode = {name: 'charlie', next: null}
  // let collection = {rkjasj: secondNode,
  //   asnan: lastNode,
  //   whana: firstNode,
  //   ajhsak: newNode}
  //   let linkedList = 'whana'
  //   deleteNodeAt(1, linkedList, collection)
  //   expect(firstNode.next).toEqual('asnan')

  // let firstNode = {name: 'susie', next: 'rkjasj'}
  //     let secondNode = {name: 'sam', next: 'asnan'}
  //     let lastNode = {name: 'charlie', next: null}
  //     let collection = {rkjasj: secondNode,
  //       asnan: lastNode,
  //       whana: firstNode}

  //       let linkedList = 'whana'

  //     deleteNodeAt(1, linkedList, collection)
  //     expect(nodeAt(0, linkedList, collection)).toEqual(firstNode)
  //     expect(nodeAt(1, linkedList, collection)).toEqual(lastNode)

}

