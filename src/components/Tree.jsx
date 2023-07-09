import React from 'react'
import { Tree, TreeNode } from "react-organizational-chart";
import styled from "@emotion/styled";

const StyledNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid black;
  font-weight: 500;
`;

const StyledTreeExample = () => {
  const clinical = [
    "Asst Surgeon",
    "Head Nurse",
    "Staff Nurse",
    "Nursing Assistant",
    "HA - Gr II",
    "Doctor",
    "Surgeon",
    "Anesthesiologist",
    "Pharmacist",
  ];
  const paramedical = ["Pharmacist", "lab"];
  const Field1 = ["PHN", "JPHN"];
  const Field2=["HS","HI","JHI"]
  const admins=["Clerk","Office Attendent"]


  const renderClinicalNodes = (nodes, index = 0) => {

    if (index === nodes.length - 1) {
      return <TreeNode label={<StyledNode>{nodes[index]}</StyledNode>} />;
    } else {
      return (
        <TreeNode label={<StyledNode>{nodes[index]}</StyledNode>}>
          {renderClinicalNodes(nodes, index + 1)}
        </TreeNode>
      );
    }
  };

  return (
    <Tree
      lineWidth={"2px"}
      lineColor={"black"}
      lineBorderRadius={"10px"}
      label={<StyledNode>Medical Office</StyledNode>}
    >
      <TreeNode label={<StyledNode>Clinical</StyledNode>}>
        {renderClinicalNodes(clinical)}
      </TreeNode>
      <TreeNode label={<StyledNode>Paramedical</StyledNode>}>
        {paramedical.map((value) => {
          return <TreeNode label={<StyledNode>{value}</StyledNode>} />;
        })}
      </TreeNode>
      <TreeNode label={<StyledNode>Field</StyledNode>}>
      {renderClinicalNodes(Field1)}
      {renderClinicalNodes(Field2)}

      </TreeNode>
      <TreeNode label={<StyledNode>Administration</StyledNode>}>
      {renderClinicalNodes(admins)}
      </TreeNode>
    </Tree>
  );
};
function TreeComponent() {
  return (
    <StyledTreeExample />
  )
}

export default TreeComponent