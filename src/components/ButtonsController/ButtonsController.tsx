import { ButtonsContainer, RadioButton } from "./ButtonsController.styles";
import { ButtonsControllerProps } from "./ButtonsController.types";

const ButtonsController: React.FC<ButtonsControllerProps> = ({
  selected,
  onHandleChartTypeChange,
  chartTypes,
}) => {
  return (
    <ButtonsContainer>
      {chartTypes.map((chartType) => (
        <RadioButton key={chartType}>
          <input
            name="chart-type"
            type="radio"
            value={chartType}
            checked={chartType === selected}
            onChange={onHandleChartTypeChange}
            aria-label={chartType}
          />
          {chartType.charAt(0).toUpperCase() + chartType.slice(1)}
        </RadioButton>
      ))}
    </ButtonsContainer>
  );
};

export default ButtonsController;
