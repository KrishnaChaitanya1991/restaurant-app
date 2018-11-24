import { connect } from "react-redux";
import OrderList from "../components/order_list.jsx";
import deleteTableItem from "../actions/delete_table_item";

const mapStateToProps = state => {
  return {
    selectedTable: state.selectedTable,
    items: state.tableData[state.selectedTable]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: (tableId, id) => {
      console.log(tableId);

      dispatch(deleteTableItem(tableId, id));
    }
  };
};
const OrderListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderList);

export default OrderListContainer;
