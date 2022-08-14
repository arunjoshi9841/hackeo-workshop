type User = {
    id: string;
    userName: string;
    name: string;
    emailAddress: string; 
    profilePic?: string;   
}
type Account = User & {
    isLoggedIn: boolean;
}
export type {Account, User};