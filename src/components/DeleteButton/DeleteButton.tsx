import { AiFillDelete } from "react-icons/ai";
import { Meta } from "../../services/StockServices.types";
import { ButtonStyle } from "./DeleteButton.styles";

export type DeleteButtonProps = {
  stock: Meta;
  onClick: (stock: Meta) => void;
};

function DeleteButton({ stock, onClick }: DeleteButtonProps) {
  const handleDeleteClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    stock: Meta
  ) => {
    event.stopPropagation();
    onClick(stock);
  };

  return (
    <ButtonStyle
      aria-label="Delete item"
      role="button"
      onClick={(e) => handleDeleteClick(e, stock)}
      data-testid="delete-button-container"
    >
      <AiFillDelete />
    </ButtonStyle>
  );
}

export default DeleteButton;
