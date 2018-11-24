import { connect } from "react-redux";
import ToggleTable from "../components/toggle_table.jsx";
import toggleTable from "../actions/toggle_table";
import incrementMoneyEarned from "../actions/increment_money_earned";

const mapStateToProps = state => {
  return {
    selectedTable: state.selectedTable,
    tableStatus: state.tableStatusData[state.selectedTable],
    tableData: state.tableData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleTable: (tableId, tableData) => {
      console.log("Money Earned", tableId, tableData);
      let total_money = 0;
      for (let i = 0; i < tableData[tableId].length; i++) {
        total_money += tableData[tableId][i].price;
      }
      console.log("total_money", total_money);
      dispatch(toggleTable(tableId));
      dispatch(incrementMoneyEarned(total_money));
    }
  };
};

const ToggleTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleTable);

export default ToggleTableContainer;
