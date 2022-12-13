export interface IUserContext {
	userData: string | null;
	setUserData: React.Dispatch<React.SetStateAction<string | null>>;
}
