const SalesDetail = ({ sale }) => {
  return (
    <tr>
      <td>{sale.title}</td>
      <td>${sale.price}</td>
      <td>{sale.sold}</td>
      <td>${(sale.price * sale.sold).toFixed(2)}</td>
    </tr>
  );
};

export default SalesDetail;
