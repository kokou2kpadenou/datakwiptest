export const initialState = {
  currentTemplate: "",
  templates: [
    { code: "Polar", desc: "Polar" },
    { code: "Daughnut", desc: "Daughnut" },
    { code: "Bar", desc: "Bar" },
    { code: "Line", desc: "Line" },
    { code: "HorizontalBar", desc: "Horizontal Bar" }
  ],
  elements: [
    { label: "kokou", data: 12 },
    { label: "sam", data: 2 }
  ],
  pageSize: 5,
  currentPage: 1,
  sortColumn: { path: "label", order: "asc" }
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_TEMPLATE":
      return { ...state, currentTemplate: action.payload };

    case "DELETE_ELEMENT":
      return {
        ...state,
        elements: state.elements.filter(elt => elt.label !== action.payload)
      };

    case "ADD_ELEMENT":
      return { ...state, elements: [...state.elements, action.payload] };

    case "UPDATE_ELEMENT":
      return {
        ...state,
        elements: state.elements.map(element =>
          element.label === action.payload.label ? action.payload : element
        )
      };

    case "CLEAR_ALL_ELEMENTS":
      return { ...state, elements: [] };

    case "CHANGE_SORT":
      return { ...state, sortColumn: action.payload };

    case "PAGE_CHANGE":
      return { ...state, currentPage: action.payload };

    default:
      throw new Error();
  }
};
