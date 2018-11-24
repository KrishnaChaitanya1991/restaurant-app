import { connect } from "react-redux";
import TableButton from "../components/table_button.jsx";
// import tableStatusData from "../";
import selectTable from "../actions/select_table";

const mapStateToProps = state => {
  return {
    // id: state.tableId,
    selectedTable: state.selectedTable,
    tableStatusData: state.tableStatusData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelect: id => {
      dispatch(selectTable(id));
    }
  };
};

const TableButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TableButton);

export default TableButtonContainer;
