// https://leetcode-cn.com/problems/merge-two-sorted-lists/
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let protect = new ListNode(); // 建立保护节点,防止空节点无法返回
  let curNode = protect; // 两个指针指向同一节点
  while (list1 || list2) {
    // 如果list1为空，则指向list2
    if (list1 == null) {
      curNode.next = list2;
      break;
    }
    // 如果list2为空，则指向list1
    if (list2 == null) {
      curNode.next = list1;
      break;
    }
    // 都不为空则比较大小
    if (list1.val <= list2.val) {
      curNode.next = list1;
      list1 = list1.next;
    } else {
      curNode.next = list2;
      list2 = list2.next;
    }
    curNode = curNode.next;
  }
  return protect.next;
};
