import { connect } from "react-redux";
import OrderButton from "../components/order_button.jsx";
import addTableItem from "../actions/add_table_item";

const mapStateToProps = state => {
  return {
    selectedTable: state.selectedTable,
    tableStatusData: state.tableStatusData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAdd: (name, price, tableId) => {
      dispatch(addTableItem(name, price, tableId));
    }
  };
};

const OrderButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderButton);

export default OrderButtonContainer;
