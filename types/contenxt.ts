type userTypes = {
  username: string;
  family: string;
  role: string;
  department: string;
};

interface contextType {
  save_product: boolean;
  maxWidth: object;
  px: object;
  margin: string;
  user_detail: userTypes;
}
export default contextType;
