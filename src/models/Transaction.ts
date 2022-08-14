type Transaction = {
    id: string;
    sender: string;
    recipient: string;
    senderName: string;
    amount: number;
    comment: string;
    senderPic?: string;
    dateCreated: string;
}
export default Transaction;