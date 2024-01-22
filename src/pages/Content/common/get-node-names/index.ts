export const getNodeNames = (workflowResponse: any) => {
  if (workflowResponse.draft) {
    return workflowResponse.draft.graph.vertices.map((v: any) => v.alias);
  } else {
    return workflowResponse.saved.graph.vertices.map((v: any) => v.alias);
  }
};
