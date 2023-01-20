/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution
{
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2)
    {
        ListNode headNode = new ListNode(int.MinValue);
        ListNode currentNode = headNode;
        int carry = 0;

        while (l1 != null || l2 != null)
        {
            int sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
            int onesPlace = sum % 10;
            carry = sum / 10;
            currentNode.next = new ListNode(onesPlace);
            currentNode = currentNode.next;
            l1 = l1?.next;
            l2 = l2?.next;
        }

        // Take care of remaining carry
        if (carry > 0) currentNode.next = new ListNode(carry);

        return headNode.next;
    }

}
