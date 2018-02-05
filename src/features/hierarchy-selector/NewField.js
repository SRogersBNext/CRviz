import React from "react";
import PropTypes from "prop-types";

import FieldSelect from 'components/FieldSelect';

import style from "./FieldList.module.css";

function NewField({ isFirst, availableFields, onAdd }) {
  if (availableFields.length === 0) {
    return null;
  }

  return (
    <div className={style.newField}>
      <span className={style.field}>
        <span className={style.description}>
          {isFirst ? "Group" : "Then"} by
        </span>
        <FieldSelect fields={ availableFields }
          value={ null }
          onChange={ onAdd }
          className={ style.fieldSelect }
        />
    </span>
  </div>
  )
}

// class NewField extends React.PureComponent {

//   handleChange = (e) => {
//     const path = split(".", e.target.value);
//     const field = find(propEq("path", path), this.props.availableFields);
//     this.props.onAdd(field);
//   };

//   render() {
//     const { availableFields, isFirst } = this.props;

//     if (isEmpty(availableFields)) {
//       return null;
//     }

//     return (
//       <div className={style.newField}>
//         <span className={style.field}>
//           <span className={style.description}>
//             {isFirst ? "Group" : "Then"} by
//           </span>
//           <select className={style.fieldSelect} onChange={this.handleChange}>
//             <option value="">&ndash;</option>
//             {map((field) => {
//               const key = join(".", field.path);
//               return (
//                 <option key={key} value={key}>
//                   {field.displayName}
//                 </option>
//               );
//             }, availableFields)}
//           </select>
//         </span>
//       </div>
//     );
//   }
// }

NewField.defaultProps = {
  isFirst: true
};

NewField.propTypes = {
  availableFields: PropTypes.array.isRequired,
  onAdd: PropTypes.func.isRequired,
  isFirst: PropTypes.bool
};

export default NewField;