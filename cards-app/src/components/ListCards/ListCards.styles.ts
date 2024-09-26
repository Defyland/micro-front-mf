export const Style = {
  Container: "w-full bg-grey-100 flex flex-1 justify-center h-vh pt-4",
  List: "self-center max-w-[1400px] w-[1400px] flex justify-around md:justify-between flex-wrap gap-4",
  Item: "border border-grey-200 rounded-lg p-4 mb-4 flex justify-between",
  Modal: "size-full fixed top-0 end-0 z-[80] opacity-100 overflow-x-hidden transition-all overflow-y-auto pointer-events-none",
  ModalContent: "sm:max-w-lg sm:w-full m-3 sm:mx-auto",
  ModalCard: "flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto",
  ModalHeader: "flex justify-between items-center py-3 px-4 border-b",
  ModalTitle: "font-bold text-gray-800",
  CloseButton: "size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none",
  ModalBody: "p-4 overflow-y-auto",
  CartItems: "mt-1 text-gray-800 flex flex-col",
};
