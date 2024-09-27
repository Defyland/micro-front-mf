export const Style = {
  Container: "w-full bg-grey-100 flex flex-1 justify-center h-vh py-8",
  List: "self-center max-w-[1232px] w-[1232px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8",
  Item: "border border-grey-200 rounded-lg p-4 flex items-center gap-4", // Maior espaçamento
  CartItemImage: "h-[100px] w-auto rounded-lg object-cover bg-[rgba(0,0,0,0.3)]", // Imagem com altura de 100px e largura automática
  CartItemInfo: "flex flex-col justify-between", // Organiza nome e preço
  CartItemTitle: "text-lg font-semibold text-gray-800", // Estilo para o nome do produto
  CartItemPrice: "text-sm text-green-600 font-semibold mt-1", // Estilo para o preço
  CartItemQuantity: "text-gray-600 font-medium mt-2", // Estilo para a quantidade
  TotalContainer: "flex justify-between items-center mt-6 border-t pt-4", // Estilo para o total de itens e valor
  TotalText: "text-lg font-semibold text-gray-800", // Estilo do texto total
  Modal: "size-full fixed top-0 end-0 z-[80] opacity-100 overflow-x-hidden transition-all overflow-y-auto pointer-events-none",
  ModalContent: "sm:max-w-lg sm:w-full m-3 sm:mx-auto",
  ModalCard: "flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto",
  ModalHeader: "flex justify-between items-center py-3 px-4 border-b",
  ModalTitle: "font-bold text-gray-800",
  CloseButton: "size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none",
  ModalBody: "p-4 overflow-y-auto",
  CartItems: "mt-1 text-gray-800 flex flex-col gap-4",
  EmptyCart: "flex flex-col items-center justify-center py-8",
  EmptyCartImage: "w-32 h-32 mb-4 rounded-full",
  EmptyCartMessage: "text-lg text-gray-500",
};