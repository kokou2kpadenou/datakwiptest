import { getRandomColorHex } from "../../utils";

const initialElements = [
  { label: "Baltimore", data: 614700, bgColor: "#1402FF" },
  { label: "Columbia", data: 103663, bgColor: "#533182" },
  { label: "Germantown", data: 90844, bgColor: "#C1426F" },
  { label: "Silver Spring", data: 79750, bgColor: "#687601" },
  { label: "Waldorf", data: 74587, bgColor: "#CAE6C2" },
  { label: "Ellicott City", data: 72247, bgColor: "#7A4492" },
  { label: "Frederick", data: 70166, bgColor: "#3E3BD8" },
  { label: "Glen Burnie", data: 69813, bgColor: "#27417F" },
  { label: "Gaithersburg", data: 67529, bgColor: "#131988" },
  { label: "Rockville", data: 67062, bgColor: "#AF86DE" },
  { label: "Dundalk", data: 62768, bgColor: "#A82460" },
  { label: "Bethesda", data: 62448, bgColor: "#32DDB5" },
  { label: "Bowie", data: 58368, bgColor: "#926765" },
  { label: "Towson", data: 58347, bgColor: "#118200" }
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
      return {
        ...state,
        elements: [
          ...state.elements,
          { ...action.payload, bgColor: getRandomColorHex() }
        ]
      };

    case "UPDATE_ELEMENT":
      return {
        ...state,
        elements: state.elements.map(element =>
          element.label === action.payload.label
            ? { ...action.payload, bgColor: getRandomColorHex() }
            : element
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
