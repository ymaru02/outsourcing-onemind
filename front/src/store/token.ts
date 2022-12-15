const ACCESS_TOKEN = "token/ACCESS_TOKEN" as const;
const REMOVE_TOKEN = "token/REMOVE_TOKEN" as const;

type TokenState = {
  token: string;
};

const initialState: TokenState = { token: "" };

export const access_token = (token: string) => ({
  type: ACCESS_TOKEN,
  token: token,
});
export const remove_token = () => ({ type: REMOVE_TOKEN });

function tokenReducer(
  state = initialState,
  action: { type: string; token: string }
) {
  switch (action.type) {
    case ACCESS_TOKEN:
      return {
        token: action.token,
      };
    case REMOVE_TOKEN:
      return {
        token: "",
      };
    default:
      return {
        token: state.token,
      };
  }
}

export default tokenReducer;
