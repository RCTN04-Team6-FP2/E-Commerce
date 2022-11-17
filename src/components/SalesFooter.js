const SalesFooter = ({ soldProducts }) => {
  const total = soldProducts.reduce(
    (prev, current) => prev + current.sold * current.price,
    0
  );

  return (
    <tr style={{ backgroundColor: "black" }}>
      <td colSpan={3}>
        <div style={{ float: "right", color: "white" }}>Total Pendapatan</div>
      </td>
      <td style={{ color: "white" }}>${total.toFixed(2)}</td>
    </tr>
  );
};

export default SalesFooter;
