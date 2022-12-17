const ACCESS_TOKEN = "token/ACCESS_TOKEN" as const;
const REMOVE_TOKEN = "token/REMOVE_TOKEN" as const;

type TokenState = {
  token: string;
  user_name: string;
};

const initialState: TokenState = { token: "", user_name: "" };

export const access_token = (token: string, user_name: string) => ({
  type: ACCESS_TOKEN,
  token: token,
  user_name: user_name,
});
export const remove_token = () => ({ type: REMOVE_TOKEN });

function tokenReducer(
  state = initialState,
  action: { type: string; token: string; user_name: string }
) {
  switch (action.type) {
    case ACCESS_TOKEN:
      return {
        token: action.token,
        user_name: action.user_name,
      };
    case REMOVE_TOKEN:
      return {
        token: "",
        user_name: "",
      };
    default:
      return {
        token: state.token,
      };
  }
}

export default tokenReducer;
