import StyledButton from "./Button.styles.ts";
import { ButtonProps } from "./Button.types.ts";

const Button: React.FC<ButtonProps> = ({ refetch, isFetching }) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    refetch();
  };
  return (
    <StyledButton onClick={handleClick} disabled={isFetching}>
      {isFetching ? "Updating..." : "Update Prices"}
    </StyledButton>
  );
};

export default Button;
