const initialElements = [
  { label: "Baltimore", data: 614700 },
  { label: "Columbia", data: 103663 },
  { label: "Germantown", data: 90844 },
  { label: "Silver Spring", data: 79750 },
  { label: "Waldorf", data: 74587 },
  { label: "Ellicott City", data: 72247 },
  { label: "Frederick", data: 70166 },
  { label: "Glen Burnie", data: 69813 },
  { label: "Gaithersburg", data: 67529 },
  { label: "Rockville", data: 67062 },
  { label: "Dundalk", data: 62768 },
  { label: "Bethesda", data: 62448 },
  { label: "Bowie", data: 58368 },
  { label: "Towson", data: 58347 }
];

export const initialState = {
  currentTemplate: "",
  templates: [
    { code: "Polar", desc: "Polar" },
    { code: "Daughnut", desc: "Daughnut" },
    { code: "Bar", desc: "Bar" },
    { code: "Line", desc: "Line" },
    { code: "HorizontalBar", desc: "Horizontal Bar" }
  ],
  elements: [...initialElements],
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

    case "RESET_ALL_ELEMENTS":
      return { ...state, elements: [...initialElements] };

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
