type User = {
    id: string;
    userName: string;
    name: string;
    emailAddress: string;    
}
type Account = User & {
    isLoggedIn: boolean;
}
export type {Account, User};