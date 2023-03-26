import Card from "../dashboard/card";

interface IncomeExpenseCardProps {
  onClick?: () => void;
}

const IncomeExpenseCard = ({ onClick }: IncomeExpenseCardProps) => {
  return (
    <Card onClick={onClick ?? undefined}>
      <div>
        <p>IncomeExpenseCard</p>
      </div>
    </Card>
  );
};

export default IncomeExpenseCard;
